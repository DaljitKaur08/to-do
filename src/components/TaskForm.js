import { useState } from 'react';

function TaskForm({ dispatch }) {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (event) => {

        event.preventDefault();

        if (title.trim() === '') {
            return;
        }

        const newTask = {
            id: Date.now(),
            title: title,
            date: date,
            completed: false
        };

        dispatch({
            type: 'ADD_TASK',
            payload: newTask
        });

        setTitle('');
        setDate('');
    };

    return (
        <section>

            <h2>Add Task</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter task"
                    value={title}
                    onChange={(event) =>
                        setTitle(event.target.value)
                    }
                />

                <input
                    type="date"
                    value={date}
                    onChange={(event) =>
                        setDate(event.target.value)
                    }
                />

                <button type="submit">
                    Add Task
                </button>

            </form>

        </section>
    );
}

export default TaskForm;