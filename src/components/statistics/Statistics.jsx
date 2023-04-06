import randomBgColor from 'utils/randomBgColor';
import css from './statistics.module.css';

const Statistics = ({ data }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
    <ul className={css['stat-list']}>
      {data.map(({ id, label, percentage }) => (
        <li key={id} className={css.item} style={randomBgColor()}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;
