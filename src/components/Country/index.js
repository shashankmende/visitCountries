import './index.css'

const Country = props => {
  const {country, updateList} = props
  const {id, name, isVisited} = country

  const onClickBtn = () => {
    updateList(id)
  }

  const btnStyle = isVisited ? 'visitedCss' : 'visitCss'
  return (
    <li className="country-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited-para">Visited</p>
      ) : (
        <button
          type="button"
          className={`button ${btnStyle}`}
          onClick={onClickBtn}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default Country
