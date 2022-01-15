import {useState} from 'react'
import Image from 'next/image'
import {CloseDialog} from '@/components/dialogs'
import {Button} from '@/components/button'
import Icon from '@/components/icon'
import {Flex, OutlinedText, RealInput, JobItemHoverDiv, TitleText} from './styled'

interface JHProps {
  item: any
  active: boolean
}

const defaultJlList = [
  {
    id: 1,
    name: '陈小小的简历',
    isZx: true,
  },
  {
    id: 2,
    name: '附件简简历名称应该有这么长的文字简历名称应该有这么长的文字简历名称应该有这么长的文字历名称应该有这么长的文字名称',
    isZx: false,
  },
  {
    id: 3,
    name: '附件简历名称应该该有这么长的文字名称该有这么长的文字名称该有这么长的文字名称该有这么长的文字名称该有这么长的文字名称有这么长的文字名称',
    isZx: false,
  },
]

export default function JobHoverItem({active, item}: JHProps) {
  const {subs, money, subscribed, jobTitle, details, location, img} = item
  const [open, setOpen] = useState(false)
  const [stage, setStage] = useState(0)
  const [list] = useState(defaultJlList)
  const [selectedId, setSelectedId] = useState(0)

  const onClose = () => {
    setOpen(false)
    setStage(0)
  }

  let top = 190
  if (stage === 1) {
    top = 292
  }

  const dialogDom = (
    <CloseDialog
      dialogCss={{w: 698, borderRadius: 2, h: 'fit-content', top, textAlign: 'left'}}
      title={stage === 1 ? '投个简历' : '投简历确认'}
      titleCss={{fs: 18, color: '#3C4441', ml: 40, textAlign: 'left', h: 'auto'}}
      open={open}
      onOpenChange={setOpen}
      onClose={onClose}
    >
      {stage === 0 ? (
        <Flex>
          <Button
            css={{mt: 20, w: 120, h: 42, ml: 40, fs: 16, mb: 40}}
            onClick={() => {
              setStage(1)
            }}
            text='确认投递'
          />
          <Flex
            onClick={onClose}
            css={{mt: 20, alignItems: 'center', fs: 16, color: '#3C4441', h: 42, w: 120, pl: 24, userSelect: 'none'}}
          >
            放弃投递
          </Flex>
        </Flex>
      ) : null}
      {stage === 1 ? (
        <Flex css={{flexDirection: 'column'}}>
          <Flex css={{flexDirection: 'column', ml: 40, mb: 30, mr: 40, color: '#616A67'}}>
            {list.map((li) => (
              <Flex
                key={li.id}
                onClick={() => {
                  setSelectedId(li.id)
                }}
                css={{justifyContent: 'space-between', mt: 20, alignItems: 'center'}}
              >
                <Flex css={{alignItems: 'center'}}>
                  <Icon name={selectedId === li.id ? 'icon-icon_dianji' : 'icon-icon_weidianji'} />
                  <Flex css={{ff: '$fr'}}>{li.isZx ? '在线简历：' : '附件简历：'}</Flex>
                  <Flex
                    css={{
                      w: 288,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      '-webkit-line-clamp': 1,
                      display: '-webkit-box',
                      '-webkit-box-orient': 'vertical',
                      color: '#3C4441',
                      fw: 600,
                    }}
                  >
                    {li.name}
                  </Flex>
                </Flex>
                <Flex>
                  {li.isZx ? (
                    <>
                      <OutlinedText>预览</OutlinedText>&nbsp;|&nbsp;<OutlinedText>修改</OutlinedText>
                    </>
                  ) : (
                    <OutlinedText>下载</OutlinedText>
                  )}
                </Flex>
              </Flex>
            ))}
          </Flex>
          <OutlinedText htmlFor='realJLInputId' css={{ml: 40}}>
            上传附件简历
          </OutlinedText>
          <RealInput
            id='realJLInputId'
            onChange={(e) => {
              const {files = []} = e.target
              if (files && files.length > 0) {
                console.log('files', files[0])
              }
            }}
            type='file'
            accept='.doc,.docx,.pdf'
          />
          <Flex>
            <Button
              css={{mt: 20, w: 140, h: 42, ml: 40, fs: 16, mb: 40}}
              onClick={() => {
                setStage(2)
              }}
              text='确认投递简历'
            />
            <Flex
              onClick={onClose}
              css={{mt: 20, alignItems: 'center', fs: 16, color: '#3C4441', h: 42, w: 120, pl: 24, userSelect: 'none'}}
            >
              取消
            </Flex>
          </Flex>
        </Flex>
      ) : null}
      {stage === 2 ? (
        <Flex css={{flexDirection: 'column', mt: 25, ml: 40}}>
          <Flex css={{ff: '$fr'}}>简历已成功投出去了，请静候佳音</Flex>
          <Button css={{mt: 20, w: 120, h: 42, fs: 16, mb: 40}} onClick={onClose} text='我知道了' />
        </Flex>
      ) : null}
    </CloseDialog>
  )

  let JobDom = active ? (
    <JobItemHoverDiv>
      <Flex css={{bg: '#EFF2F1', w: 625, p: '30px 40px', justifyContent: 'space-between'}}>
        <Flex css={{flexDirection: 'column'}}>
          <Flex>
            <TitleText css={{fs: 18}}>{jobTitle}</TitleText>
            <TitleText css={{color: '#FF6500', fs: 18}}>{money}</TitleText>
          </Flex>
          <TitleText css={{fs: 18, fw: 400, mt: 10}}>{subs}</TitleText>
        </Flex>
        <Flex css={{alignItems: 'center'}}>
          <Icon name={subscribed ? 'icon-ico_shoucangoff' : 'icon-ico_shoucangon'} />
          <TitleText css={{fs: 18, color: '$primary', ml: 10, mr: 20}}>收藏</TitleText>
          <Button
            onClick={() => {
              setOpen(true)
            }}
            text='投简历'
            css={{w: 120, h: 54, mt: 0}}
          />
        </Flex>
      </Flex>
      <Flex css={{p: '20px 40px', w: 625}}>
        <Flex
          css={{
            color: '#3C4441',
            fs: 18,
            ff: '$fr',
            flexDirection: 'column',
            borderBottom: '1px dashed rgba(0, 0, 0, 0.1)',
          }}
        >
          <Flex>职位描述：</Flex>
          <Flex css={{mt: 10, w: 545, whiteSpace: 'break-spaces', mb: 20}}>{details}</Flex>
        </Flex>
      </Flex>

      <Flex css={{justifyContent: 'space-between', bg: '$w', p: '20px 40px', alignItems: 'center'}}>
        <Flex css={{flexDirection: 'column', fs: 18, color: '#3C4441'}}>
          工作地点 <Flex css={{fs: 14, mt: 10}}>{location}</Flex>
        </Flex>
        <Flex>
          <Flex
            css={{
              flexDirection: 'column',
              fs: 18,
              color: '#3C4441',
              alignItems: 'flex-end',
              justifyContent: 'center',
              mr: 17,
            }}
          >
            APP扫码 <Flex css={{fs: 14, mt: 10}}>聊一聊</Flex>
          </Flex>
          <Image alt='ewm' width={76} height={76} src={img} />
        </Flex>
      </Flex>
    </JobItemHoverDiv>
  ) : null

  return (
    <>
      {JobDom}
      {dialogDom}
    </>
  )
}
