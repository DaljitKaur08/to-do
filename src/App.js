import { useReducer, useState, useEffect } from 'react';

import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import taskReducer from './Reducers/taskReducer';

function App() {

    const [tasks, dispatch] = useReducer(
        taskReducer,
        [],
        () => {
            const savedTasks = JSON.parse(
                localStorage.getItem('tasks')
            );

            return savedTasks || [];
        }
    );

    const [editTask, setEditTask] = useState(null);

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