import { useReducer } from 'react';

import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import taskReducer from './Reducers/taskReducer';

function App() {

    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
        <>
            <Header />

            <main>
                <div className="container">

                    <TaskForm
                        dispatch={dispatch}
                    />

                    <TaskList
                        tasks={tasks}
                        dispatch={dispatch}
                    />

                </div>
            </main>
        </>
    );
}

export default App;