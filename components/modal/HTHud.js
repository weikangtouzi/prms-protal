import React, { Component } from 'react'
// import './HTHud.css'

export default class HTHud extends Component {

	constructor(props) {
		super(props)
		this.state = {
			show: false
		}
	}

	show = () => {
		this.setState({ show: true })
	}

	hidden = () => {
		this.setState({ show: false })
	}

	render() {
		const containerStyle = { display: this?.state?.show ? 'flex' : 'none' }
		return (
			<div ref={ref => this.container = ref} style={{...styleList.container, ...containerStyle}}>
				<span style={styleList.title}>加载中...</span>
			</div>
		)
	}

}

const styleList = {
	container: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 2147483647,
		pointerEvents: 'none'
	},
	title: {
		paddingLeft: 25,
		paddingRight: 25,
		paddingTop: 14,
		paddingBottom: 14,
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		fontSize: 15,
		color: 'white',
	}

}
