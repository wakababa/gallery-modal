import React from 'react'
import styles from './styles.module.scss'

// COMPONENTS
import ImagePreview from './components/ImagePreview'

export const Banner = ({ text }) => (
  <div>
    <h2 className={styles.banner} style={{ textAlign: 'center' }}>
      {text}
    </h2>
  </div>
)

export const Gallery = ({ images, size, currentImage }) => (
  <div>
    <ImagePreview size={size} image={images[currentImage]} />
  </div>
)
