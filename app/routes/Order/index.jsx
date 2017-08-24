import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeTmp from '../../components/HomeTmp'
import {

    fetchPosts,
} from '../../actions';
/*
 * @class DoneRoute `已完成`组件
 */
class Order extends Component {
    render() {

      
        const { dispatch, myApp } = this.props;
        return (
            <div className='box' style={{background:'red'}}>
            <HomeTmp press={(subreddit,parma)=>dispatch(fetchPosts(subreddit,parma))}></HomeTmp>
               {name}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { myApp: state.myApp };
};
export default connect(mapStateToProps)(Order);
