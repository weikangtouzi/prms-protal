import {useState, useEffect} from 'react'
import {Select} from '@/components/select'
import {useAllLocationsQuery} from '@/generated'

interface CProps {
  css?: any
  value?: any
  onSelect?: any
}

function CitySelect({css, value, onSelect}: CProps) {
  const [cityList, setCityList] = useState<any[]>([])
  const {data} = useAllLocationsQuery()

  useEffect(() => {
    const list: any[] =
      data?.StaticGetAllRegion.data.map((pro) => ({
        key: pro?.province_id,
        value: pro?.name,
        children: pro?.Cities.map(
          (ci) =>
            ({
              key: ci?.city_id,
              value: ci?.name,
              children: [],
            } || [])
        ),
      })) || []

    setCityList(list)
  }, [data])

  return <Select css={css} list={cityList} value={value} onSelect={onSelect} />
}
export default CitySelect
