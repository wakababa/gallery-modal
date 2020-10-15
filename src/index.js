import React, { Fragment } from 'react'
import styles from './styles.module.scss'

// COMPONENTS
import ImagePreview from './components/ImagePreview'
import ImageBar from './components/ImageBar'
import PreviewModal from './components/PreviewModal'

export const Banner = ({ text }) => (
  <>
    <h2 className={styles.banner} style={{ textAlign: 'center' }}>
      {text}
    </h2>
  </>
)

export const Gallery = ({
  images,
  size,
  index,
  css,
  setIndex,
  openModal,
  setopenModal
}) => (
  <div>
    <ImagePreview
      setopenModal={setopenModal}
      css={css}
      size={size}
      image={images[index]}
    />
    <ImageBar size={size} index={index} setIndex={setIndex} images={images} />
    {openModal ? (
      <PreviewModal setopenModal={setopenModal} image={images[index]} />
    ) : null}
  </div>
)
