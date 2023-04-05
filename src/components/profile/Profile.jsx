import css from './profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
        width="80"
        height="80"
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <StatsList {...stats} />
  </div>
);

export default Profile;

const StatsList = stats => (
  <ul className={css.stats}>
    {Object.entries(stats).map(([key, value]) => (
      <li key={key} className={css.item}>
        <span className={css.label}>{key}</span>
        <span className={css.quantity}>{value}</span>
      </li>
    ))}
  </ul>
);
