import './index.css'

const VisitedCountries = props => {
  const {country, onClickRemoveBtn} = props
  const {imageUrl, name, id} = country

  const onClickRemove = () => {
    onClickRemoveBtn(id)
  }

  return (
    <li className="countries-item">
      <img src={imageUrl} alt="thumbnail" className="thumbnail-img" />
      <div className="bottom-container">
        <p className="country-name">{name}</p>
        <button type="button" className="remove-btn" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
