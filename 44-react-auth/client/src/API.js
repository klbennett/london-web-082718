class API {
  static init () {
    this.baseUrl = 'http://localhost:3001'
    this.signinUrl = this.baseUrl + '/signin'
    this.validateUrl = this.baseUrl + '/validate'
    this.inventoryUrl = this.baseUrl + '/inventory'
  }

  static signin (username, password) {
    return fetch('http://localhost:3001/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username,
        password
      })
    }).then(resp => resp.json())
  }

  static validate () {
    const username = localStorage.getItem('username')
    return fetch(this.validateUrl, {
      headers: {'Authorization': username}
    }).then(resp => resp.json())
  }
}

API.init()

window.API = API

export default API
