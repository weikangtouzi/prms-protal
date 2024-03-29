import {useState, useEffect} from 'react'
import Image from 'next/image'
import {styled} from '@/stitches.config'

const WrapDiv = styled('div', {
  flexDirectionCenter: 'column',
})

interface IProps {
  css?: any
  fileUrl?: string
  setFileUrl: any
}

const EmptyDiv = styled('label', {
  size: 100,
  bg: '#F2F7F5',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  pt: 28,
  position: 'relative',
  cursor: 'pointer',
})

const EmptyText = styled('span', {
  fs: 14,
  color: '#8C9693',
  fw: 400,
  mt: 6,
})
const EmptyOutlineText = styled('label', {
  fs: 14,
  fw: 400,
  mt: 6,
  textDecoration: 'underline',
  cursor: 'pointer',
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
  mb: 8,
  mt: 3,
})

export function AvatarUploader({css, fileUrl, setFileUrl}: IProps) {
  const [url, setUrl] = useState(fileUrl)

  useEffect(() => {
    setUrl(fileUrl)
  }, [fileUrl])

  return (
    <WrapDiv css={css}>
      {url ? (
        <>
          <EmptyDiv css={{pt: 0}}>
            <Image className='use-image-round' src={url} alt='ht' width={100} height={100} />
          </EmptyDiv>
        </>
      ) : (
        <>
          <EmptyDiv htmlFor='realInputId'>
            <Image src='/add.png' alt='ht' width={32} height={32} />
            <EmptyText>上传头像</EmptyText>
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
      <input
        style={{display: 'none'}}
        id='realInputId'
        onChange={(e) => {
          const {files = []} = e.target
          if (files && files.length > 0) {
          	HTAPI.CommonSingleUpload(files[0]).then(response => {
          		setUrl(response.data.CommonSingleUpload)
          		setFileUrl(response.data.CommonSingleUpload)
          	})
            setUrl(URL.createObjectURL(files[0]))
          }
        }}
        type='file'
        accept='.jpg,.png'
      />
      <EmptyText>只支持.jpg/.png格式（单张）</EmptyText>
    </WrapDiv>
  )
}
