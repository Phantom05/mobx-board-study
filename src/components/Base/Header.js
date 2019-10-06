import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject } from 'mobx-react';
import styled from '@emotion/styled'

const Styled = {
  Header: styled.header`
    &:after{
      content:'';
      display:block;
      clear: both;
    }
    .nav__list{
      float:left;
      margin-right:10px;
    }
  `
}
class Header extends Component {
  render() {
    const { isLogin } = this.props;
    return (
      <Styled.Header>
        <div className="nav__list">
          <Link to="/">Home</Link>
        </div>
        <div className="nav__list">
          <Link to="/signup">Signup</Link>
        </div>
        <div className="nav__list">
          <Link to="/signin">Login</Link>
        </div>
        <div className="nav__list">
          {isLogin && 'logout'}
          {isLogin && <Link to="/mypage">Mypage</Link>}
        </div>
      </Styled.Header>
    );
  }
}

export default inject(({ auth }) => ({
  isLogin: auth.isLogin
}))(Header);