// Write your code here

import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    matchStatus,
    result,
  } = recentMatchDetails

  const getMatchStatusClassName = status =>
    status === 'Won' ? 'match-won' : 'match-lost'
  const matchStatusClassName = `match-status ${getMatchStatusClassName(
    matchStatus,
  )}`

  return (
    <li className="matchCard-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo-pic"
      />
      <p className="competing-team-1">{competingTeam}</p>
      <p className="result-1">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
