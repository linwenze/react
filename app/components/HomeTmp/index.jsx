import React, { Component } from 'react';
import PropTypes from 'prop-types';
class HomeTmp extends Component {

	constructor(props) {
        super(props);

        this.fixed = this.fixed.bind(this);
        console.log(this.props)
    }
	fixed(e){
		var str=Math.random()
		this.props.press('/Back/VisitorsLogin',{'phone':13430584982,'password':123456})
	}
    render() {
        return (
        	<div>
            <button onClick={this.fixed}>修改1</button>
            </div>
        );
    }
}
export default HomeTmp