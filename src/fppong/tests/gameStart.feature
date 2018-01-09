Feature: Game start

  Scenario: game is started
    Given game just started
    Then two paddles are located at both sides (left and right) of game view, in the middle of view height
      And there is a ball located in the center of game view
      And game score is 0:0