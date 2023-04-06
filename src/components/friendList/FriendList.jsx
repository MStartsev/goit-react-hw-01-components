import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={css['friend-list']}>
    <FriendListItem friends={friends} />
  </ul>
);

export default FriendList;
