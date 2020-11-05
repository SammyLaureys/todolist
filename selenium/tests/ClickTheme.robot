*** Settings ***
Resource  ../pageObjects/basePage.robot

Suite Setup  Run Keywords  Open The Internet
Suite Teardown  Close browser

*** Test Cases ***
Click info
    Sleep                            3s
    Wait Until Element Is Enabled  id:switch
    Click Element  id:switch
    Sleep                            3s
    Click Element  id:switch
    Close Browser