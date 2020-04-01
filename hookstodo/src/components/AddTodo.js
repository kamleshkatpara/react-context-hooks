import React, { useState } from 'react';

const AddTodo = ({ Add }) => {

    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Add(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row align-items-center mb-2 mt-2">
                <div className="col-10">
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Add New Todo" required />
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default AddTodo;