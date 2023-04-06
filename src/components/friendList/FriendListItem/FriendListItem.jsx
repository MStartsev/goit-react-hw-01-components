import css from './FriendListItem.module.css';

const FriendListItem = ({ friends }) =>
  friends.map(({ id, avatar, name, isOnline }) => (
    <li key={id} className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  ));

export default FriendListItem;
