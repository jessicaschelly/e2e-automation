Feature: Create a Movement
   As a user
   I should be able to create a movement

   Scenario:  Create a movement
      Given I am logged in
      When I go into Create Movement
      And I fill in all required fields and create the movement
      Then it should be displayed a success message