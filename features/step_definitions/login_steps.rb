Given /I have registered as "(.*)"/ do |user|
	steps %Q{
		Given I am on the login page
		And I fill in "First Name" with "#{user}"
		And I fill in "Email" with "#{user}"
		And I press "Register"
	}
end

Given /I have logged in as admin/ do
	steps %Q{
		Given I have registered as "root"
	}
	us = User.find_by_email('root')
	us.user_type = User.admin_type
	us.save!
	steps %Q{
		And I login as "root"
	}
end

Given /^I have logged in as "(.*)"/ do |user|
	steps %Q{
		Given I have registered as "#{user}"
		And I login as "#{user}"
	}
end

Given /^There is a class named "(.*)"/ do |cls|
	steps %Q{
		Given I as admin have created a new class "#{cls}"
		And I have logged out
	}
end

Given /^I have registered to class "(.*)" as "(.*)"/ do |cls, usr|
	steps %Q{
		Given There is a class named "#{cls}"
		And I have registered as "#{usr}"
		And I have logged in as "#{usr}"
		And I follow "Registered classes"
		And I fill in "Class Name" with "Spring 2015"
		And I press "Register for Class"
		And I follow "13 Virtues Tracker"
	}
end

Given /^I am currently on class page "(.*)"/ do |cls|
	steps %Q{
		Given I follow "Registered classes"
		And follow "#{cls}"
	}
end

Given /^I as admin have created a new class "(.*)"/ do |cls|
	steps %Q{
		Given I have logged in as admin
		And I follow "Create Class"
		And I fill in "Class Name" with "#{cls}"
		And I press "Create Class"
	}
end

When /^I login as "(.*)"/ do |user|
	steps %Q{
		When I fill in "Login ID" with "#{user}"
		And I press "Login"
	}
end

Then /^I am logged in as "(.*)"/ do |user|
	steps %Q{
		Then I should see "Welcome #{user}"
	}
end

Given /^I have logged out/ do
	steps %Q{
		Given I follow "Sign out"
	}
end
