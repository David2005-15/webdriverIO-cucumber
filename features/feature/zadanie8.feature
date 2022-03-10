Feature:
  Background:
    Given I Open Web Site

  Scenario Outline:
    When I Open Eighth zadanie
    Then I Check if zadanie is open
    When I Fill Cart Name with "<name>"
    When I Fill Cart Numbers with "<numbers>"
    When I Fill Cart CVV code with "<cvv>"
    Then "<error>" window is displayed

  Examples:
    | name   | numbers         | cvv | error          |
    | david  | 789978977897554 | 457 | not found      |
    | gkhsad | 789978977897    | 457 | request format |