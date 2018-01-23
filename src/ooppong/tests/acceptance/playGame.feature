Feature: Player is able to play the basic version of classic game

  Scenario: Player starts a game
    Given player just started a game
    Then two paddles are located near edges of both sides (left and right) of game view, in the middle of view height
      And there is a ball located in the center of game view
      And game score is 0:0
    
  Scenario: Player moves paddle up
    Given game view height is 600
      And player paddle is at position 100, 300
      And player paddle has speed 30/second
    When player moves paddle up for 1 second
    Then player paddle is at vertical position 330
    
  Scenario: Player moves paddle down
    Given game view height is 600
      And player paddle is at position 100, 300
      And player paddle has speed 40/second
    When player moves paddle down for 1 second
    Then player paddle is at vertical position 260
    
  Scenario: Player stops moving paddle
    Given game view height is 600
      And player paddle is at position 100, 300
      And player paddle is moving up
    When player stops moving paddle
    Then player paddle is at vertical position 300
      And player paddle stopped moving
    
  Scenario: Paddles stops at the top edge of game view
    Given game view height is 100
      And player paddle has size width 2, height 10
      And player paddle has speed 10/second
      And player paddle is just beneath the top edge
    When player moves paddle up for 1 second
    Then player paddle is still at the top edge
    
  Scenario: Paddles stops at the bottom edge of game view
    Given game view height is 100
      And player paddle has size width 2, height 10
      And player paddle has speed 10/second
      And player paddle is just over the bottom edge
    When player moves paddle down for 1 second
    Then player paddle is still at the bottom edge