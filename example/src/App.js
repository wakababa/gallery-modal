import React, { useState } from 'react'

import { Banner, Gallery } from 'gallery-modal'
import 'gallery-modal/dist/index.css'

const App = () => (
  
  <div>
    <Banner text='Welcome To Gallery-Modal' />
    <Gallery
      currentImage={0}
      images={[
        'https://playtusu.com/wp-content/uploads/2018/10/BB29-FEA-Metallica-s4d-2016-billboard-1548.jpg',
        'https://teknomanyak.com/wp-content/uploads/2020/05/metallica-turkiyede-en-cok-dinlenen-sarkilari-son.jpg'
      ]}
    />
  </div>
)
export default App
