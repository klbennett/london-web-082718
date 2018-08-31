class Team

  def initialize(team_name)
    @team_name = team_name
  end

  def sign_a_player(name)
    Player.new(name, self)
  end

  def all_players
    Player.all.select do |player|
      player.team == self
    end
  end
end
