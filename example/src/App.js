import React, { useState } from 'react'

import { Banner, Gallery } from 'gallery-modal'

export default function App() {
  const [index, setIndex] = useState(0)
  return (
    <>
      <Banner text='Welcome To Gallery-Modal' />
      <Gallery
        setIndex={setIndex}
        size="500"
        index={index}
        images={[
          'https://playtusu.com/wp-content/uploads/2018/10/BB29-FEA-Metallica-s4d-2016-billboard-1548.jpg',
          'https://teknomanyak.com/wp-content/uploads/2020/05/metallica-turkiyede-en-cok-dinlenen-sarkilari-son.jpg',
          'https://tahiryildiz.com/wp-content/uploads/10547705_10152196807355264_743218574632125441_n.jpg',
          'https://teknomanyak.com/wp-content/uploads/2020/05/metallica-turkiyede-en-cok-dinlenen-sarkilari-son.jpg',
          'https://tahiryildiz.com/wp-content/uploads/10547705_10152196807355264_743218574632125441_n.jpg'
        ]}
      />
    </>
  )
}
