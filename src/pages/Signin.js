import React, { Component } from 'react';
import styled from '@emotion/styled'
import PlainTemplate from 'components/Template/PlainTemplate'
import Header from 'components/Base/Header';
const Styled ={
  Signin : styled.div`
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
  render() {
    return (
      <Styled.Signin>
        <PlainTemplate header={<Header />}>
        <h1>Sign in</h1>
        <form className="form">
          <div>
            <input type="text" placeholder="Username" className="input"/>
          </div>
          <div>
            <input type="password" placeholder="Password" className="input"/>
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

export default Signin;