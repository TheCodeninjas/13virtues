Feature: User can login to website

Scenario: Login to website
	Given I am on the login page
	When I fill in "First Name" with "test"
	And I fill in "Email" with "test"
	And I press "Register"
	Then I should be on the login page

	When I fill in "Login ID" with "test"
	And I press "Login"
	Then I should be on the main page for test
	And I should see "Welcome test"
