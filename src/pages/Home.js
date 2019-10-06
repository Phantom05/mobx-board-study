import React, { Component } from 'react';
import {inject} from 'mobx-react';
import PlainTemplate from 'components/Template/PlainTemplate'
import Header from 'components/Base/Header';
class Home extends Component {
  componentDidMount(){
    
  }
  render() {

    return (
      <div>
        <PlainTemplate header={<Header />}>
          <h1>Home</h1>
        </PlainTemplate>
      </div>
    );
  }
}

export default inject(({auth})=>({
  isLogin:auth.isLogin
}))(Home) ;