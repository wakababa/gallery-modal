import React, { Fragment } from 'react'

const returnSize = (x) => (!x ? '360px' : `${x}px`)

export default function ImagePreview({ image, size, setopenModal }) {
  return (
    <>
      <img
        style={{
          width: !size ? '360px' : returnSize(size),
          height: !size ? '180px' : returnSize(size / 2),
          outline: '1px solid #707070',
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 0,
          opacity: 0.9,
          cursor: 'pointer'
        }}
        onClick={() => setopenModal(true)}
        src={image}
        alt={image}
      />
    </>
  )
}
