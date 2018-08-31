# Object relationships: One-to-Many

## Topic introduction

- Model
- Domain
- Domain Modelling
- Relationships
    - One to many 
    - Many to many


a


l
o
t

o
f

w
h
i
t
e
s
p
a
c
e

```ruby
class User

  attr_reader :username, :tweets

  def initialize(username)
    @username = username
    @tweets = []
  end

  def post_tweet(message)
    tweet = Tweet.new(message, self)
    add_tweet(tweet)
  end

  private

  def add_tweet(tweet)
    self.tweets << tweet
  end
end

class Tweet
  attr_reader :message, :user

  @@all = []

  def initialize(message, user)
    @message = message
    @user = user

    @@all << self
  end

  def self.all
    @@all
  end
end
```


```ruby
  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  def post_tweet(message)
    Tweet.new(self, message)
  end
```
