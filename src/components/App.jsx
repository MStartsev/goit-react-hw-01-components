import Profile from './profile/Profile'
import user from '../json/user.json'

import Statistics from './statistics';
import data from '../json/data.json'



export const App = () => {
  return (
    <>
    
      <Profile {...user} />
      <Statistics {...data}/>


    </>
  
   
  );
};
