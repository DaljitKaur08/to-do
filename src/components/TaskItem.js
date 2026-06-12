function TaskItem({ task, dispatch }) {

    return (
        <article
            className={
                task.completed
                    ? 'task-card completed'
                    : 'task-card'
            }
        >

            <h3>{task.title}</h3>

            <p>{task.date}</p>

            <div className="actions">

                <button
                    className="complete-btn"
                    onClick={() =>
                        dispatch({
                            type: 'COMPLETE_TASK',
                            payload: task.id
                        })
                    }
                >
                    Complete
                </button>

                <button
                    className="delete-btn"
                    onClick={() =>
                        dispatch({
                            type: 'DELETE_TASK',
                            payload: task.id
                        })
                    }
                >
                    Delete
                </button>

            </div>

        </article>
    );
}

export default TaskItem;