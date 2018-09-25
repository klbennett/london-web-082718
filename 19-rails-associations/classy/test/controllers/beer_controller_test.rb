require 'test_helper'

class BeerControllerTest < ActionDispatch::IntegrationTest
  test "should get name" do
    get beer_name_url
    assert_response :success
  end

end
