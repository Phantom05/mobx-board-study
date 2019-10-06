import React, { Component } from 'react';
import styled from '@emotion/styled'
import PlainTemplate from 'components/Template/PlainTemplate'
import Header from 'components/Base/Header';
import axios from 'axios';
import { localRegister } from 'lib/Api';
import { Redirect } from'react-router-dom';
import { inject, observer } from 'mobx-react';
const Styled = {
  Signin: styled.div`
  .form{
    margin-top:30px;
  }
  .button {
    border:0;
    padding:5px 20px;
    border-radius:5px;
    cursor: pointer;
    &:hover{
      background:rgba(0,0,0,.2);
    }
  }
  .button_box{
      margin-top:20px;
  }
  .input{
    padding:5px;
    width:50%;
    border-radius:5px;
    border:1px solid #e3e3e3;
    margin-bottom:10px;
  }
`
}
class Signin extends Component {
  state = {
    username: '',
    password: ''
  }
  componentDidMount() {
    console.log('did');
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {username,password} = this.state;
    const loginConfig = {
      url: '/auth/login',
      data: {
        username: username,
        password: password
      }
    }
    localRegister(loginConfig).then(async (response) => {
      let data = response.data;
      if(data.result ===1){
        await this.props.login(data);
      }else{
        alert('Please, check Account')
      }
    })
  }

  render() {
    const { value } = this.state
    const {isLoggedin} = this.props;
    return (
      <Styled.Signin>
        <PlainTemplate header={<Header />}>
          <h1>Sign in</h1>
          {isLoggedin && <Redirect to="/" />}
          <form className="form" onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Username"
                className="input"
                onChange={this.handleChange}
                value={value}
                name="username"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="input"
                value={value}
                name="password"
              />
            </div>
            <div className="button_box">
              <button type="submit" className="button submit">Login</button>
            </div>
          </form>
        </PlainTemplate>
      </Styled.Signin>
    );
  }
}

export default inject(({ auth }) => ({
  login: auth.login,
  isLoggedin: auth.isLoggedin,
  profile:auth.profile
}))(observer(Signin));