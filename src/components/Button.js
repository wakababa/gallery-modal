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
            : index === images.length -1
            ? images.length -1
            : index + 1
        )
      }
      style={{
        marginRight: '1px',
        marginLeft: '1px',
        width: !size
          ? 360 / (images.length + 10) + 'px' + 'px'
          : size / (images.length + 10) + 'px',
        background: 'none',
        border: '1px solid grey'
      }}
    >
      <Icon />
    </button>
  )
}
