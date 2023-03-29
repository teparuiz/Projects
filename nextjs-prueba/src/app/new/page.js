"use client"
import {useState} from "react"
import {useTasks} from "../../context/TaskContext"
import {useRouter} from 'next/navigation'

function Page(){
    const [task, setTask] = useState('')
    const {createTask} = useTasks()
    const router = useRouter()


    const handleChange = (e) =>{
        setTask({...task, [e.target.name]: e.target.value})
          }

    const handleSubmit = (e)=>{
        e.preventDefault()
        createTask(task.title, task.description)
        router.push('/')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Escribe el título" onChange={handleChange}/>
            <textarea name="description" placeholder="Escribe la dirección" onChange={handleChange} />
            <button> Guardar </button>
            </form>
    )
}

export default Page