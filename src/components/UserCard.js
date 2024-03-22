import React, { useState } from 'react';
import './UserCard.css';

function UserCard({ user }) {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="card">
      <img src={user.picture.medium} alt="Avatar" className="w-100" />
      <div className="info-container">
        <div className="info-head">
          <h4>
            {user.name.first} {user.name.last}
          </h4>
          <span
            className={favorite ? 'is-favorite' : ''}
            onClick={(event) => {
              const newFavorite = !favorite;
              setFavorite(newFavorite);
            }}
          >
            &#9733;
          </span>
        </div>
          <div className="info-body">
              <p>{user.email}</p>
              <p>{user.location.street.number} {user.location.street.name}</p>
          </div>
      </div>
    </div>
  );
}

export default UserCard;
