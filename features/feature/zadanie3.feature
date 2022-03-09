Feature: Third Task
  Background:
    Given I Open Web Site

  Scenario: Happy Scenario
    When I Click on third "zadanie"
    Then I Check third "zadanie" content is disabled
    When I Make content enabled
    Then I Check third "zadanie" content is enabled
    When I Fill the Form
    When I Send the Form
    Then I Check that Form are sent