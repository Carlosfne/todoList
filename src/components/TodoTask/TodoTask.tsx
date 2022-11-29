
import { ITask } from '../../interfaces';
import './styles.css'

interface ITaskProps {
    task: ITask;
    deleteTask(deleteById: number): void
}

function TodoTask({ task, deleteTask }: ITaskProps) {	
	return (
        <>
            <div className="card">
                <div>
                    <p>{task.description}</p>
                </div>
                <div className="line2" >
                    <span className="btn-card" onClick={() => deleteTask(task.id)}>X</span>
                </div>
            </div>
            <div className="line"></div>
        </>
	);
}

export default TodoTask;
