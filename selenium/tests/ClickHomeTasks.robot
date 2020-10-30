*** Settings ***
Resource  ../pageObjects/basePage.robot

Suite Setup  Run Keywords  Open The Internet
Suite Teardown  Close browser

*** Test Cases ***
Click HOME TASKS
    Page Should Contain Button    HOME TASKS
    Sleep                         3s
    Click Button                  HOME TASKS
    Sleep                         3s
    Close Browser