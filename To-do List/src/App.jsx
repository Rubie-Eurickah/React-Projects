import { useState } from "react"
import "./styles.css"

export default function App() {
    const [newItem, setNewItem] = useState("")
    const [todos, setTodos] = useState([])

    // Function triggered when a user submits a form.

    function handleSubmit(e) {
        e.preventDefault() // Method that prevents the page from refreshing when the form is submitted.
    
        /* setTodos is called with a callback function currentTodos as its parameter. The callback function 
        creates a new array of object that is a copy of the currentTodos array plus a new object with 
        properties id, title and completed. */

        setTodos(currentTodos => {
            return [
                ...currentTodos,
                { id: crypto.randomUUID(), 
                  title: newItem, 
                  completed: false },
            ]
        })  

        setNewItem("") // Clears the input field.
    }

    /* Updates the completed property of a todo item in a list of todos. It takes in two parameters id, completed
    which is a boolean indication if todos should be marked as completed.*/

    function toggleTodo(id, completed) {
    
    /* The setTodos function is called by a callback function that recieves current list of todos as an argument.
        The callback function uses the map function to create a new array of todos with updated completed property
        for the todo item that matches the id argument. If id matches then completed property of the item is 
        updated to the value of the completed argument. New object is created using the spread operator to copy
        all the properties of the original object with completed property replaced by the new value else the 
        original object is returned. */
    
        
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed} // Brand new state object
                }

                 return todo
            })
        })  
    }
    /* Removes a todo item fromthe list. Updates the state of todos with a new array escluding the
      item with id equal to the input id. Filter method creates a new array that doesn't include the item 
      with requested id. Final state is a new array without the deleted item. */
      
    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
      
    }

    return ( 
        <>
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
           <label htmlFor="item">New Item</label>
            <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/> 
        </div>
        <button className="btn">Add Item</button>
    </form>

    <h1 className="header">ToDo List</h1>
    <ul className="list">
        {todos.length === 0 && "No Todos found"}
        {todos.map(todo => {
                  return  <li key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id,
                         e.target.checked)}/>
                       {todo.title}
                    </label>
                    <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
                </li>
        })}
    </ul>
    </>
    )
}