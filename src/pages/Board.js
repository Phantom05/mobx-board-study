import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import Header from 'components/Base/Header';
import PlainTemplate from 'components/Template/PlainTemplate';
import styled from '@emotion/styled';
// import PageNavigation from 'components/Part/PageNavigation';
import CRUD from 'components/Modules/CRUD';

const Styled ={
  Board:styled.div`
  .pagination{
    & .active{
      font-weight:bold;
    }
    li{
      float:left;
      list-style:none;
      a{
        display:inline-block;
        padding:5px;
        border:1px solid #ececec;
        cursor: pointer;
      }
    }
  }
  `
}
class Board extends Component {
  handlePageChange=() =>{
    console.log('handlePageChange');

  }
  render() {
    return (
      <PlainTemplate header={<Header />}>
        <Styled.Board>
          <h1>Board</h1>
          <CRUD />


        </Styled.Board>

      </PlainTemplate>

    );
  }
}

export default inject(({board})=>({

}))(observer(Board));