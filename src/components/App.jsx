import Profile from './profile/Profile'

import user from '../json/user.json'



export const App = () => {
  return (
    <>
    
      <Profile {...user} />

    </>
  
   
  );
};
