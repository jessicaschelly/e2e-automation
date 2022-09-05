Feature: Log-in with a valid user
   As a user
   I should be able to create a movement

   Scenario: Login with success
      Given I am on the login page
      And Log in with the user
      Then I should be redirected to a home page