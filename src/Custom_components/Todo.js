import React from 'react';

export default function Todo(props) {

    let todo_box_style = {
        backgroundColor: "rgb(208 208 208)",
        borderRadius: "7px",
        padding: "18px",
        marginBottom: "30px"
    }
    return(
        <>
            <div style={todo_box_style}>

                <h4>{props.todo.title}</h4>
                <p>{props.todo.desc}</p>
                <button type="button" className="btn btn-danger" onClick={()=>{props.delete_func(props.todo)}}> <b> Delete </b></button>

            </div>
        </>
    )
}