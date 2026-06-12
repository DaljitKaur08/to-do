// Import hooks
import { useReducer, useEffect } from 'react';
// Import components
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
// Import reducer
import taskReducer from './Reducers/taskReducer';

function App() {

    const [tasks, dispatch] = useReducer(
        taskReducer,
        [],
        // Load tasks from localStorage
        () => {
            const savedTasks = JSON.parse(
                localStorage.getItem('tasks')
            );

            return savedTasks || [];
        }
    );

    const [editTask, setEditTask] = useReducer(
        (state, action) => action,
        null
    );
 // Save tasks whenever tasks change
    useEffect(() => {
        localStorage.setItem(
            'tasks',
            JSON.stringify(tasks)
        );
    }, [tasks]);

    return (
        <>
            <Header />

            <main className="container">

                <TaskForm
                    dispatch={dispatch}
                    editTask={editTask}
                    setEditTask={setEditTask}
                />

                <TaskList
                    tasks={tasks}
                    dispatch={dispatch}
                    setEditTask={setEditTask}
                />

            </main>
        </>
    );
}

export default App;