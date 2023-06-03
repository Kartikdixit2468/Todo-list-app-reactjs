import React, {useState} from "react";


export default function Add_todo(props){

    let form_container_style = {
        boxSizing: "border-box",
        width: "60%",
        margin: "auto",
        marginTop: "15px",
        marginBottom: "20px"
    }

    const [title, setTitle] = useState("");

    const [desc, setDesc] = useState("")
    

    const submit = (e) => {

        e.preventDefault();
        if(!title || !desc){
            alert("Tile or Description cannot be leaved blank.")
        }
        else{
            props.add_todo.add_todo(title, desc)
        }
    }

    return(
        <>

        <div className="heading">
            <h2 style={{textAlign: "center", marginTop: "15px", marginBottom: "15px"}}>:- Add a new Todo here -:</h2>

        </div>
        <div style={form_container_style} >
            <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Todo Description</label>
    <textarea cols="30" rows="20" type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1" style={{height: "100px"}}></textarea>
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
</form>
</div>
        </>
    );
}
