class TasksController < ApplicationController
  def index
    @tasks = Task.all
    render json: @tasks
  end

  def create
    @task = Task.new(text: params[:text], priority: params[:priority], user_id: params[:user_id])
    if @task.save
      render json: @task
    else
      render json: {error: 'Task failed to be created.'}, status: 400
    end
  end
end
