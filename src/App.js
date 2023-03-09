import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div id='wrapper'>
      <Outlet />
    </div>
  );
}

export default App;