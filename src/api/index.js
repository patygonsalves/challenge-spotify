import Fetch from './fetch'

class Endpoints {
  static getSearch({ type, search, token }) {
    return new Fetch().http({
      path: `/search?q=${search}&type=${type}`,
      method: 'GET',
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    })
  }
}

export default Endpoints
