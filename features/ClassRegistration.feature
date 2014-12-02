Feature: Class creation/registration

Scenario: Admin should be able to create new class
	Given I have logged in as admin
	When I follow "Create Class"
	And I fill in "Class Name" with "Sprint 2015"
	And I press "Create Class"
	Then I should see "Created class"

Scenario: Admin should see list of classes
	Given I as admin have created a new class "Spring 2015"
	And I follow "13 Virtues Tracker"
	When I follow "Registered classes"
	Then I should see "Spring 2015"

Scenario: Student registration to class
	Given There is a class named "Spring 2015"
	And I have registered as "test"
	When I login as "test"
	And I follow "Registered classes"
	And I fill in "Class Name" with "Spring 2015"
	And I press "Register for Class"
	Then I should see "Registered to class Spring 2015"

Scenario: Student should see list of registered classes
	Given I have registered to class "Spring 2015" as "test"
	When I follow "Registered classes"
	Then I should see "Spring 2015"
