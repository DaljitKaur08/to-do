import TaskItem from './TaskItem';

function TaskList({ tasks, dispatch }) {

    return (
        <section>

            <div className="tasks-grid">

                {tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        dispatch={dispatch}
                    />
                ))}

            </div>

        </section>
    );
}

export default TaskList;