export function reformDistanceYears(date) {
  if (!date) {
    return ''
  }
  return (new Date().getFullYear() - new Date(date).getFullYear())
}

export function reformEducationLevel(education) {
	const itemList = [
	  {
	    key: 'Doctor',
	    value: '博士',
	  },
	  {
	    key: 'Postgraduate',
	    value: '研究生',
	  },
	  {
	    key: 'RegularCollege',
	    value: '本科',
	  },
	  {
	    key: 'JuniorCollege',
	    value: '大专',
	  },
	  {
	    key: 'High',
	    value: '高中',
	  },
	  {
	    key: 'Junior',
	    value: '初中',
	  },
	  {
	    key: 'Primary',
	    value: '小学',
	  },
	  {
	    key: 'LessThanPrime',
	    value: '小学以下',
	  },
	]
	if (education == -1) {
		return itemList
	}
	return itemList.find(item => item.key == education)?.value
}

export function reformSalary(salary) {
  if (!salary) {
    return ''
  }
  if (typeof(salary) === 'string') {
    return salary
  }
  if (typeof(salary) === 'number') {
    return Number(salary) > 999 ? `${Number(salary) / 1000}K` : salary
  }
  let showSalary = ''
  if (typeof(salary) === 'object') {
    if (salary[0]) {
      showSalary = Number(salary[0]) > 999 ? `${Number(salary[0]) / 1000}K` : salary[0]
    }
    if (salary[1]) {
      showSalary = `${showSalary}-${Number(salary[1]) > 999 ? `${Number(salary[1]) / 1000}K` : salary[1]}`
    }
  }
  return showSalary
}

export function reformCompanySize(size) {
  if (!size) {
    return ''
  }
  let showSize = ''
  switch (size) {
    case 'LessThanFifteen':
      showSize = '1-14人'
      break;
    case 'FifteenToFifty':
      showSize = '15-49人'
      break;
    case 'FiftyToOneHundredFifty':
      showSize = '50-99人'
      break;
    case 'OneHundredFiftyToFiveHundreds':
      showSize = '100-499人'
      break;
    case 'FiveHundredsToTwoThousands':
      showSize = '500-2000人'
      break;
    case 'MoreThanTwoThousands':
      showSize = '2000人以上'
      break;
    default:
      break;
  }
  return showSize
}

export function reformComFinancing(comp_financing) {
  // enum EnterpriseFinancing { NotYet, AngelFinancing, A, B, C, D, Listed, NoNeed }
  if (!comp_financing) {
    return ''
  }
  let showComp_financing = ''
  switch (comp_financing) {
    case 'NotYet':
      showComp_financing = '不需要融资'
      break;
    case 'AngelFinancing':
      showComp_financing = '天使轮'
      break;
    case 'A':
      showComp_financing = 'A轮'
      break;
    case 'B':
      showComp_financing = 'B轮'
      break;
    case 'C':
      showComp_financing = 'C轮'
      break;
    case 'D':
      showComp_financing = 'D轮'
      break;
    case 'Listed':
      showComp_financing = '已上市'
      break;
    case 'NoNeed':
      showComp_financing = '不需要融资'
      break;
    default:
      break;
  }
  return showComp_financing
}


export function stringForFullTime(fullTime) {
  const itemList = [
  	{ value: '全职', key: 'Full' },
  	{ value: '兼职', key: 'Part' },
  	{ value: '实习', key: 'InternShip' },
  ]
  if (fullTime == -1) {
		return itemList
	}
	return itemList.find(item => item.key == fullTime)?.value
}

export function stringForEnterpriseNature(nature) {
  switch(nature) {
  	case 'ForeignVentures': {
  		return '外企'
  	}
  	case 'ForeignFundedEnterprises': {
  		return '外资企业'
  	}
  	case 'PrivateEnterprise': {
  		return '个人企业'
  	}
  	case 'StateOwnedEnterprises': {
  		return '国有企业'
  	}
  	case 'Extra': {
  		return '子公司'
  	}
  }
  return '创业公司'
}

export function createMapImageUrl(coordinates = []) {
	const key = 'dd24ba9afebd6c9c303a2e79c0c3d7f2'
	const [longitude, latitude] = coordinates
	const mapImageUrl = `https://restapi.amap.com/v3/staticmap?location=${longitude},${latitude}&zoom=11&size=804*200&markers=mid,,A:${longitude},${latitude}&key=${key}`
	return mapImageUrl
}

export function reloadEnterpriseLocation() {
	const location = (window?.location?.port?.length > 0) ? `http://${window.location.hostname}:8000` : 'https://ent.chenzaozhao.com/'
	window.location = location
}

