import { ReducerBuilder } from 'redux-ts'
import { push } from 'react-router-redux'
import { Login, SetToken, Logout } from '../actions/auth.actions'
import { ShowLoading, HideLoading } from '../actions/layout.actions'
import { AuthState } from '../models/store.model'

const tokenKey = 'auth'

export const auth = new ReducerBuilder<AuthState>()

  .init({
    token: localStorage.getItem(tokenKey) || undefined,
  })

  .handle(Login, (state, action, dispatch) => {
    dispatch(ShowLoading())
    new Promise(resolve => {
      setTimeout(resolve, 1000) // simulate http request
    })
      .then(() => {
        dispatch(
          SetToken({
            token: action.payload.username + '|' + action.payload.password,
          }),
        )
        dispatch(push('/'))
        dispatch(HideLoading())
      })
      .catch(() => {
        dispatch(HideLoading())
      })

    return state
  })

  .handle(Logout, (state, action, dispatch) => {
    dispatch(SetToken({ token: undefined }))
    dispatch(push('/'))

    return state
  })

  .handle(SetToken, (state, action) => {
    const token = action.payload.token

    if (token != null) {
      localStorage.setItem(tokenKey, token)
    } else {
      localStorage.removeItem(tokenKey)
    }

    return {
      ...state,
      token,
    }
  })
