import React, { Fragment, useState } from 'react'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import Button from './Button'

export default function ImageBar({ images, setIndex, index, size }) {
  const ImageBarDivStyle = (size) => ({
    display: 'flex',
    width: !size ? '360px' : size + 'px',
    marginTop: '3px',
    marginLeft: 'auto',
    marginRight: 'auto'
  })
  const ImageBarImageStyle = (index, key) => ({
    margin: '1px',
    cursor: 'pointer',
    border:'1px solid #707070',
    borderBottom: key === index ? '1px solid red' : '',
    marginBottom: key === index ? '-1px' : ''
  })

  return (
    <div style={ImageBarDivStyle(size)}>
      <Button
        upbutton={false}
        images={images}
        size={size}
        index={index}
        setIndex={setIndex}
        Icon={BsChevronLeft}
      />
      {images.map((item, key) => (
        <img
          key={key}
          style={ImageBarImageStyle(index, key)}
          width={
            !size
              ? 360 / (images.length + 1) + 'px'
              : size / (images.length + 1) + 'px'
          }
          alt={key}
          src={item}
          onClick={() => setIndex(key)}
        />
      ))}
      <Button
        upbutton={true}
        images={images}
        size={size}
        index={index}
        setIndex={setIndex}
        Icon={BsChevronRight}
      />
    </div>
  )
}
