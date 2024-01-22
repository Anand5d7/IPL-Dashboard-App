// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    result,
    date,
    venue,
    manOfTheMatch,
    competingTeam,
    firstInnings,
    secondInnings,
    competingTeamLogo,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <h1 className="side-head">Latest Matches</h1>
      <div className="latest-item-container">
        <div className="first-container">
          <div className="latest-match">
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-match-logo"
          />
        </div>
        <hr className="line" />
        <div className="second-container">
          <p className="label">First Innings</p>
          <p className="value">{firstInnings}</p>
          <p className="label">Second Innings</p>
          <p className="value">{secondInnings}</p>
          <p className="label">Man Of The Match</p>
          <p className="value">{manOfTheMatch}</p>
          <p className="label">Umpires</p>
          <p className="value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
