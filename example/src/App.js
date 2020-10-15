import React, { useState } from 'react'

import { Banner, Gallery } from 'gallery-modal'

export default function App() {
  const [index, setIndex] = useState(0)
  const [openModal, setopenModal] = useState(false)
  return (
    <>
      <Banner text='Welcome To Gallery-Modal' />
      <Gallery
        setIndex={setIndex}
        size="500"
        index={index}
        openModal={openModal}
        setopenModal={setopenModal}
        images={[
          'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          'https://images.pexels.com/photos/3601421/pexels-photo-3601421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          'https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          'https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        ]}
      />
    </>
  )
}
