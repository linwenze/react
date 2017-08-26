import React from 'react';
import ReactDOM from 'react-dom';
import AboutChild from './AboutChild'
import {
  BrowserRouter  as Router,
  Route,
  Link
} from 'react-router-dom'
/*
 * @class DoingRoute `正在进行`组件
 */

const Topics = ({ routes,match }) => {
    console.log(match)
    return (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to="/AboutDetail/112233">进入路由icon子页面</Link>
      </li>
      
    </ul>

  
   
  </div>
)}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}sdsdsd</h3>
  </div>
)
export default Topics;
