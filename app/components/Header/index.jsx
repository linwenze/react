import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Button, Input } from 'antd';
import PropTypes from 'prop-types';
/*
 * @class Header `头`组件
 */
class Header extends Component {
    constructor(props) {
        super(props);
       
    }
  
    render() {

       
        return (
            <div className={this.props.isHide?'hide':''}>{this.props.str}</div>
        );
    }
}

export default Header;
