1. Create the classes
```ruby
class User
  attr_accessor :username

  def initialize(username)
  end

  def post_tweet(content)
  end

  def show_all_tweets
  end
end
```

```ruby
class Tweet
  attr_accessor :content, :user

  @@all = []

  def initialize(content, user)
  end

  def self.all
  end
end
```
2. Create a way to store the data on one class ( Single Source of Truth )

3. Create methods for retrieving the data
