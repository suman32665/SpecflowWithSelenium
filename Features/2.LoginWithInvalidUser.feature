Feature: 2.LoginWithInvalidUser

@regression @login
Scenario: Login to the system with non existing User
	Given I navigate to Bookstore application
	And I click on Book Store Application
	And I click on Login from Menu List
	And I enter username and password as following
	| Username   | Password       |
	| testuser1  | passwordtest1! |

	When I click login button
	Then Invalid Username or Password Message should be displayed