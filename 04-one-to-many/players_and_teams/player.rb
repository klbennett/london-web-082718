class Player

  attr_accessor :player_name, :team, :goals

  @@all = []

  def initialize(player_name, team, goals)
    @player_name = player_name
    @team = team
    @goals = goals
    @@all << self
  end

  def change_team(new_team)
    @team = new_team
  end

  def score_a_goal
    puts " YEESSSSS "
    @goals += 1
  end

  def self.all
    @@all
  end
end
