import './index.css'

const ThumbnailItem = props => {
  const {eachItem, updateActiveImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachItem
  const activeThumbnailStyle = isActive ? 'active-item' : 'each-item'

  const clickThumbnailImg = () => {
    updateActiveImage(id)
  }

  return (
    <li className="each-item">
      <button type="button" className="button" onClick={clickThumbnailImg}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeThumbnailStyle}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
