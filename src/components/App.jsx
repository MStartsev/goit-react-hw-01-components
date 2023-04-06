import Profile from './profile/Profile';
import user from '../json/user.json';

import Statistics from './statistics';
import data from '../json/data.json';

import FriendList from './friendList';
import friends from '../json/friends.json';

export const App = () => {
  return (
    <>
      <div className="container">
        <Profile {...user} />
        <Statistics data={data} />
      </div>

      <div className="container"></div>

      <FriendList friends={friends} />
    </>
  );
};
