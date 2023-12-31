// Para arrancar con string (""), con array vacio ([]), con objeto (null), numero (0)

import './ToDoList.css'
import ToDoItem from "../ToDoList/ToDoItem";
import { useState, useEffect } from "react"

const ToDoList = () => {
    const [inputValue, setInputValue] = useState("");

    const [todos, setTodos] = useState(() => {
        const guardadoTodos = localStorage.getItem("todos");
        if (guardadoTodos) {
            return JSON.parse(guardadoTodos);
        } else {
            return [];
        }
    });

    //Funcion para agregar tareas
    const agregar = (texto) => {
        setTodos([...todos, texto]);
    }

    //Funcion para borrar todas las tareas
    const deleted = (todoDeleted) => {
        const actualizarTodos = todos.filter(todo => todo !== todoDeleted);
        setTodos(actualizarTodos);
    }

    //Funcion para manejar los eventos del formulario
    const manejadorSubmit = (e) => {
        e.preventDefault();

        // Evita que se agreguen tareas vacias
        if(inputValue.trim()) {
            agregar(inputValue);
            setInputValue("");
        }
    }

    //Guardamos la lista de tareas en el localStorage cada vez que cambia.
    useEffect( () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className='todolist-container'>
            <h2 className='tdl-tittle'>TO DO LIST</h2>
            <form className='tdl-form' onSubmit={manejadorSubmit}>
                <input className='tdl-input' type="text" placeholder="Ingrese una tarea" value={inputValue} onChange={ (e) => setInputValue(e.target.value)}/>
                <button className='tdl-button' type="submit"> Agregar </button>
                <ul>
                    {
                        todos.map((todo, index) => (
                            <ToDoItem 
                            key={index}
                            todo={todo}
                            deleted={deleted}
                            />
                        ))

                    }
                </ul>
            </form>
        </div>
    )
}

export default ToDoList