Feature: 4.LoginWithValidUser

@regression @login
Scenario: Login to the system with valid user
	Given I navigate to Bookstore application
	And I click on Book Store Application
	And I click on Login from Menu List
	And I enter username and password

	When I click login button
	Then User should be redirected to landing page