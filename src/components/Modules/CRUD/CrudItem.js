import React, { Component } from 'react';
import styled from '@emotion/styled';

const Styled ={
  Item:styled.div`
  `
}
class CrudItem extends Component {
  render() {
    console.log('remder');
    const {info,type} = this.props;
    const setChar = typeof info === 'string' ? info[0].toUpperCase() + info.substr(1) : info;
    return (
      <Styled.Item >
        { type === 'header'?setChar : info}
      </Styled.Item>
    );
  }
}

export default CrudItem;