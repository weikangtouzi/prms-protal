import {useState} from 'react'
import Image from 'next/image'
import {styled} from '@/stitches.config'
import {useUploadFileMutation} from '@/generated'

const WrapDiv = styled('div', {
  flexDirectionCenter: 'column',
  alignItems: 'flex-end',
  paddingRight: 80,
})

interface IProps {
  css?: any
}

const EmptyDiv = styled('label', {
  w: 480,
  h: 240,
  bg: '#F2F7F5',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  pt: 86,
  position: 'relative',
})

const EmptyText = styled('span', {
  fs: 14,
  color: '#8C9693',
  fw: 400,
  mt: 27,
})
const EmptyOutlineText = styled('label', {
  fs: 14,
  fw: 400,
  mt: 6,
  textDecoration: 'underline',
  variants: {
    active: {
      true: {
        color: '$primary',
        cursor: 'pointer',
      },
      false: {
        color: '#8C9693',
      },
    },
  },
})
const SecondLine = styled('div', {
  mb: 10,
  mt: 10,
})

const RealInput = styled('input', {
  display: 'none',
})

export default function UploadZZ({css}: IProps) {
  const [uploadFile] = useUploadFileMutation()
  const [url, setUrl] = useState('')
  return (
    <WrapDiv css={css}>
      {url ? (
        <>
          <EmptyDiv css={{pt: 0}}>
            <Image src={url} alt='ht' width={100} height={100} />
          </EmptyDiv>
        </>
      ) : (
        <>
          <EmptyDiv htmlFor='realInputId'>
            <Image src='/add.png' alt='ht' width={32} height={32} />
            <EmptyText>上传营业执照</EmptyText>
          </EmptyDiv>
        </>
      )}
      <SecondLine>
        <EmptyOutlineText htmlFor={url ? 'realInputId' : undefined} active={!!url} css={{mr: 40}}>
          编辑
        </EmptyOutlineText>
        <EmptyOutlineText
          onClick={() => {
            if (!url) {
              return
            }
            setUrl('')
          }}
          active={!!url}
        >
          删除
        </EmptyOutlineText>
      </SecondLine>
      <RealInput
        id='realInputId'
        onChange={(e) => {
          const {files = []} = e.target
          if (files && files.length > 0) {
            uploadFile({variables: {file: files[0], extraAttributes: {}}})
            setUrl(URL.createObjectURL(files[0]))
          }
        }}
        type='file'
        accept='.jpg,.png'
      />
      <EmptyText css={{mt: 0}}>只支持.jpg/.png格式</EmptyText>
    </WrapDiv>
  )
}
