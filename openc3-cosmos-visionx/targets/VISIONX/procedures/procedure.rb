# Script Runner test script
cmd("VISIONX EXAMPLE")
wait_check("VISIONX STATUS BOOL == 'FALSE'", 5)
