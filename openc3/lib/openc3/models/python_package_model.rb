# encoding: ascii-8bit

# Copyright 2023 OpenC3, Inc.
# All Rights Reserved.
#
# This program is free software; you can modify and/or redistribute it
# under the terms of the GNU Affero General Public License
# as published by the Free Software Foundation; version 3 with
# attribution addendums as found in the LICENSE.txt
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# This file may also be used under the terms of a commercial license
# if purchased from OpenC3, Inc.

require 'fileutils'
require 'openc3/utilities/process_manager'
require 'pathname'

module OpenC3
  # This class acts like a Model but doesn't inherit from Model because it doesn't
  # actual interact with the Store (Redis). Instead we implement names, get, put
  # and destroy to allow interaction with python package files from the PluginModel and
  # the PackagesController.
  class PythonPackageModel
    def self.names
      paths = Dir.glob("#{ENV['PYTHONUSERBASE']}/lib/*")
      results = []
      paths.each do |path|
        results.concat(Pathname.new(File.join(path, 'site-packages')).children.select { |c| c.directory? and File.extname(c) == '.dist-info' }.collect { |p| File.basename(p, '.dist-info') })
      end
      return results.sort
    end

    def self.get(name)
      path = "#{ENV['PYTHONUSERBASE']}/cache"
      FileUtils.mkdir_p(path) unless Dir.exist?(path)
      result = Pathname.new(path).children.select { |c| c.file? and File.basename(c, File.extname(c)) == name }
      if result.length > 0
        return result[0] if File.exist?(result[0])
      end
      raise "Package #{name} not found"
    end

    def self.put(package_file_path, package_install: true, scope:)
      if File.file?(package_file_path)
        package_filename = File.basename(package_file_path)
        FileUtils.mkdir_p("#{ENV['PYTHONUSERBASE']}/cache") unless Dir.exist?("#{ENV['PYTHONUSERBASE']}/cache")
        cache_path = "#{ENV['PYTHONUSERBASE']}/cache/#{File.basename(package_file_path)}"
        FileUtils.cp(package_file_path, cache_path)
        if package_install
          return self.install(package_file_path, scope: scope)
        end
      else
        message = "Package file #{package_file_path} does not exist!"
        Logger.error message
        raise message
      end
      return nil
    end

    def self.install(name_or_path, scope:)
      if File.exist?(name_or_path)
        package_file_path = name_or_path
      else
        package_file_path = get(name_or_path)
      end
      package_filename = File.basename(package_file_path)
      begin
        pypi_url = get_setting('pypi_url', scope: scope)
      rescue
        # If Redis isn't running try the ENV, then simply pypi.org/simple
        pypi_url = ENV['PYPI_URL']
        pypi_url ||= 'https://pypi.org/simple'
      end
      Logger.info "Installing python package: #{name_or_path}"
      result = OpenC3::ProcessManager.instance.spawn(["pip", "install", "--user", "-i", pypi_url, package_file_path], "package_install", package_filename, Time.now + 3600.0, scope: scope)
      return result.name
    end

    def self.destroy(name, scope:)
      package_name, version = self.extract_name_and_version(name)
      Logger.info "Uninstalling package: #{name}"
      result = OpenC3::ProcessManager.instance.spawn(["pip", "uninstall", package_name, "-y"], "package_uninstall", name, Time.now + 3600.0, scope: scope)
      return result.name
    end

    def self.extract_name_and_version(name)
      split_name = name.split('-')
      if split_name.length > 1
        package_name = split_name[0..-2].join('-')
        version = File.basename(split_name[-1], '.dist-info')
      else
        package_name = name
        version = "Unknown"
      end

      return package_name, version
    end
  end
end
