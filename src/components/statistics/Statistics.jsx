import css from './statistics.module.css';

const Statistics = (data) => (
    <section className="statistics">
        <h2 className="title">Upload stats</h2>
        {/* <StatList {...data} /> */}
    </section>
    
);

// const StatList = (data) => (
//   <ul className={css.item}>
//     {data.map(({id, label, percentage}) => (
//       <li key={id} className={css.item}>
//         <span className={css.label}>{label}</span>
//         <span className={css.percentage}>{percentage}</span>
//       </li>
//     ))}
//   </ul>
// );

export default Statistics;


// const sss = <section class="statistics">
//   <h2 class="title">Upload stats</h2>

//   <ul class="stat-list">
//     <li class="item">
//       <span class="label">.docx</span>
//       <span class="percentage">4%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp3</span>
//       <span class="percentage">14%</span>
//     </li>
//     <li class="item">
//       <span class="label">.pdf</span>
//       <span class="percentage">41%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp4</span>
//       <span class="percentage">12%</span>
//     </li>
//   </ul>
// </section>