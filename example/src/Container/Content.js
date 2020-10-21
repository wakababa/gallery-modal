import React,{useState} from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {Gallery} from 'gallery-modal'

const Home = `
# GALLERY-MODAL

> Gallery-Modal design for you save your time ! Just install it and use. Lightweight and usefull.

[![NPM](https://img.shields.io/npm/v/gallery-modal.svg)](https://www.npmjs.com/package/gallery-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![NPM](https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/30px-Ei-sc-github.svg.png)](https://www.github.com/wakababa)
## Install

~~~bash
npm install --save gallery-modal
~~~
`
const Second = `
## Usage

~~~js
import React, { useState } from 'react'

import { Banner, Gallery } from 'gallery-modal'

export default function App() {
  const [index, setIndex] = useState(0)
  const [openModal, setopenModal] = useState(false)
  return (
    <>
      <Gallery
        setIndex={setIndex}
        size="500"
        index={index}
        openModal={openModal}
        setopenModal={setopenModal}
        images={[
          'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          'https://images.pexels.com/photos/3601421/pexels-photo-3601421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          'https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          'https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        ]}
      />
    </>
  )
}

~~~

## License

MIT © [wakababa](https://github.com/wakababa)
`

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={tomorrow}
        language={language}
        children={value}
      />
    )
  }
}

 function MainData() {
  const [index, setIndex] = useState(0)
  const [openModal, setopenModal] = useState(false)
  return (
    <>
    <ReactMarkdown renderers={renderers} plugins={[gfm]} children={Home} />
    <Gallery
      setIndex={setIndex}
      size='500'
      index={index}
      openModal={openModal}
      setopenModal={setopenModal}
      images={[
        'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3601421/pexels-photo-3601421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        'https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      ]}
    />
    <ReactMarkdown renderers={renderers} plugins={[gfm]} children={Second} />
  </>
  )
}



export default function Content({ currentPage, setcurrentPage }) {
  return (
    <div className='container-fluid'>
      <div class='row'>
        <div class='col-sm-8 mx-auto'>
          <MainData/>
        </div>
      </div>
    </div>
  )
}
