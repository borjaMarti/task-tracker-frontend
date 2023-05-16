function Button({ showAddTask, onAdd }) {
    return <button 
        className='btn' 
        onClick={onAdd} 
        style={showAddTask ? {backgroundColor: 'red'} : {backgroundColor: 'green'}}>{ showAddTask ? 'Close' : 'Add' }
    </button>
}

export default Button;