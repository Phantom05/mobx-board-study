import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import CrudItem from './CrudItem';
import styled from '@emotion/styled';
import cx from 'classnames';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';

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
  }
  .content__row{
    border-bottom:1px solid #ececec;
  }
  `
}

class InputCheck extends Component {
  state = {
    isChecked: false
  }
  handleChecked = () => {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked
    }))
  }
  render() {
    const state = this.state;
    const {...props} = this.props;
    console.log({...props});
    return (
      <input type="checkbox" onChange={this.handleChecked} checked={state.isChecked} {...props}/>
    )
  }
}

class CrudList extends Component {
  state = {
    checkAll: false,
  }

  handleAllChecked = (type) => () => {
    this.setState((prevState) => ({
      checkAll: !prevState.checkAll,
    }))
  }

  handleCheckeda = (e) => {
    console.log('handleCheckeda');
  }
  render() {
    const {
      header,
      content,
      header: { links },
      headerContainerClassName,
      headerItemClassName,
      listContainerClassName,
      listItemClassName,
      contentClassName } = this.props;
    const state = this.state;
    return (
      <Stlyed.List>
        <Row className={cx('header_row', headerContainerClassName)} data-d5x-target={header.name}>
          {header.list.map((headerInfo, i) => (
            <Col span={header.col[i]} key={headerInfo} className={cx('list__box', 'header', headerItemClassName)}>
              <CrudItem type={'header'} info={headerInfo === 'checkbox' ? <InputCheck onClick={this.handleCheckeda} /> : headerInfo} />
            </Col>
          ))}
        </Row>

        <div className={cx('content', contentClassName)} data-d5x-id={header.name}>
          {content.map(contentInfo => (
            <Row className={cx('content__row', listContainerClassName)} key={contentInfo.id}>
              {header.list.map((headerInfo, i) => {
                const isCheckbox = headerInfo === 'checkbox';
                const value = !isCheckbox && _.filter(contentInfo, (val, key) => key === headerInfo)[0];
                let link = links.includes(headerInfo) && Array.isArray(value) && value[1];
                return (
                  <Col span={header.col[i]} key={headerInfo} className={cx('list__box', 'content', listItemClassName)}>
                    {link
                      ? <Link to={link}>{value[0]}</Link>
                      : <CrudItem type={'content'} info={isCheckbox ? <InputCheck /> : value} />
                    }
                  </Col>
                )
              }
              )}
            </Row>
          ))}
        </div>
      </Stlyed.List>
    );
  }
}

export default CrudList;
CrudList.defaultProps = {
  header: {
    list: []
  },
  content: []
}