import './App.css'
import {Component} from 'react'
import Country from './components/Country'
import VisitedCountries from './components/VisitedCountries'
//  This is the list (static data) used in the application. You can move it to any component if needed.

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

// Replace your code here

const list = initialCountriesList.filter(each => each.isVisited === true)

class App extends Component {
  state = {vistedCountriesList: list}

  updateList = id => {
    const filteredList = initialCountriesList.filter(each => each.id === id)
    const {vistedCountriesList} = this.state
    const isExist = vistedCountriesList.includes(filteredList[0])
    const {isVisited} = filteredList[0]

    const index = initialCountriesList.findIndex(each => {
      if (each.id === id) {
        return true
      }
      return false
    })
    console.log('index', index)

    if (isExist === false && isVisited === false) {
      initialCountriesList[index].isVisited = true
      this.setState(prevState => ({
        vistedCountriesList: [
          ...prevState.vistedCountriesList,
          {...filteredList[0], isVisited: !isVisited},
        ],
      }))
    }
  }

  onClickRemoveBtn = id => {
    const index = initialCountriesList.findIndex(each => {
      if (each.id === id) {
        return true
      }
      return false
    })

    initialCountriesList[index].isVisited = false

    const {vistedCountriesList} = this.state
    const filteredList = vistedCountriesList.filter(each => each.id !== id)
    this.setState({
      vistedCountriesList: filteredList,
    })
  }

  render() {
    const {vistedCountriesList} = this.state

    vistedCountriesList.sort((a, b) => {
      const nameA = a.name.toUpperCase() // ignore upper and lowercase
      const nameB = b.name.toUpperCase() // ignore upper and lowercase
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }

      return 0
    })

    console.log('filtered lst', vistedCountriesList)
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="country-heading">Countries</h1>
          <ul className="countries-list-container">
            {initialCountriesList.map(each => (
              <Country
                country={each}
                key={each.id}
                updateList={this.updateList}
              />
            ))}
          </ul>
          <h1 className="country-heading">Visited Countries</h1>
          {vistedCountriesList.length === 0 ? (
            <p className="country-heading">No Countries Visited Yet</p>
          ) : (
            <ul className="visited-countries-list">
              {vistedCountriesList.map(each => (
                <VisitedCountries
                  country={each}
                  key={each.id}
                  onClickRemoveBtn={this.onClickRemoveBtn}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
