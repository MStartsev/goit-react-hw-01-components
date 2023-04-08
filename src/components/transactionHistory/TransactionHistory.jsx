import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

import TableHead from './TableHead';
import TableBody from './TableBody';

const TransactionHistory = ({ transactions }) => (
  <table className={css.table}>
    <TableHead transactions={transactions} />
    <TableBody transactions={transactions} />
  </table>
);

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
