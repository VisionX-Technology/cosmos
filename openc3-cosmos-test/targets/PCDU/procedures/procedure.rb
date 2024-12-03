# Script Runner test script
cmd("PCDU EXAMPLE")
wait_check("PCDU STATUS BOOL == 'FALSE'", 5)
