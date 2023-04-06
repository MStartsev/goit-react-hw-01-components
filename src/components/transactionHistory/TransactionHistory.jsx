// import css from './TransactionHistory.module.css';
let tableHeads = [];

const TableHead = ({ transactions }) => (
  <thead>
    <tr>
      {Object.keys(transactions[0]).map(head => {
        tableHeads.push(head);
        return <th key={head}>{head}</th>;
      })}
    </tr>
  </thead>
);

const TableBody = ({ transactions }) => (
  <thead>
    <tr></tr>
  </thead>
);

const TransactionHistory = ({ transactions }) => (
  <table className="transaction-history">
    <TableHead transactions={transactions} />

    <tbody>
      <TableBody transactions={transactions} />
      <tr>
        <td>Invoice</td>
        <td>125</td>
        <td>USD</td>
      </tr>
      <tr>
        <td>Withdrawal</td>
        <td>85</td>
        <td>USD</td>
      </tr>
    </tbody>
  </table>
);

export default TransactionHistory;
