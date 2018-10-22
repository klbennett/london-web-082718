class API {
  static init () {
    this.baseUrl = 'http://localhost:8001/api/v1'
    this.usersUrl = `${this.baseUrl}/users`
    this.tasksUrl = `${this.baseUrl}/tasks`
    this.userId = 1
  }

  static getUsers () {
    return fetch(this.usersUrl)
      .then(resp => resp.json())
  }

  static getUser (id) {
    return fetch(`${this.usersUrl}/${id}`)
      .then(resp => resp.json())
  }

  static createTask (task) {
    return fetch(this.tasksUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    }).then(resp => resp.json())
  }
}

API.init()
