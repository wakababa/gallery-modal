import React, { Fragment } from 'react'

const returnSize = (x) => (!x ? '360px' : `${x}px`)

export default function ImagePreview({ image, size }) {
  return (
    <>
      <img
        style={{
          width: !size ? "360px" : returnSize(size),
          height: !size ? "180px" :  returnSize(size / 2),
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 0,
          opacity: 0.9
        }}
        src={image}
        alt={image}
      />
    </>
  )
}
