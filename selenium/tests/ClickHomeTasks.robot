*** Settings ***
Resource  ../pageObjects/basePage.robot

Suite Setup  Run Keywords  Open The Internet
Suite Teardown  Close browser

*** Test Cases ***
Click HOME TASKS
    Click Element       //*[contains(text(),'HOME TASKS')]
    Close Browser