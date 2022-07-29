import React, { Component } from 'react'
import { FindCompanyItemWrap, FindCompanyItemImage, FindCompanyItemTitle, FindCompanyItemDetail, FindCompanyItemButtonContainer, FindCompanyItemButtonTitleSelected } from './styled'
import { reformComFinancing, reformCompanySize } from '@/utils/utils'

export default class FindCompanyItem extends Component {

	render() {
		const { item, index } = this.props
		return (
			<FindCompanyItemWrap style={{ marginLeft: index % 4 != 0 ? '1%' : 0 }}>
				<FindCompanyItemImage src={item.enterprise_logo ?? './company_default.png'} alt={''} />
				<FindCompanyItemTitle>{item.enterprise_name}</FindCompanyItemTitle>
				<FindCompanyItemDetail>{[reformComFinancing(item.enterprise_financing), reformCompanySize(item.enterprise_size)].join(' | ')}</FindCompanyItemDetail>
				<a href={`/company/${item.id}`}>
				<FindCompanyItemButtonContainer>
					{/*<FindCompanyItemButtonTitleSelected>1234 </FindCompanyItemButtonTitleSelected>个热招职位*/}
					<FindCompanyItemButtonTitleSelected>正在热招</FindCompanyItemButtonTitleSelected>
				</FindCompanyItemButtonContainer>
				</a>
			</FindCompanyItemWrap>
		)
	}

}