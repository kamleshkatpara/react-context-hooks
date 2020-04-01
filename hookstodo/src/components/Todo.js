import React, { useState } from 'react';

const Todo = ({ todo, Edit, Delete }) => {

    const [isEdit, setEdit] = useState(false);

    const [title, setTitle] = useState(todo.title);

    const changeEdit = () => {
        setEdit(!isEdit);
    }

    const updateTodo = (id) => {
        Edit(id, title);
        setEdit(false);
    }

    return (

        isEdit === true ?

            <React.Fragment>
                <div className="row mb-3">

                    <div className="col-9">
                        <input type="text" defaultValue={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
                    </div>

                    <div className="col">
                        <button className="btn btn-primary" onClick={() => updateTodo(todo.id)}>Update</button>
                    </div>

                    <div className="col">
                        <button onClick={() => changeEdit()} className="btn btn-secondary">Cancel</button>
                    </div>

                </div>
            </React.Fragment>
            :
            <React.Fragment>
                <div className="row mb-3">

                    <div className="col-9">
                        <li key={todo.id} className="list-group-item">{todo.title}</li>
                    </div>

                    <div className="col">
                        <i onClick={() => changeEdit()} className="mt-3 fa fa-pencil-square-o" aria-hidden="true"></i>
                    </div>

                    <div className="col">
                        <i onClick={() => { if (window.confirm('Delete the Todo ?')) { Delete(todo.id) }; }} className="mt-3 fa fa-trash" aria-hidden="true"></i>
                    </div>

                </div>
            </React.Fragment>
    )
}

export default Todo;