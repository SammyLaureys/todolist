*** Settings ***
Resource  ../pageObjects/basePage.robot

Suite Setup  Run Keywords  Open The Internet
Suite Teardown  Close browser

*** Variables ***
${TASK1}=  Vuilnis buitenzetten
${TASK2}=  Afwas doen
${TASK3}=  Kuisen
${TASK4}=  Stofzuigen

*** Test Cases ***
Add some tasks
    Input Text    inputField    ${TASK1}
    Page Should Contain Button    +
    Sleep                         1s
    Click Button                  +

    Input Text    inputField    ${TASK2}
    Page Should Contain Button    +
    Sleep                         1s
    Click Button                  +

    Input Text    inputField    ${TASK3}
    Page Should Contain Button    +
    Sleep                         1s
    Click Button                  +

    Input Text    inputField    ${TASK4}
    Page Should Contain Button    +
    Sleep                         1s
    Click Button                  +

    Sleep                         3s

Clear tasks
    Page Should Contain Button    CLEAR ALL
    Click Button                  CLEAR ALL

Check if tasks are gone
    Page Should Not Contain           Vuilnis buitenzetten
    Page Should Not Contain           Afwas doen
    Page Should Not Contain           Kuisen
    Page Should Not Contain           Stofzuigen

    Sleep                         3s
    Close Browser