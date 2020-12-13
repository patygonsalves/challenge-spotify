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
}

export default Endpoints
