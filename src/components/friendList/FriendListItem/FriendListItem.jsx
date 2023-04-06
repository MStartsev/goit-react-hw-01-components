import css from './FriendListItem.module.css';

const FriendListItem = ({ friends }) => {
  return friends.map(items => {
    const { id, avatar, name, isOnline } = items;
    console.log(id, name, isOnline);
    return (
      <li key={id} className={css.item}>
        <span className={isOnline ? css.online : css.offline}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
};

export default FriendListItem;

/* <li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>; */
