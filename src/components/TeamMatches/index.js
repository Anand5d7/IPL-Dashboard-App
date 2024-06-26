// Write your code here
import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import PieChart from '../PieChart'
import './index.css'

const teamMatchesApiUrl = 'https://apis.ccbp.in/ipl/'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchesData: {}}

  componentDidMount() {
    this.getTeamMatches()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    try {
      const response = await fetch(`${teamMatchesApiUrl}${id}`)
      const fetchedData = await response.json()
      const formattedData = {
        teamBannerUrl: fetchedData.team_banner_url,
        latestMatch: this.getFormattedData(fetchedData.latest_match_details),
        recentMatches: fetchedData.recent_matches.map(eachMatch =>
          this.getFormattedData(eachMatch),
        ),
        pieChartData: [
          {name: 'Won', value: fetchedData.won},
          {name: 'Lost', value: fetchedData.lost},
          {name: 'Draw', value: fetchedData.draw},
        ],
      }
      this.setState({teamMatchesData: formattedData, isLoading: false})
    } catch (error) {
      console.error('Error fetching team matches:', error)
      this.setState({isLoading: false})
    }
  }

  renderRecentMatchesList = () => {
    const {teamMatchesData} = this.state
    const {recentMatches} = teamMatchesData

    return (
      <ul className="recent-matches-list">
        {recentMatches.map(recentMatch => (
          <MatchCard key={recentMatch.id} recentMatchDetails={recentMatch} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatch, pieChartData} = teamMatchesData

    return (
      <div className="responsive-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch latestMatchData={latestMatch} />
        {this.renderRecentMatchesList()}
        <PieChart data={pieChartData} />
      </div>
    )
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'sh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  renderLoader = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const className = `team-matches-container ${this.getRouteClassName()}`

    return (
      <div className="matches-container">
        <div className={className}>
          {isLoading ? this.renderLoader() : this.renderTeamMatches()}
          <Link to="/" className="btn-link">
            <button type="button" className="back-btn">
              Back
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(TeamMatches)
