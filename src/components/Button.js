import React from 'react'
export default function Button({
  index,
  setIndex,
  size,
  images,
  Icon,
  upbutton
}) {
  return upbutton ? (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='46'
      height='60'
      viewBox='0 0 46 60'
      onClick={() =>
        setIndex(index === images.length - 1 ? images.length - 1 : index + 1)
      }
      style={{ cursor: 'pointer', marginTop: 'auto', marginBottom: 'auto',marginLeft:"2px" }}
    >
      <g
        id='Polygon_3'
        data-name='Polygon 3'
        transform='translate(46) rotate(90)'
        fill='#fff'
      >
        <path
          d='M 59.07697677612305 45.5 L 0.9230270981788635 45.5 L 30.00000190734863 0.9153053164482117 L 59.07697677612305 45.5 Z'
          stroke='none'
        />
        <path
          d='M 30.00000190734863 1.830604553222656 L 1.846050262451172 45 L 58.15395355224609 45 L 30.00000190734863 1.830604553222656 M 30.00000190734863 0 L 60 46 L 3.814697265625e-06 46 L 30.00000190734863 0 Z'
          stroke='none'
          fill='#707070'
        />
      </g>
    </svg>
  ) : (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='46'
      height='60'
      viewBox='0 0 46 60'
      onClick={() => setIndex(index === 0 ? 0 : index - 1)}
      style={{ cursor: 'pointer', marginTop: 'auto', marginBottom: 'auto',marginRight:"2px" }}
    >
      <g
        id='Polygon_4'
        data-name='Polygon 4'
        transform='translate(0 60) rotate(-90)'
        fill='#fff'
      >
        <path
          d='M 59.07697677612305 45.5 L 0.9230270981788635 45.5 L 30.00000190734863 0.9153053164482117 L 59.07697677612305 45.5 Z'
          stroke='none'
        />
        <path
          d='M 30.00000190734863 1.830604553222656 L 1.846050262451172 45 L 58.15395355224609 45 L 30.00000190734863 1.830604553222656 M 30.00000190734863 0 L 60 46 L 3.814697265625e-06 46 L 30.00000190734863 0 Z'
          stroke='none'
          fill='#707070'
        />
      </g>
    </svg>
  )
}
