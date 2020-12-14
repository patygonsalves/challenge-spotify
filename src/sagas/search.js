import { takeEvery, put, call, select, takeLatest } from 'redux-saga/effects'

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

function* getAlbum({ payload }) {
  const { token } = yield select(selectAuth)

  const response = yield call(Endpoints.getAlbum,
    {
      id: payload.id,
      token
    }
  )

  try {
    const tracks = yield response.json()

    yield put({
      type: 'SEARCH/TRACKS',
      payload: {
        tracks: tracks.items
      }
    })
  } catch (e) {
    return yield put({ type: 'AUTH/LOGOUT' })
  }
}

export default function* sagas() {
  yield takeEvery('SEARCH/GET', getSearch)
  yield takeLatest('SEARCH/GET_ALBUM', getAlbum)
}
