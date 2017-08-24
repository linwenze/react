import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeTmp from '../../components/HomeTmp'
import ReactDOM from 'react-dom'; 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {
    setStr, 
    fetchPosts
} from '../../actions';
/*
 * @class Home `全部事项`组件
 */
/**
 * @param {Number} name 
 * @param {Object} name 
 */
class Home extends Component {
     constructor(props){
        super(props);
    } 
    
    render() {

        const { dispatch, myApp,fetchPosts } = this.props;
        return (
            <div className='box'>
                <HomeTmp press={(subreddit,parma) => fetchPosts(subreddit,parma)}/>
                {myApp.msg}sdsdsd
                <Link
               to="/about"
         
            >sfdsfd</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { myApp: state.myApp};
};
const mapDispatchToProps=(dispatch)=>{
    return {
        fetchPosts: (subreddit,parma) => {
            dispatch(fetchPosts(subreddit,parma));
        },
    }; 
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
