import { Task } from './Add'

export default function Show({ tasks, setTasks }: { tasks: Task[] ,setTasks: (tasks: Task[]) => void}) {
    const deleteTask = (key: number) => {
        const newTasks = tasks.filter((_, index) => index !== key)
        setTasks(newTasks)
    }
    return (
        <div>
            {tasks.length === 0 ? (
                <p >No tasks available</p>
            ) : (
                tasks.map((task, index) => (
                    <div key={index}  >
                        <h3 >{task.title}</h3>
                        <p >{task.task}</p>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                ))
            )}
        </div>
    )
}
