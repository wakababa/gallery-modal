import React from 'react'
import Sidebar from '../components/Sidebar'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {tomorrow} from 'react-syntax-highlighter/dist/cjs/styles/prism'



import {Home} from "../Pages/Home"
import {Components} from "../Pages/Components"
import {Api} from "../Pages/Api"

const mydata= [Home,Components,Api]

const renderers = {
    code: ({language, value}) => {
      return <SyntaxHighlighter style={tomorrow} language={language} children={value} />
    }
  }
   

const MainData = ({currentPage}) => (
  <>
    <ReactMarkdown renderers={renderers} plugins={[gfm]} children={mydata[currentPage]} />
  </>
)

export default function Content({currentPage,setcurrentPage}) {
  return (
    <div  className='container-fluid'>
      <div class='row'>
        <div class='col-sm-3'>
          <Sidebar setcurrentPage={setcurrentPage} currentPage={currentPage} />
        </div>
        <div class='col-sm-9'>
          <MainData  currentPage={currentPage}/>
        </div>
      </div>
    </div>
  )
}
