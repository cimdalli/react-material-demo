import * as React from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import { Login } from '../actions/auth.actions'
import { connect } from 'react-redux'
import { mapDispatchToProps } from 'redux-ts'

const dispatchProps = mapDispatchToProps({
  Login,
})

type LoginProps = ReturnType<typeof dispatchProps>

class LoginContainer extends React.Component<LoginProps> {
  refs!: {
    [key: string]: React.ReactInstance
    username: TextField
    password: TextField
  }

  login = () => {
    this.props.Login({
      username: this.refs.username.getValue(),
      password: this.refs.password.getValue(),
    })
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

export default connect(null, dispatchProps)(LoginContainer)
