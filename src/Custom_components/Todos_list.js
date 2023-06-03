import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {

    let todos_container_style = {
             boxSizing: "border-box",
             width: "70%",
             margin: "auto",
             marginTop: "25px"
    }

    return(
        <div style={{marginTop: "10px"}}>
            <div className="heading">
                <h2 style={{textAlign: "center", marginTop: "0px"}}>Todos List</h2>
            </div>
            { props.todos.length<=0? <h4 style={{textAlign: "center", marginTop: "25px", marginBottom: "25px", color: "blue"}}>No Todos to display</h4> :
            <div className="container" style={todos_container_style}>
                    
                    {props.todos.map((todo) => {
                        return <Todo todo={todo} delete_func={props.delete_func}/>
                    })}
            </div>}
        </div>
    )
}