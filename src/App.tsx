import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import TodoTask from "./components/TodoTask/TodoTask";
import { ITask } from "./interfaces";
import './styles/styles.css'


function App() {
	const [taskDescription, setTaskDescription] = useState<string>("");
	const [listTasks, setListTasks] = useState<ITask[]>([])

	function addTask() {
		if(taskDescription === ''){
			toast.error('O campo não pode ser vazio!')
			return
		}
		const idGenerate = (num:number) => Math.floor(Math.random() * num);		
		const newTask = { id: idGenerate(9999999999), description: taskDescription }
		setListTasks([...listTasks, newTask])
		toast.success('Cadastrada com sucesso!')
		setTaskDescription("");
	}

	function deleteTask(deleteById: number) {
		setListTasks(listTasks.filter((task) => task.id !== deleteById))
		toast.success('Deletado com sucesso!')
	}

	return (
		<div className="App">
			<ToastContainer 
				autoClose={2500}
				pauseOnHover={false}
			/>
			<div className="container">
				<h2>Registro simples</h2>
				<div className='form'>
					<input
						type="text" autoComplete="off" 
						placeholder="Descrição" 
						name="task"
						className="input"
						value={taskDescription}
						onChange={(e) => setTaskDescription(e.target.value)}
						maxLength={26}
					/>
					<button type="submit" onClick={addTask} className="btn-header">+</button>
				</div>
				{listTasks.map((task, key) => (
					<TodoTask key={key} task={task} deleteTask={deleteTask} />
				))}
			</div>
		</div>
	);
}

export default App;
