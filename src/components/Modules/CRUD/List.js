import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Item from './Item';
import { Row, Col,Button } from 'antd';


import styled from '@emotion/styled';

const Stlyed = {
  List: styled.div`
  .header{
    &:after{
      content:'';
      display:block;
      clear: both;
    }
  }
  .header_box{
    font-weight:bold;
    float:left;
  }
  `
}
class List extends Component {
  render() {
    const { header } = this.props;
    let width = Math.floor(100 / (header.list.length ));
    return (
      <Stlyed.List>
        <div className="header">
          {header.list.map((headerList) => (
            <div style={{width:`${width}%`}} key={headerList} className="header_box">
              <Item  info={headerList == 'checkbox' ? <input type="checkbox" /> :headerList} />
            </div>)
          )}
        </div>


        List
      </Stlyed.List>
    );
  }
}

export default List;

// List.PropTypes ={
//   list:PropTypes.header.list.array
// }

List.defaultProps = {
  header: {
    list: []
  },
}