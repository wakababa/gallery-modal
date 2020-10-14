import React, { Fragment } from 'react'
import styles from './styles.module.scss'

// COMPONENTS
import ImagePreview from './components/ImagePreview'
import  ImageBar from './components/ImageBar'

export const Banner = ({ text }) => (
  <>
    <h2 className={styles.banner} style={{ textAlign: 'center' }}>
      {text}
    </h2>
  </>
)

export const Gallery = ({ images, size, index, css, setIndex }) => (
  <div>
    <ImagePreview css={css} size={size} image={images[index]} />
    <ImageBar size={size} index={index} setIndex={setIndex} images={images} />
  </div>
)
