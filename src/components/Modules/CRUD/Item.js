import React, { Component } from 'react';
import styled from '@emotion/styled';

const Styled ={
  Item:styled.div`
  padding:15px;
  `
}
class Item extends Component {
  render() {
    const {info} = this.props;
    let setChar = typeof info === 'string' ? info[0].toUpperCase() + info.substr(1) : info;
    return (
      <Styled.Item>
        {setChar}
      </Styled.Item>
    );
  }
}

export default Item;