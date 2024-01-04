Feature: user is able to search through Global Search


    Scenario:Verify whether user is able to search through Global Search
        Given User navigative to Tailtrix application
        When User enter valid Email address "<mail>"
        When User enter valid password "<pass>"
        Then User able to click on Login button
        When User is able to render Talitrix Application
        Then User is able click on Case Notes
        Then User has to able to view Add Note Export to PDF Export to ExcelColumn Chooser Global search
        # Then User has to able to enter the Note ID in the search field and view the result in the column
        # Then Verify whether user is able to view the search text in the Case Notes











        Examples:
            | mail               | pass         |
            | master222@test.com | Tal!tr!x@123 |
