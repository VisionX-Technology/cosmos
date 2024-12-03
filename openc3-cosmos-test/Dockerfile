# Temel imaj olarak Code Server'ın en son sürümünü kullanın
FROM codercom/code-server:latest

# Gerekli paketleri yükleyin
USER root
RUN apt-get update && apt-get install -y \
    curl \
    sudo \
    && rm -rf /var/lib/apt/lists/*

# /workspace dizinini oluşturun ve kullanıcıya izin verin
RUN mkdir /workspace && chown coder:coder /workspace

# Varsayılan çalışma dizinini /workspace olarak ayarlayın
WORKDIR /workspace

# code-server'ı varsayılan portta çalıştırın
EXPOSE 8080

# Code Server yapılandırmasını düzenleyin
USER coder
RUN mkdir -p ~/.config/code-server && echo 'bind-addr: 0.0.0.0:8080' > ~/.config/code-server/config.yaml

CMD ["code-server", "--bind-addr", "0.0.0.0:8080", "--auth", "none", "/workspace"]

