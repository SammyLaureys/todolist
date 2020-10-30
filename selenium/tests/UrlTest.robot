*** Settings ***
Resource  ../pageObjects/basePage.robot

Suite Setup  Run Keywords  Open The Internet
Suite Teardown  Close browser

*** Test Cases ***
Testing the url
    Open Browser  ${BASE_URL}  Google Chrome
    Sleep  5s
    Close Browser