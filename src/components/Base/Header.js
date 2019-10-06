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
      & > a{
        text-decoration:none;
      }
    }
  `
}
class Header extends Component {
  handleLogout = () => {
    this.props.logout();
  }
  render() {
    const { isLoggedin } = this.props;
    return (
      <Styled.Header>
        <div className="nav__list">
          <Link to="/">Home</Link>
        </div>

        {!isLoggedin &&
          <div className="nav__list">
            <Link to="/signup">Signup</Link>
          </div>
        }

        {isLoggedin &&
          <div className="nav__list">
            <Link to="/mypage">Mypage</Link>
          </div>
        }

        {!isLoggedin &&
          <div className="nav__list">
            <Link to="/signin">Login</Link>
          </div>
        }

        {isLoggedin &&
          <div className="nav__list">
            <span onClick={this.handleLogout}>Logout</span>
          </div>
        }

      </Styled.Header>
    );
  }
}

export default inject(({ auth }) => ({
  isLoggedin: auth.isLoggedin,
  logout: auth.logout
}))(Header);