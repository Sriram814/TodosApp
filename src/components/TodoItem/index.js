// Write your code here
import './index.css'

const UserProfile = props => {
  const {userDetails, deleteUser} = props
  const {title, id} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="user-card-container">
      <div className="user-details-container">
        <p className="user-name"> {title} </p>
      </div>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default UserProfile
