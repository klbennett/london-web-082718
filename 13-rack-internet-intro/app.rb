require "pry"


class App
  def self.homepage
    "WELCOME HOME"
  end

  def call(environment_hash)
    req = Rack::Request.new(environment_hash)
    resp = Rack::Response.new

    if req.path == "/"
      resp.write('homepage')
    elsif req.path == "/cats"
      resp.write("MEOW")
    else
      resp.write("THIS IS BAD... 404")
      resp.status = 404
    end

    resp.finish # implicit return of the status code, header, and body
  end
end
