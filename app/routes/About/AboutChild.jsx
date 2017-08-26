import React from 'react';
import {connect} from 'react-redux';
import { Button, Flex, WingBlank , Icon, Grid } from 'antd-mobile';

var mapStateToProps = function(state){
	return {
	}
};

class ChildPage extends React.Component{
	constructor(props){
		super(props);
		console.log(this.props)
	}

	render() {
		return (
			<div className='main'>
				<div className='test'>id:{this.props.match.params.id}</div>
				<Button className="btn" icon="check-circle-o">with icon</Button>
				<Demo/>
	    	</div>
		);
	}
}
const icons = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'koubei-o', 'koubei', 'loading',
];
/* eslint global-require: 0 */

const Demo = () => {
  const data = icons.map(item => ({
    icon: (<Icon type={item} />),
    text: item,
  }))
  return (
    <Grid data={data} columnNum={3} hasLine={false} />
  );
};


ChildPage.contextTypes = {
  router: React.PropTypes.object
};
module.exports = connect(mapStateToProps)(ChildPage);