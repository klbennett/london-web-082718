class API {
  static fetchPaintings () {
    return fetch('http://localhost:3000/paintings')
    .then(resp => resp.json())
  }

  static deletePainting (id) {
    return fetch(`http://localhost:3000/paintings/${id}`, {
      method: 'DELETE'
    }).then(resp => resp.json())
  }
}

export default API
