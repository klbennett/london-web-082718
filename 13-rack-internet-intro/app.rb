req uire "pry"

class App
  def self.homepage
    "WELCOME HOME"
  end

  def self.call(environment_hash)
    req = Rack::Request.new(environment_hash)
    resp = Rack::Response.new

    resp.finish # implicit return of the status code, header, and body
  end
end

    # if req.path == "/"
    #   binding.pry
    #   resp.write(homepage)
    # elsif req.path == "/pizza"
    #   resp.write("We all love pizza")
    # else
    #   resp.write("404 Where did you think you will land?")
    #   resp.status = 404
    # end
