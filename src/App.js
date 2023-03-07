import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div id='wrapper'>
      <div className='wp-content'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;