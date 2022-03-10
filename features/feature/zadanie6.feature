Feature:
  Background:
    Given I Open Web Site

  Scenario Outline:
    When I Click on sixth zadanie
    Then I Check if zadanie is open
    When I Fill login with "<login-username>"
    When I Fill password with "<login-password>"
    Then I Check form status

  Examples:
    | login-username | login-password |
    | david          | 123412         |
    | 1234           | ghjkliub       |
    | #$%#@$         | $#$%#          |