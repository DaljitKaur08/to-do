function taskReducer(tasks, action) {

    switch (action.type) {

        case 'ADD_TASK':
            return [...tasks, action.payload];

        case 'UPDATE_TASK':
            return tasks.map(task =>
                task.id === action.payload.id
                    ? action.payload
                    : task
            );

        case 'COMPLETE_TASK':
            return tasks.map(task =>
                task.id === action.payload
                    ? {
                          ...task,
                          completed: !task.completed
                      }
                    : task
            );

        case 'DELETE_TASK':
            return tasks.filter(
                task => task.id !== action.payload
            );

        default:
            return tasks;
    }
}

export default taskReducer;