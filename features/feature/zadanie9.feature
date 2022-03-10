Feature:
  Background:
    Given I Open Web Site

  Scenario Outline:
    When I Open Ninth zadanie
    When I Expend nodes
    When I Click on "<root>"
    Then I Check "<content>"

  Examples:
    | root          | content               |
    | main root     | main content          |
    | child root1   | child root1 content   |
    | child root2   | child root2 content   |
    | child root1-1 | child root1-1 content |
