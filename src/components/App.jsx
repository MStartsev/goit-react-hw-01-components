import Profile from './profile/Profile';
import user from '../json/user.json';

import Statistics from './statistics';
import data from '../json/data.json';

import FriendList from './friendList';
import friends from '../json/friends.json';

import TransactionHistory from './transactionHistory';
import transactions from '../json/transactions.json';

const statisticsTitle = 'Upload stats';

export const App = () => {
  return (
    <>
      <div className="container">
        <Profile {...user} />
        <Statistics data={data} title={statisticsTitle} />
        <FriendList friends={friends} />
      </div>

      <div className="container">
        <TransactionHistory transactions={transactions} />
      </div>
    </>
  );
};
