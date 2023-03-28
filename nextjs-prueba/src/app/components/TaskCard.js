import {useRouter} from 'next/navigation'

const TaskCard = (props) =>{
    const {_id, title, description} = props.data
    const router = useRouter()
    return (
        <div style={{background: "#202020", color: "white"}} onClick={()=> router.push(`/edit/${_id}`)}>
        <h1>{title}</h1>
        <button>Delete</button>
        <p>{description}</p>
      </div>
    )
}

export default TaskCard