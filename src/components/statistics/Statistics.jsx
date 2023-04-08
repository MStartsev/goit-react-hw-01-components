import PropTypes from 'prop-types';
import StatList from './StatList';
import css from './statistics.module.css';

const defaultTitle = 'Upload stats';

const Statistics = ({ title, data }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>{title ?? defaultTitle}</h2>
    <StatList data={data} />
  </section>
);

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
