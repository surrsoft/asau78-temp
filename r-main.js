'use strict';

const e = React.createElement;

class Box extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return e('div', { className: 'box' }, this.props.children)
	}
}

class Title extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return e(
			'div',
			{},
			this.props.text
		)
	}
}

// const domContainer = document.querySelector('#wr-container');
// ReactDOM.render(
// 	e(
// 		Box,
// 		{},
// 		e(
// 			'div', null, 'hello 2'
// 		)
// 	), domContainer);
