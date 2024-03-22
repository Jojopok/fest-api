import React, {useState} from 'react';
import UserCard from './components/UserCard';
import axios from "axios";

const userProfil = {
    gender: 'male',
    name: {
        first: 'Charlie',
        last: 'Thompson',
    },
    location: {
        street: {
            number: 56,
            name: 'André malraux'
        }
    },
    picture: {
        medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
    },
    email: 'john.doe@random.com',
};

function App() {
    const [user, setUser] = useState(userProfil);

    const getUser = () => {
        axios
            .get('https://randomuser.me/api?nat=en')
            .then((response) => {
                console.log(response.data);
                setUser(response.data.results[0]);
            });
    };

  return (
      <div className="App">
          <UserCard user={user}/>
          <button type="button" onClick={getUser}>Voir un utilisateur au hasard</button>
      </div>
  );
}

export default App;
