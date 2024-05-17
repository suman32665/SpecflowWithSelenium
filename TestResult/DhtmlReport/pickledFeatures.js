jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "1.BookSearch.feature",
      "Feature": {
        "Name": "1.BookSearch",
        "Description": "",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "Keyword",
                    "Title",
                    "Author",
                    "Publisher"
                  ],
                  "DataRows": [
                    [
                      "GIT",
                      "Git Pocket Guide",
                      "Richard E. Silverman",
                      "O'Reilly Media",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ],
                    [
                      "Web Api",
                      "Designing Evolvable Web APIs with ASP.NET",
                      "Glenn Block et al.",
                      "O'Reilly Media",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Search Books in Bookstore",
            "Slug": "search-books-in-bookstore",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I navigate to Bookstore application",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on Book Store Application",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I fill up the search box",
                "TableArgument": {
                  "HeaderRow": [
                    "Keyword"
                  ],
                  "DataRows": [
                    [
                      "<Keyword>"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "following books should be displayed in results",
                "TableArgument": {
                  "HeaderRow": [
                    "Title",
                    "Author",
                    "Publisher"
                  ],
                  "DataRows": [
                    [
                      "<Title>",
                      "<Author>",
                      "<Publisher>"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@regression",
              "@search"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true,
          "WasProvided": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true,
        "WasProvided": true
      }
    },
    {
      "RelativeFolder": "2.LoginWithInvalidUser.feature",
      "Feature": {
        "Name": "2.LoginWithInvalidUser",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Login to the system with non existing User",
            "Slug": "login-to-the-system-with-non-existing-user",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I navigate to Bookstore application",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on Book Store Application",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on Login from Menu List",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter username and password as following",
                "TableArgument": {
                  "HeaderRow": [
                    "Username",
                    "Password"
                  ],
                  "DataRows": [
                    [
                      "testuser1",
                      "passwordtest1!"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click login button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Invalid Username or Password Message should be displayed",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@regression",
              "@login"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true,
          "WasProvided": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true,
        "WasProvided": true
      }
    },
    {
      "RelativeFolder": "3.Register.feature",
      "Feature": {
        "Name": "3.Register",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Register a new customer",
            "Slug": "register-a-new-customer",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I navigate to Bookstore application",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on Book Store Application",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on Login from Menu List",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on New User button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I fill up the sign up form",
                "TableArgument": {
                  "HeaderRow": [
                    "FirstName",
                    "LastName"
                  ],
                  "DataRows": [
                    [
                      "Test99",
                      "User9999!"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on robot button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on Register button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the user registered successfully message should be displayed",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@regression",
              "@register",
              "@ignore"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": true
      }
    },
    {
      "RelativeFolder": "4.LoginWithValidUser.feature",
      "Feature": {
        "Name": "4.LoginWithValidUser",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Login to the system with valid user",
            "Slug": "login-to-the-system-with-valid-user",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I navigate to Bookstore application",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on Book Store Application",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on Login from Menu List",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter username and password",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click login button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "User should be redirected to landing page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@regression",
              "@login"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true,
          "WasProvided": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true,
        "WasProvided": true
      }
    },
    {
      "RelativeFolder": "5.DeleteUser.feature",
      "Feature": {
        "Name": "5.DeleteUser",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Delete user",
            "Slug": "delete-user",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I navigate to Bookstore application",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on Book Store Application",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on Login from Menu List",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter username and password",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click login button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on Delete Account Button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click OK on Pop up modal",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "User deleted message should be displayed",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@regression",
              "@delete",
              "@ignore"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": true
      }
    }
  ],
  "Summary": {
    "Tags": [
      {
        "Tag": "@regression",
        "Total": 5,
        "Passing": 3,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Tag": "@search",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Tag": "@login",
        "Total": 2,
        "Passing": 2,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Tag": "@register",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@ignore",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Tag": "@delete",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      }
    ],
    "Folders": [
      {
        "Folder": "1.BookSearch.feature",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "2.LoginWithInvalidUser.feature",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "3.Register.feature",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Folder": "4.LoginWithValidUser.feature",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "5.DeleteUser.feature",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "1.BookSearch.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "2.LoginWithInvalidUser.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "3.Register.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "4.LoginWithValidUser.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "5.DeleteUser.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 5,
      "Passing": 3,
      "Failing": 0,
      "Inconclusive": 2
    },
    "Features": {
      "Total": 5,
      "Passing": 3,
      "Failing": 0,
      "Inconclusive": 2
    },
    "FoldersWithTestKinds": [
      {
        "Folder": "1.BookSearch.feature",
        "Total": 1,
        "Automated": 1,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "2.LoginWithInvalidUser.feature",
        "Total": 1,
        "Automated": 1,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "3.Register.feature",
        "Total": 1,
        "Automated": 1,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "4.LoginWithValidUser.feature",
        "Total": 1,
        "Automated": 1,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "5.DeleteUser.feature",
        "Total": 1,
        "Automated": 1,
        "Manual": 0,
        "NotTested": 0
      }
    ]
  },
  "Configuration": {
    "SutName": "specflow selenium pom",
    "SutVersion": "v1.0",
    "GeneratedOn": "3 February 2024 09:40:01"
  }
});