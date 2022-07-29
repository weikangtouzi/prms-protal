import React, { Component } from 'react'


export default class HTToast extends Component {

	constructor(props) {
		super(props)
		this.state = {
			title: ''
		}
	}

	show = (title) => {
		this.setState({ title })
		setTimeout(() => {
			this.hidden()
		}, 3000)
	}

	hidden = () => {
		this.setState({ title: '' })
	}

	render() {
		const containerStyle = { display: (this?.state?.title?.length ?? 0) > 0 ? 'flex' : 'none' }
		return (
			<div ref={ref => this.container = ref} style={{...styleList.container, ...containerStyle}}>
				<span style={styleList.title}>{this.state.title}</span>
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
