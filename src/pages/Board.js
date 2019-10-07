import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import Header from 'components/Base/Header';
import PlainTemplate from 'components/Template/PlainTemplate';
import styled from '@emotion/styled';
// import PageNavigation from 'components/Part/PageNavigation';
import Test from 'components/Modules/CRUD/Test';

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
          <Test />

          {/* <PageNavigation 
            previousLabel={'prev'}
            nextLabel={'next'}
            pageCount={250} // 총 페이지 수
            pageRangeDisplayed={4}// 표시되는 페이지 범위
            marginPagesDisplayed={0} // break 다음에 표시될 범위
            breakLabel={''} // break 표시 view
            onPageChange={this.handlePageChange}
            containerClassName={'pagination'}
            subContainerClassName={'page pagination'}
            activeClassName={'active'}
          /> */}

        </Styled.Board>

      </PlainTemplate>

    );
  }
}

export default inject(({board})=>({

}))(observer(Board));