import {
    FaCheckCircle,
    FaEdit,
    FaTrash
} from 'react-icons/fa';

function TaskItem({
    task,
    dispatch,
    setEditTask
}) {

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
                    <FaCheckCircle />
                </button>

                <button
                    className="icon-btn"
                    onClick={handleEdit}
                >
                    <FaEdit />
                </button>

                <button
                    className="icon-btn"
                    onClick={handleDelete}
                >
                    <FaTrash />
                </button>

            </div>
        </article>
    );
}

export default TaskItem;