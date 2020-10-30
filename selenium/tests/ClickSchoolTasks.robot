*** Settings ***
Resource  ../pageObjects/basePage.robot

Suite Setup  Run Keywords  Open The Internet
Suite Teardown  Close browser

*** Test Cases ***
Click HOME TASKS
    Page Should Contain Button    SCHOOL TASKS
    Sleep                         3s
    Click Button                  SCHOOL TASKS
    Sleep                         3s
Check if page is set to school tasks
    Page Should Contain           school tasks
    Close Browser