class UsersController < ApplicationController
  def sign_in
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      render json: {username: user.username, id: user.id}
    else
      render json: {error: 'Invalid username/password combination.'}, status: 400
    end
  end

  def validate
    user = User.find_by(username: request.headers['Authorization'])
    if user
      render json: {username: user.username, id: user.id}
    else
      render json: {error: 'User not found.'}, status: 400
    end
  end
end
