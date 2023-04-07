const TableHead = ({ transactions }) => (
  <thead>
    <tr>
      {Object.keys(transactions[0]).map(headItem => {
        return <th key={headItem}>{headItem}</th>;
      })}
    </tr>
  </thead>
);

export default TableHead;
