import React from 'react'

export default function PreviewModal({ image, setopenModal }) {
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      setopenModal(false)
    }
  })

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'black',
        width:window.innerWidth,
        height: window.innerHeight,
        zIndex: '1'
      }}
      onClick={()=>setopenModal(false)}
    >
      <button
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          cursor: 'pointer',
          outline:"none",
          background:"none",
          border:"none",
          color:"White"
        }}
        onClick={() => setopenModal(false)}
      >
        X
      </button>
      <img
        width={window.innerWidth * 0.9}
        height={window.innerWidth < 600 ? window.innerHeight * 0.4:  window.innerHeight * 0.8}
        src={image}
        alt={image}
      />
    </div>
  )
}
