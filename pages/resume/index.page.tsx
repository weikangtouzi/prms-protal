import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Icon from '@/components/icon'
import {CloseDialog, ConfirmDialog} from '@/components/dialogs'
import {TextField} from '@/components/textfield'
import {Button} from '@/components/button'
import {
  ResuTitle,
  Main,
  LeftWrap,
  LeftTitleWrap,
  RightBtn,
  Flex,
  UploadText,
  RightWrap,
  RightPartWrap,
  UploadBtnText,
  UploadPrimaryBtn,
  RealInput,
} from './components/styled'
import ResumeItem from './components/resume-item'
import ResumeMenuItem from './components/resume-menu-item'
import JobExpectations from './components/job-expectations'
import BasicInfo from './components/basic-info'
import Advantage from './components/advantage'
import WorkExperience from './components/work-experience'
import ProjectExperience from './components/project-experience'
import EducationExperience from './components/education-experience'

const jlIcon = [
  {
    text: '简历刷新',
    name: 'icon-icon_shuaxinjianli',
  },
  {
    text: '简历置顶',
    name: 'icon-icon_shuaxinjianli',
  },
  {
    text: '简历优化',
    name: 'icon-icon_shuaxinjianli',
  },
]

const resumeMenu = [
  {
    text: '个人信息',
    name: 'icon-icon_renshu',
    activeName: 'icon-icon_renshu-copy',
    id: 'ProjectExperience',
  },
  {
    text: '求职意向',
    name: 'icon-icon_qiuzhioff',
    activeName: 'icon-icon_qiuzhioff-copy',
    id: 'ProjectExperience',
  },
  {
    text: '个人优势',
    name: 'icon-icon_zaixianjianli',
    activeName: 'icon-icon_zaixianjianli-copy',
    id: 'ProjectExperience',
  },
  {
    text: '工作经历',
    name: 'icon-icon_renshu',
    activeName: 'icon-icon_qiuzhion-copy',
    id: 'ProjectExperience',
  },
  {
    text: '项目经历',
    name: 'icon-icon_touzioff',
    activeName: 'icon-icon_touzioff-copy',
    id: 'ProjectExperience',
  },
  {
    text: '教育经历',
    name: 'icon-icon_renshu',
    activeName: 'icon-icon_renshu-copy',
    id: 'ProjectExperience',
  },
]

