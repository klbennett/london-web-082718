require 'pry'
require 'rest-client'
require 'json'

# traverse the array of books that's located at response_hash["items"] to find:
# book titles, author names and descriptions

def get_user_input
  gets.chomp
end

def get_books_data(user_input)
  url = "https://www.googleapis.com/books/v1/volumes?q=#{user_input}"
  response = RestClient.get(url)
  JSON.parse(response.body)
end

def get_books_array(books_hash)
  books_hash["items"]
end

def get_title(book)
  if book["volumeInfo"]["title"]
    book["volumeInfo"]["title"]
  else
    "No title found"
  end
end

def get_authors(book)
  if book["volumeInfo"]["authors"]
    book["volumeInfo"]["authors"].join(" and ")
  else
    "No authors found"
  end
end

def get_description(book)
  if book["volumeInfo"]["description"]
    book["volumeInfo"]["description"][0..280] + "..."
  else
    "No description found"
  end
end

def get_book_info(book)
  puts '------------------------'
  puts get_title(book)
  puts get_authors(book)
  puts get_description(book)
  puts '------------------------'
end

def run
  puts "What should we search for?"
  user_input = get_user_input
  puts "Searching for books on: #{user_input}"
  books = get_books_data(user_input)
  books_array = get_books_array(books)

  puts "We've found these books:"
  books_array.each do |book|
    get_book_info(book)
  end
end

run
