import { getAPIUrl } from '../utils/api'

class Fetch {
  constructor() {
    this.PREFIX = `${getAPIUrl()}`
    this.DEFAULT_HEADERS = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }

  async http({ path, extraHeaders = {}, body = null, ...requestOptions }) {
    const opts = {
      method: 'OPTIONS',
      headers: {
        ...this.DEFAULT_HEADERS,
        ...extraHeaders,
      },
      cache: 'no-cache',
      ...requestOptions,
    }

    if (body) Object.assign(opts, { body: JSON.stringify(body) })

    const request = new Request(`${this.PREFIX}${path}`, opts)

    try {
      const response = await fetch(request)
      return response
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default Fetch
