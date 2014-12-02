Feature: User can login to website

Scenario: User registration
	Given I have registered as "test"
	Then I should be on the login page

Scenario: Student login to website
	Given I have registered as "test"
	When I login as "test"
	Then I am logged in as "test"

Scenario: Admin login to website
	Given I have logged in as admin
	Then I am logged in as "root"

Scenario: Logout
	Given I have logged in as "test"
	When I follow "Sign out"
	Then I should see "You're signed out"
