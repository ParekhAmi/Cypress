Feature: End to end Tivixrentcar validation

    Scenario: Search car for rent
        Given I open Tivixrentcar search page
        When Fill details of car with pickup and dropoff dates
        And Click on Search button
        Then Verify list of car details

    Scenario: Filling valid input in rent form
        Given I open Tivixrentcar search page
        When Fill details of car and click on search
        And List of car open and click on one car rent button
        And Verify car details and again click on rent! button
        And Give valid input in rent form
        Then Verify with successful redirected page

    Scenario: Filling empty input in name field of rent form
        Given I open Tivixrentcar search page
        When Fill details of car and click on search
        And List of car and verify and click on rent! button
        And Keep name empty in rent form and fill other details
        Then Verify with error validation

    Scenario: Filling empty input in Lastname field of rent form
        Given I open Tivixrentcar search page
        When Fill details of car and click on search
        And List of car and verify and click on rent! button
        And Keep Lastname empty in rent form and fill other details
        Then Verify with error validation

    Scenario: Validation of cardnumber length of rent form
        Given I open Tivixrentcar search page
        When Fill details of car and click on search
        And List of car and verify and click on rent! button
        And Keep cardnumber length morethan required and fill other details
        Then Verify with error validation

    Scenario: Validation of car rent detail page
        Given I open Tivixrentcar search page
        When Fill details of car and click on search
        And List of car and click on rent button
        Then Verify details of car on detail page
       