const imgUrl = 'https://modao.cc/uploads4/images/2960/29604935/v2_pksqvn.png'
export default function Resume(props) {
	const router = useRouter()
	const [editAble, setEditAble] = useState(true)
	useEffect(() => {
		setEditAble(router?.query?.editAble == 'false' ? false : true)
	}, [router.query])


  const [resumeList] = useState([
    // {title: '附件简历0000001.doc', size: '52M', id: 1, img: imgUrl},
    // {title: '附件简历002.pdf', size: '5M', id: 2, img: imgUrl},
  ])

  const [deleteOpen, setDeleteOpen] = useState(false)
  const [modifyOpen, setModifyOpen] = useState(false)
  const [menuActive, setMenuActive] = useState(0)
  const [resumeData, setResumeData] = useState()
  const onRefresh = () => {
  	Promise.all([
    	HTAPI.UserGetBasicInfo(),
    	HTAPI.CandidateGetAllJobExpectations(),
    	HTAPI.CandidateGetWorkExps(),
    	HTAPI.CandidateGetOnlineResumeBasicInfo(null, { showError: false }),
    	HTAPI.CandidateGetProjectExps(),
    	HTAPI.CandidateGetEduExps()
    ]).then(([
    	userInfo, 
    	expectJobs = [],
    	{ data: workExperience = [] }, 
    	baseInfo = {},
    	{ data: projectExperience = [] },
    	{ data: educationExperience = [] }
    ]) => {
    	setResumeData({
    		userInfo,
    		expectJobs,
    		baseInfo,
    		workExperience,
    		projectExperience,
    		educationExperience
    	})
    })
  }
  useEffect(() => {
  	onRefresh()
  }, [])

  return (
    <Main>
      <LeftWrap>
        <LeftTitleWrap>
          <ResuTitle>我的简历</ResuTitle>
          {
          	editAble && (
          		<RightBtn>
		            <a href='/resume?editAble=false' target='_blank' rel='noreferrer'>
		              预览简历
		            </a>
		          </RightBtn>
          	)
          }
        </LeftTitleWrap>

        <BasicInfo editAble={editAble} />
        <JobExpectations editAble={editAble} jobExpList={resumeData?.expectJobs} onRefresh={onRefresh} />
        <Advantage editAble={editAble} baseInfo={resumeData?.baseInfo} onRefresh={onRefresh} />
        <WorkExperience editAble={editAble} workExp={resumeData?.workExperience || []} onRefresh={onRefresh} />
        <ProjectExperience editAble={editAble} projExp={resumeData?.projectExperience || []} onRefresh={onRefresh} />
        <EducationExperience editAble={editAble} eduExp={resumeData?.educationExperience} onRefresh={onRefresh} />
      </LeftWrap>
      <RightWrap>
        <RightPartWrap>
          <ResuTitle css={{mb: 15}}>我的简历</ResuTitle>
          {resumeList.map((rs) => (
            <ResumeItem
              item={rs}
              onDelete={() => {
                setDeleteOpen(true)
              }}
              onModify={() => {
                setModifyOpen(true)
              }}
              key={rs.id}
            ></ResumeItem>
          ))}
          <UploadPrimaryBtn htmlFor='uploadRealInputId'>
            <Icon name='icon-icon_shangchuan-copy' />
            <UploadBtnText>上传简历</UploadBtnText>
          </UploadPrimaryBtn>
          {resumeList.length > 0 ? null : (
            <UploadText>
              1.请上传中文简历 <br />
              2.仅支持doc、docx、pdf格式 <br />
              3.文件大小不超过3M
            </UploadText>
          )}
          <RealInput
            id='uploadRealInputId'
            onChange={(e) => {
            	global.TODO_TOAST()
              // const {files = []} = e.target
              // if (files && files.length > 0) {
              // 	HTAPI.CommonSingleUpload(files[0]).then(response => {
              // 		// response.data.CommonSingleUpload
              // 	})
              // }
            }}
            type='file'
            accept='.doc,.docx,.pdf'
          />
        </RightPartWrap>
        <RightPartWrap css={{display: 'flex', p: '23px 0 20px 0'}}>
          {jlIcon.map((j) => (
            <Flex css={{flexDirectionCenter: 'column'}} key={j.text} onClick={() => {
            	global.TODO_TOAST()
            }}>
              <Icon name={j.name} />
              <UploadText css={{w: 94, textAlign: 'center', mt: 18}}>{j.text}</UploadText>
            </Flex>
          ))}
        </RightPartWrap>
        <RightPartWrap css={{p: '20px 10px', mb: 20}}>
          {resumeMenu.map((rm, idx) => (
            <ResumeMenuItem
              onClick={() => {
                setMenuActive(idx)
                document.getElementsByClassName('item-scroll-bind')[idx].scrollIntoView()
              }}
              item={rm}
              key={rm.text}
              active={idx === menuActive}
            ></ResumeMenuItem>
          ))}
        </RightPartWrap>
      </RightWrap>
      <ConfirmDialog
        title='删除简历'
        bodyText='删除后不可恢复，确认删除吗？'
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
      />
      <CloseDialog
        hasCloseIcon={false}
        dialogCss={{w: 500, h: 295, borderRadius: 5}}
        titleCss={{textAlign: 'left', ml: 40}}
        title='修改附件简历名称'
        open={modifyOpen}
        onOpenChange={setModifyOpen}
        onClose={() => {}}
      >
        <ResuTitle css={{textAlign: 'left', fs: 16, fw: 400, ml: 40, mt: 10, ff: '$fr', color: '#616A67'}}>
          请输入你确认要修改的简历名称
        </ResuTitle>
        <TextField size='small' placeholder='修改的简历名称' css={{w: 420, h: 60, ml: 40, mt: 20}} />
        <Flex css={{justifyContent: 'flex-end', pr: 40}}>
          <Button
            css={{
              mt: 20,
              mr: 20,
              w: 80,
              h: 42,
              bg: '$w',
              color: '#3C4441',
              border: '1px solid rgba(0, 0, 0, 0.2)',
            }}
            onClick={() => {
              setModifyOpen(false)
            }}
            text='取消'
          />
          <Button
            css={{mt: 20, w: 80, h: 42}}
            text='确定'
            onClick={() => {
              console.log('queding')
              setModifyOpen(false)
            }}
          />
        </Flex>
      </CloseDialog>
    </Main>
  )
}
