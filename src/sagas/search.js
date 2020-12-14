import { takeEvery, put, call, select } from 'redux-saga/effects'

// api
import Endpoints from '../api'

// auth
import { selectAuth } from '../flux/selectors'

// utils
import { normalizeAlbums, normalizeArtists, normalizeTracks, normalizedDuplicates } from '../utils/normalized'

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
      payload: {
        albums: normalizedDuplicates([
          normalizeAlbums(albums.items),
          normalizeTracks(tracks.items),
        ].flat()),
        artists: normalizeArtists(artists.items),
      }
    })
  } catch (e) {
    return yield put({ type: 'AUTH/LOGOUT' })
  }

}

export default function* sagas() {
  yield takeEvery('SEARCH/GET', getSearch)
}
