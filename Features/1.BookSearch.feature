Feature: 1.BookSearch

@regression @search
Scenario Outline: Search Books in Bookstore
	Given I navigate to Bookstore application
	And I click on Book Store Application
	When I fill up the search box
		| Keyword   |
		| <Keyword> |
	Then following books should be displayed in results
		| Title   | Author   | Publisher   |
		| <Title> | <Author> | <Publisher> |

	Examples: 
		| Keyword | Title                                     | Author               | Publisher      |
		| GIT     | Git Pocket Guide                          | Richard E. Silverman | O'Reilly Media |
		| Web Api | Designing Evolvable Web APIs with ASP.NET | Glenn Block et al.   | O'Reilly Media |
