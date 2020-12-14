import Fetch from './fetch'

class Endpoints {
  static getSearch({ type, search, limit, token }) {
    return new Fetch().http({
      path: `/search?q=${search}&type=${type}&limit=${limit}`,
      method: 'GET',
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    })
  }

  static getAlbum({ id, token }) {
    return new Fetch().http({
      path: `/albums/${id}/tracks`,
      method: 'GET',
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    })
  }
}

export default Endpoints
