import { ReducerBuilder } from 'redux-ts'
import { push } from 'react-router-redux'
import { Login, SetToken, Logout } from '../actions/auth.actions'
import { ShowLoading, HideLoading } from '../actions/layout.actions'
import { AuthState } from '../models/store.model'

export const auth = new ReducerBuilder<AuthState>()

  .init({
    token: localStorage.getItem(SetToken.key) || undefined,
  })

  .handle(Login, (state, action, dispatch) => {
    dispatch(new ShowLoading())
    new Promise(resolve => {
      setTimeout(resolve, 1000) // simulate http request
    })
      .then(() => {
        dispatch(new SetToken(action.username + '|' + action.password))
        dispatch(push('/'))
        dispatch(new HideLoading())
      })
      .catch(() => {
        dispatch(new HideLoading())
      })

    return state
  })

  .handle(Logout, (state, action, dispatch) => {
    dispatch(new SetToken(undefined))
    dispatch(push('/'))

    return state
  })

  .handle(SetToken, (state, action) => {
    const token = action.token
    const key = action.getTokenKey()

    if (token != null) {
      localStorage.setItem(key, token)
    } else {
      localStorage.removeItem(key)
    }

    return {
      ...state,
      token,
    }
  })
