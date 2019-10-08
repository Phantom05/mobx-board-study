import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import styled from '@emotion/styled';
import PageNavigation from 'components/Part/PageNavigation';

import Admin from "react-crud-admin";
// import Form from "react-jsonschema-form";
import "react-crud-admin/css"; //optional css import


import CrudList from './CrudList';

const Styled ={
  CRUD : styled.div`
  padding:25px;
  .headerItem,.listItem{
    padding:5px;
  }
  `
}



class Example extends Admin {
  constructor() {
    super();
    this.name = "Contact"; // name of the objects
    this.name_plural = "Contacts"; // name of the objects in plural
    this.list_display_links = ["name"]; // which property of the object is clickable
    this.list_display = ["name", "number", "address.street"]; // a list of properties of the object to displayed on the list display page
  }
  get_queryset(page_number, list_per_page, queryset) {
    // the actual array containing objects to be displayed
    return [
      {
        id: 1,
        name: "Joe Next",
        number: "08939303003",
        address: { street: "Hallmark Street" }
      },
      {
        id: 2,
        name: "Isa Yoll",
        number: "0908839202",
        address: { street: "Barbican Street" }
      },
      {
        id: 2,
        name: "Isa Yoll",
        number: "0908839202",
        address: { street: "Barbican Street" }
      }
    ];
  }
}
class Container extends Component {
  render() {
    let headerInfo ={
      name:"Contect",
      links:['name'],
      list : ['checkbox','name','address','date'],
      col:[2,8,8,6],
      checkbox:true
    };
    let content = Array(10).fill(undefined).map((list,i)=> ({
      id:i,
      name:[`phantom${i}`,`/board/detail/${i}`],
      address:"monster2jy@gmail.com",
      date:'2019-10-08'
    }));

    return (
      <Styled.CRUD>
        {/* <Example/>
        <br/><br/><br/><br/><br/><br/><br/> */}

        <CrudList 
          header={headerInfo}  // 상단 제목 th부분
          content={content}  //  하단 리스트 td 부분
          headerContainerClassName ={'headerContainer'}
          headerItemClassName ={'headerItem'}
          listContainerClassName ={'listContainer'}
          listItemClassName ={'listItem'}
          contentClassName={'contentClass'}
        />
        <PageNavigation 
          previousLabel={'<'}
          nextLabel={'>'}
          pageCount={250} // 총 페이지 수
          pageRangeDisplayed={4}// 표시되는 페이지 범위
          marginPagesDisplayed={0} // break 다음에 표시될 범위
          breakLabel={''} // break 표시 view
          onPageChange={this.handlePageChange}
          containerClassName={'pagination'}
          subContainerClassName={'page pagination'}
          activeClassName={'active'}
        />

      </Styled.CRUD>
    );
  }
}

export default inject(({board})=>({

}))(observer(Container));