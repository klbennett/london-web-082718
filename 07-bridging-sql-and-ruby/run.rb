require 'sqlite3'
require 'pry'
require_relative 'artist'

DB = { :conn => SQLite3::Database.new('./artists.db') }
DB[:conn].results_as_hash = true

Pry.start

# [[17, "Linkin Park"], [18, "Limp Bizkit"]]
# [{"id": 17, "name": "Linkin Park"}, {"id": 18, "name": "Limp Bizkit"}]
