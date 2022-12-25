
Feature: Test Simple login flow

    As a valid user
    I want to log into Application
    Scenario: Valid Login
        Given an anonymous user is on the login page
        When the user enters a valid username and password into the login form
        And submits the form
        Then the user is authenticated
        And the Company Dashboard, including all related company contracts, is available