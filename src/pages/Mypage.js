import React, { Component } from 'react';
import PlainTemplate from 'components/Template/PlainTemplate'
import Header from 'components/Base/Header';
import styled from '@emotion/styled';
class Mypage extends Component {
  render() {
    return (
      <PlainTemplate header={<Header />}>
        <h1>
          Mypage
      </h1>
      </PlainTemplate>
    );
  }
}

export default Mypage;