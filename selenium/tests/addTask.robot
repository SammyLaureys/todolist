*** Settings ***
Resource  ../pageObjects/basePage.robot

Suite Setup  Run Keywords  Open The Internet
Suite Teardown  Close browser

*** Variables ***
${TASK}=  Vuilnis buitenzetten

*** Test Cases ***
Add a task
    Sleep                         2s
    Input Text    inputField      ${TASK}
    Page Should Contain Button    +
    Sleep                         3s
    Click Button                  +
    Sleep                         3s

Check if tasks are there
    Page Should Contain           Vuilnis buitenzetten

    Close Browser