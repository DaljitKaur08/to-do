function TaskItem({
    task,
    dispatch,
    setEditTask
}) {
// Dispatch action to complete task
    const handleComplete = () => {
        dispatch({
            type: 'COMPLETE_TASK',
            payload: task.id
        });
    };

    const handleDelete = () => {
        dispatch({
            type: 'DELETE_TASK',
            payload: task.id
        });
    };

    const handleEdit = () => {
        setEditTask(task);
    };

    return (
        <article
            className={`task-card ${
                task.completed ? 'completed' : ''
            }`}
        >
            <h3>{task.title}</h3>

            <p className="task-date">
                {task.date &&
                    new Date(task.date).toLocaleString(
                        'en-US',
                        {
                            month: 'short',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: '2-digit',
                            second: '2-digit'
                        }
                    )}
            </p>

            <div className="task-actions">

                <button
                    className="icon-btn"
                    onClick={handleComplete}
                >
                    <i className="fa-solid fa-check"></i>
                </button>

                <button
                    className="icon-btn"
                    onClick={handleEdit}
                >
                    <i className="fa-solid fa-pen"></i>
                </button>

                <button
                    className="icon-btn"
                    onClick={handleDelete}
                >
                    <i className="fa-solid fa-trash"></i>
                </button>

            </div>
        </article>
    );
}

export default TaskItem;