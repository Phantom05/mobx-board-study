import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Item from './Item';
import styled from '@emotion/styled';
import _ from 'lodash';
import {Link} from 'react-router-dom';

const Stlyed = {
  List: styled.div`
  border:1px solid #ececec;
  border-radius:5px;
  .header_row{
    border-bottom:2px solid #ececec;
    &:after{
      content:'';
      display:block;
      clear: both;
    }
  }
  .list__box{
    &.header{
    font-weight:bold;
    }
    float:left;
    margin-right:5px;
  }
  .content__row{
    border-bottom:1px solid #ececec;
    &:after{
      content:'';
      display:block;
      clear: both;
    }
  }
  `
}
class List extends Component {
  render() {
    const { header, content,header:{links} } = this.props;
    // console.log(links);
    // let width = Math.floor(100 / (header.list.length ));
    // console.log(content);
    

    return (
      <Stlyed.List>
        <div className="header_row">
          {header.list.map((headerInfo) => {
            const isCheckbox = headerInfo === 'checkbox';
            return (
              <div key={headerInfo} className="list__box header">
                <Item info={isCheckbox ? <input type="checkbox" /> : headerInfo} />
              </div>)
          }
          )}
        </div>
        <div className="content">
          {content.map(contentInfo => (
            <div className="content__row" key={contentInfo.id}>
              {header.list.map((headerInfo) => {
                const isCheckbox = headerInfo === 'checkbox';
                // console.log(headerInfo,'headerInfo');
                let value = !isCheckbox  &&  _.filter(contentInfo,(val,key)=> key === headerInfo);
                if(links.includes(headerInfo)){
                  value = <Link to="/">{value}</Link>
                }
                return (
                  <div key={headerInfo} className="list__box content">
                    <Item info={isCheckbox ? <input type="checkbox" /> :value} />
                  </div>)
              }
              )}
            </div>
          ))}
        </div>



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
  content: []
}