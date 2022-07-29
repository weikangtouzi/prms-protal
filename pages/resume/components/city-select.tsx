import {useState, useEffect} from 'react'
import {Select} from '@/components/select'

interface CProps {
  css?: any
  value?: any
  onSelect?: any
}

function CitySelect({css, value, onSelect}: CProps) {
  const [cityList, setCityList] = useState<any[]>([])

  useEffect(() => {
  	HTAPI.request('/preludeDatas/regions_simplified.json', 'GET', {}, { needToken: false }).then(response => {
  		const list: any[] =
	      response.map((pro) => ({
	        key: pro?.province_id,
	        value: pro?.name,
	        children: pro?.Cities.map(
	          (ci) =>
	            ({
	              key: ci?.city_id,
	              value: ci?.name == '市辖区' ? pro?.name : ci.name,
	              children: [],
	            } || [])
	        ),
	      })) || []

	    setCityList(list)
  	})
  }, [])

  return <Select css={css} list={cityList} value={value} onSelect={onSelect} />
}
export default CitySelect
