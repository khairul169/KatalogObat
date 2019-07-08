import React, { Component } from 'react'
import AppNavigator from './src/routes';

export default class App extends Component {
	constructor(props) {
		super(props);

		// disable yellowbox warning
		console.disableYellowBox = true;
	}

	render() {
		return (
			<AppNavigator />
		)
	}
}
