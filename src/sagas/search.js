import { takeEvery, put, call, select } from 'redux-saga/effects'

// api
import Endpoints from '../api'

// auth
import { selectAuth } from '../flux/selectors'

// utils
import { normalizeAlbums, normalizeArtists, normalizeTracks } from '../utils/normalized'

function* getSearch({ payload : { q, type }}) {

  const { token } = yield select(selectAuth)
  const response = yield call(Endpoints.getSearch,
    {
      search: q,
      type: type.join(),
      limit: 5,
      token
    }
  )

  try {
    const { albums, artists, tracks } = yield response.json()

    yield put({
      type: 'SEARCH/GET/INTENT',
      payload: [
        normalizeAlbums(albums.items),
        normalizeArtists(artists.items),
        normalizeTracks(tracks.items),
      ].flat()
    })
  } catch (e) {
    return yield put({ type: 'AUTH/LOGOUT' })
  }

}

export default function* sagas() {
  yield takeEvery('SEARCH/GET', getSearch)
}
