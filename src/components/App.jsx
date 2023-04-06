import Profile from './profile/Profile';
import user from '../json/user.json';

import Statistics from './statistics';
import data from '../json/data.json';

import FriendList from './friendList';
import friends from '../json/friends.json';

import TransactionHistory from './transactionHistory';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <>
      <div className="container">
        <Profile {...user} />
        <Statistics data={data} />
      </div>

      <div className="container">
        <TransactionHistory transactions={transactions} />
      </div>

      <FriendList friends={friends} />
    </>
  );
};
