const TableBody = ({ transactions }) => (
  <tbody>
    {transactions.map(transaction => (
      <tr key={transaction.id}>
        {Object.values(transaction).map(item => (
          <td key={item}>{item}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

export default TableBody;
