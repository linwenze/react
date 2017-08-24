import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter     as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux';
import App from './container/App';
import {ModuleRouters,Home,About,AboutChild,Order,My,Antds} from './routes';
import './static/css/style.css';
import './static/js/utils.js';
import configureStore from './stores';

const routes = [ 
  { path: '/Order',
    component: Order
  }, 
  { path: '/About',
    component: About,   
  },
  { path: '/AboutDetail/:id',
    component: AboutChild,   
  }
]
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes}/>
  )}/>
)
  const store = configureStore();
  ReactDOM.render(
    <Provider store={store}> 
    <Router>
    <div>  
     <Route exact path="/" component={App}/>       
       {routes.map((route, i) => (
        <Route key={i} path={route.path} component={route.component}/>
      ))}
    </div>
  </Router>
    </Provider>,
    document.getElementById('root')
);
    