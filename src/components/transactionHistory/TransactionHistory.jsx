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
