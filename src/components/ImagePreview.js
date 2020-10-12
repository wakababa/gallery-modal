import React from 'react'
import gallery from '../css/gallery.module.scss'

const returnSize = (x) => (!x ? '360px' : `${x}px`)
export default function ImagePreview({ image, size }) {
  return (
    <div className={gallery.main}>
      <img style={{ width: returnSize(size) }} src={image} alt={image} />
    </div>
  )
}
