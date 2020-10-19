import React from 'react'

export default function List({
  lists,
  className,
  lista,
  currentPage,
  setcurrentPage
}) {
  return (
    <>
      <div className={className}>
        {lists.map((item, key) => (
          <svg
            id='A'
            xmlns='http://www.w3.org/2000/svg'
            height='58'
            viewBox='0 0 348 58'
            style={{width:"98%",display:"flex",margin:"auto",marginBottom:"1px"}}
            onClick={() => setcurrentPage(key)}
          >
            <g
              id='Rectangle_19'
              data-name='Rectangle 19'
              fill='#fff'
              stroke='#707070'
              stroke-width='1'
            >
              <rect width='348' height='58' stroke='none' />
              <rect x='0.5' y='0.5' width='347' height='57' fill={Number(currentPage) === key ? '#ECECEC':'none'} />
            </g>
            <text
              id='COMPONENTS'
              transform='translate(10 35)'
              fill='#707070'
              font-size='16'
              font-family='SegoeUI-Semibold, Segoe UI'
              font-weight='600'
            >
              <tspan x='0' y='0'>
                {item}
              </tspan>
            </text>
          </svg>

          // <svg
          //   key={key}
          //   id='A'
          //   xmlns='http://www.w3.org/2000/svg'
          //   width='95%'
          //   height='58'
          //   viewBox='0 0 348 58'
          //   style={{ display: 'flex', marginLeft: 'auto'}}
            // onClick={() => setcurrentPage(key)}
          // >
          //   <g
          //     id='Rectangle_19'
          //     data-name='Rectangle 19'
          //     fill={Number(currentPage) === key ? '#ECECEC' : '#fff'}
          //     stroke='#707070'
          //     stroke-width='1'
          //   >
          //     <rect width='90%' height='58' stroke='none' />
          //     <rect
          //       className={lista}
          //       x='0.5'
          //       y='0.5'
          //       width='90%'
          //       height='57'
          //       fill={Number(currentPage) === key ? '#ECECEC' : '#fff'}
          //     />
          //   </g>
          //   <text
          //     id='COMPONENTS'
          //     transform='translate(10 35)'
          //     fill={Number(currentPage) === key ? 'rgb(45, 45, 45)' : '#707070'}
          //     font-size='16'
          //     font-family='SegoeUI-Semibold, Segoe UI'
          //     font-weight='600'
          //   >
          //     <tspan x='0' y='0'>
          //       {item}
          //     </tspan>
          //   </text>
          // </svg>
        ))}
      </div>
    </>
  )
}
