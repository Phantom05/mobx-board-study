import React, { Component } from 'react';
import styled from '@emotion/styled'
import Header from 'components/Base/Header';
import PlainTemplate from 'components/Template/PlainTemplate'

const StyledSignup = styled.div`

`;
class Signup extends Component {
  render() {
    return (
      <StyledSignup>
        <PlainTemplate header={<Header />}>
          <h1>Signup</h1>
        </PlainTemplate>
      </StyledSignup>
    );
  }
}

export default Signup;