*** Settings ***
Resource  ../pageObjects/basePage.robot

Suite Setup  Run Keywords  Open The Internet
Suite Teardown  Close browser

*** Test Cases ***
Click info
    Sleep                            3s
    Click Link  xpath://a[text()='How to use?']
    Sleep                            3s
Check if page is set to info
    Page Should Contain              How to use the app:
    Close Browser