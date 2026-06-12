import { useState, useEffect } from 'react';

function TaskForm({
    dispatch,
    editTask,
    setEditTask
}) {

    const [title, setTitle] = useState('');

    useEffect(() => {

        if (editTask) {
            setTitle(editTask.title);
        }

    }, [editTask]);

    const handleSubmit = (event) => {

        event.preventDefault();

        if (title.trim() === '') {
            return;
        }

        if (editTask) {

            dispatch({
                type: 'UPDATE_TASK',
                payload: {
                    ...editTask,
                    title: title,
                    date: new Date()

                }
            });

            setEditTask(null);

        } else {

            dispatch({
                type: 'ADD_TASK',
                payload: {
                    id: Date.now(),
                    title: title,
                    date: new Date(),
                    completed: false
                }
            });
        }

        setTitle('');
    };

    return (
        <section>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="New task"
                    value={title}
                    onChange={(event) =>
                        setTitle(event.target.value)
                    }
                />

                <button type="submit">
                    {editTask ? 'UPDATE' : 'ADD'}
                </button>

            </form>

        </section>
    );
}

export default TaskForm;