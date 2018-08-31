class User
  attr_accessor :username

  def initialize(username)
    @username = username
  end

  def post_tweet(content)
    Tweet.new(content, self)
  end

  def show_all_tweets
    Tweet.all.select do |tweet|
      tweet.user.username == self.username
    end
  end
end
