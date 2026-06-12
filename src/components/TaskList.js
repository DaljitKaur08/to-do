import TaskItem from './TaskItem';

function TaskList({
    tasks,
    dispatch,
    setEditTask
}) {

    return (
        <section>
            <div className="tasks-grid">

                {tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        dispatch={dispatch}
                        setEditTask={setEditTask}
                    />
                ))}

            </div>
        </section>
    );
}

export default TaskList;