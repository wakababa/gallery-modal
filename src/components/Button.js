import React from 'react'
export default function Button({
  index,
  setIndex,
  size,
  images,
  Icon,
  upbutton
}) {
  return (
    <button
      onClick={() =>
        setIndex(
          !upbutton
            ? index === 0
              ? 0
              : index - 1
            : index === images.length - 1
            ? images.length - 1
            : index + 1
        )
      }
      style={{
        marginRight: upbutton ? 'auto' :'1px',
        marginLeft:  !upbutton ? 'auto' :'1px',
        cursor:'pointer',
        border: '1px solid grey',
        background: 'none',
        outline: 'none',
        width: !size
          ? 360 / (images.length + 8) + 'px' + 'px'
          : size / (images.length + 8) + 'px'
      }}
    >
      <Icon />
    </button>
  )
}
