// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {isLoading: true, teamData: []}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch(teamsApiUrl)
    const fetchedData = await response.json()
    const formattedData = fetchedData.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageUrl: team.team_image_url,
    }))
    this.setState({teamData: formattedData, isLoading: false})
  }

  renderTeamsList = () => {
    const {teamData} = this.state

    return (
      <ul className="teams-list">
        {teamData.map(team => (
          <TeamCard key={team.id} teamCardDetails={team} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <div className="team-card-container">
          <div className="team-list-container">
            <div className="ipl-dashboard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            {isLoading ? this.renderLoader() : this.renderTeamsList()}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
