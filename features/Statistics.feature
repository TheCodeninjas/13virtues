Feature: Statistics for students, instructor

Scenario: Student Statistics
	Given I have registered to class "Spring 2015" as "test"
	And I am currently on class page "Spring 2015"
	And I follow "Statistics"
	Then I should see "Statistics for Spring 2015"
