import * as React from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import { Login } from '../actions/auth.actions'
import { connect } from '../utils/redux.helpers'

interface LoginProps {
  login: (username: string, password: string) => any
}

class LoginContainer extends React.Component<LoginProps, any> {
  refs!: {
    [key: string]: React.ReactInstance
    username: TextField
    password: TextField
  }

  login = () => {
    var username = this.refs.username.getValue()
    var password = this.refs.password.getValue()

    this.props.login(username, password)
  }

  render() {
    console.log('Login')

    const containerStyle: React.CSSProperties = {
      display: 'inline-block',
      padding: '30px',
      marginTop: '200px',
    }
    const buttonStyle: React.CSSProperties = {
      marginTop: '40px',
    }

    return (
      <Paper style={containerStyle}>
        <TextField floatingLabelText="Username" ref="username" id="username" />
        <br />
        <TextField
          floatingLabelText="Password"
          ref="password"
          type="password"
          id="password"
        />
        <br />
        <RaisedButton
          style={buttonStyle}
          primary={true}
          label="Login"
          onClick={this.login}
        />
      </Paper>
    )
  }
}

export default connect(null, dispatch => ({
  login: (username: string, password: string) =>
    dispatch(new Login(username, password)),
}))(LoginContainer)
