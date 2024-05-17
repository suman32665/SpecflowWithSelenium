Feature: 3.Register


@regression @register @ignore
Scenario: Register a new customer
	Given I navigate to Bookstore application
	And I click on Book Store Application
	And I click on Login from Menu List
	And I click on New User button
	And I fill up the sign up form
		| FirstName | LastName  |
		| Test99    | User9999! |
	And I click on robot button
	When I click on Register button
	Then the user registered successfully message should be displayed

