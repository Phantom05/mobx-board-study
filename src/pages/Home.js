import React, { Component } from 'react';
import {inject} from 'mobx-react';
import PlainTemplate from 'components/Template/PlainTemplate'
import Header from 'components/Base/Header';
import styled from '@emotion/styled';

const Styled={
  Home:styled.div`
    .main__image{
      width:50%;
    }
  `
}
class Home extends Component {
  componentDidMount(){
    
  }
  render() {

    return (
      <div>
        <PlainTemplate header={<Header />}>
          <Styled.Home>
            <h1>Home</h1>
            <img src="https://taegon.kim/wp-content/uploads/2018/05/image-5.png"  className="main__image"/>
          </Styled.Home>
        </PlainTemplate>
      </div>
    );
  }
}

export default inject(({auth})=>({
  isLogin:auth.isLogin
}))(Home) ;