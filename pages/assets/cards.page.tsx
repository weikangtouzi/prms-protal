import type {ReactElement} from 'react'
import {useState} from 'react'
import InfoLayout from '@/layouts/info'
import {styled} from '@/stitches.config'
import {Select} from '@/components/select'
import {TextField} from '@/components/textfield'

const RightWrap = styled('div', {
  w: 884,
  h: 530,
  p: 100,
  bg: '$w',
  mt: 16,
  ml: 16,
  mb: 135,
})

const Flex = styled('div', {
  display: 'flex',
})

export default function BankCards() {
  const [isModify, setIsModify] = useState(false)
  return (
    <RightWrap>
      <Flex
        css={{
          alignItems: 'center',
          justifyContent: 'space-between',
          w: 684,
          borderBottom: '1px dashed rgba(0,0,0,0.1)',
          pb: isModify ? 32 : 40,
          mb: 5,
        }}
      >
        <Flex css={{color: '#3C4441', fw: 600, fs: 18}}>结算要银行卡</Flex>
        {isModify ? (
          <Flex
            onClick={() => {
              setIsModify(false)
            }}
            css={{
              color: '$w',
              bg: '$primary',
              w: 80,
              h: 42,
              alignItems: 'center',
              justifyContent: 'center',
              ff: '$fr',
              borderRadius: 2,
            }}
          >
            保存
          </Flex>
        ) : (
          <Flex
            onClick={() => {
              setIsModify(true)
            }}
            css={{userSelect: 'none', color: '$primary', fw: 600, fs: 16}}
          >
            修改
          </Flex>
        )}
      </Flex>
      <Flex css={{flexDirection: 'column', fs: 16}}>
        <Flex css={{alignItems: 'center', mt: isModify ? 36 : 45}}>
          <Flex css={{color: '#616A67', ff: '$fr', mr: 10}}>开户名称：</Flex>
          {isModify ? (
            <TextField css={{w: 400}} size='small' placeholder='请输入结算银行卡开户名称' />
          ) : (
            <Flex css={{color: '#3C4441', fw: 600}}>陈小小</Flex>
          )}
        </Flex>
        <Flex css={{alignItems: 'center', mt: isModify ? 20 : 40}}>
          <Flex css={{color: '#616A67', ff: '$fr', mr: 10}}>银行账号：</Flex>
          {isModify ? (
            <TextField css={{w: 400}} size='small' placeholder='请输入结算银行卡账号' />
          ) : (
            <Flex css={{color: '#3C4441', fw: 600}}>6222 2222 2222 2222</Flex>
          )}
        </Flex>
        <Flex css={{alignItems: 'center', mt: isModify ? 20 : 40}}>
          <Flex css={{color: '#616A67', ff: '$fr', mr: 10}}>开户银行：</Flex>
          {isModify ? (
            <Select
              iconName='icon-icon_xialaxuanxiang2'
              placeholder='请选择结算银行开户银行'
              css={{w: 400, border: '1px solid rgba(0,0,0,0.2)'}}
            />
          ) : (
            <Flex css={{color: '#3C4441', fw: 600}}>中国银行</Flex>
          )}
        </Flex>
        <Flex css={{alignItems: 'center', mt: isModify ? 20 : 40}}>
          <Flex css={{color: '#616A67', ff: '$fr', mr: 10}}>开户支行：</Flex>
          {isModify ? (
            <TextField css={{w: 400}} size='small' placeholder='请选择结算银行开户支行名称' />
          ) : (
            <Flex css={{color: '#3C4441', fw: 600}}>中国银行后海支行</Flex>
          )}
        </Flex>
      </Flex>
    </RightWrap>
  )
}

BankCards.getLayout = function getLayout(page: ReactElement) {
  return <InfoLayout>{page}</InfoLayout>
}
