import Button from './Button';
import { useLocation } from 'react-router-dom';

function Header({ showAddTask, onAdd }) {
  const location = useLocation();
  
  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        {location.pathname === '/' && ( 
        <Button 
          showAddTask={showAddTask} 
          onAdd={onAdd} 
        />
      )}
    </header>
  )
}

export default Header;