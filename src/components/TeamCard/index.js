// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {name, id, teamImageUrl} = teamCardDetails

  return (
    <li className="list-item">
      <Link to={`/team-matches/${id}`} className="link">
        <div className="item-container">
          <img src={teamImageUrl} alt={name} className="image" />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
