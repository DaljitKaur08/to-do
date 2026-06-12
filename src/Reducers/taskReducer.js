function taskReducer(tasks, action) {

    switch (action.type) {
// Add a new task
        case 'ADD_TASK':
            return [...tasks, action.payload];
        // Update existing task
        case 'UPDATE_TASK':
            return tasks.map(task =>
                task.id === action.payload.id
                    ? action.payload
                    : task
            );
// Task complete/incomplete

        case 'COMPLETE_TASK':
            return tasks.map(task =>
                task.id === action.payload
                    ? {
                          ...task,
                          completed: !task.completed
                      }
                    : task
            );
        // Delete task
        case 'DELETE_TASK':
            return tasks.filter(
                task => task.id !== action.payload
            );

        default:
            return tasks;
    }
}

export default taskReducer;