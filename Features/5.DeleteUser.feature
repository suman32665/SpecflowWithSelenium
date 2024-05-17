Feature: 5.DeleteUser

@regression @delete @ignore
Scenario: Delete user
	Given I navigate to Bookstore application
	And I click on Book Store Application
	And I click on Login from Menu List
	And I enter username and password

	When I click login button
	And I click on Delete Account Button
	And I click OK on Pop up modal
	Then User deleted message should be displayed