import PropTypes from 'prop-types';
import css from './profile.module.css';

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

export default StatsList;

StatsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ),
};
