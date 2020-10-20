import React, { Fragment } from 'react'

export default function Logo({ className }) {
  return (
    <>
      <svg
        id='Logo'
        xmlns='http://www.w3.org/2000/svg'
        width='90%'
        height='49'
        viewBox='0 0 348 49'
        className={className}
      >
        <text
          id='GALLERY_MODAL'
          data-name='GALLERY MODAL'
          transform='translate(96 41)'
          fill='#707070'
          font-size='28'
          font-family='SegoeUI-Semibold, Segoe UI'
          font-weight='600'
        >
          <tspan x='0' y='0'>
            GALLERY MODAL
          </tspan>
        </text>
        <g
          id='Rectangle_14'
          data-name='Rectangle 14'
          transform='translate(11 13)'
          fill='#fff'
          stroke='#707070'
          stroke-width='1'
        >
          <rect width='70' height='35' stroke='none' />
          <rect x='0.5' y='0.5' width='69' height='34' fill='none' />
        </g>
        <g
          id='Rectangle_15'
          data-name='Rectangle 15'
          transform='translate(6 6)'
          fill='#fff'
          stroke='#707070'
          stroke-width='1'
        >
          <rect width='70' height='35' stroke='none' />
          <rect x='0.5' y='0.5' width='69' height='34' fill='none' />
        </g>
        <g
          id='Rectangle_16'
          data-name='Rectangle 16'
          fill='#fff'
          stroke='#707070'
          stroke-width='1'
        >
          <rect width='70' height='35' stroke='none' />
          <rect x='0.5' y='0.5' width='69' height='34' fill='none' />
        </g>
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='90%'
        height='1'
        viewBox='0 0 348 1'
        style={{display:"flex",marginLeft:"auto",marginRight:"auto"}}
      >
        <line
          id='Line_1'
          data-name='Line 1'
          x2='348'
          transform='translate(0 0.5)'
          fill='red'
          stroke='#707070'
          stroke-width='1'
        />
      </svg>
    </>
  )
}
