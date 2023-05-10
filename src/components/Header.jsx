import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

function Header({ title, showAddTask, onAdd }) {
  const location = useLocation();
  
  return (
    <header className='header'>
        <h1>{title}</h1>
        {location.pathname === '/tasks' && ( 
        <Button 
          showAddTask={showAddTask} 
          onAdd={onAdd} 
        />
      )}
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header