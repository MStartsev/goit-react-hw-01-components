import PropTypes from 'prop-types';
import randomBgColor from 'utils/randomBgColor';
import css from './statistics.module.css';

const StatList = ({ data }) => (
  <ul className={css['stat-list']}>
    {data.map(({ id, label, percentage }) => (
      <li key={id} className={css.item} style={randomBgColor()}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}</span>
      </li>
    ))}
  </ul>
);

export default StatList;

StatList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
