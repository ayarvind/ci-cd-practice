import React from 'react'
import Show from './Show'
export interface Task {
    title: string,
    task: string
}

export default function Add() {
    const [title, setTitle] = React.useState('')
    const [task, setTask] = React.useState('')
    const [error, setError] = React.useState('')
    const [tasks, setTasks] = React.useState<Task[]>([])

    const saveTodo = () => {
        if (!title || !task) {
            setError('Please fill all the fields')
            return
        }
        setTasks([...tasks, { title, task }])
        setTitle('')
        setTask('')
        setError('')
    }

    return (
        <>
            <div className="inputs" >
                {error && <p>{error}</p>}

                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Enter title" 
                />

                <textarea 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} 
                    placeholder="Enter task" 
                ></textarea>

                <button onClick={saveTodo} >
                    Save
                </button>
            </div>
            <Show 
            tasks={tasks}
            setTasks={setTasks}
             />
        </>
    )
}

