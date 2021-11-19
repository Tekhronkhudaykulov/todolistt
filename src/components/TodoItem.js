import React from 'react'

const TodoItem = ({title}) => {
    return (
        <div className="item">
                 <div className="p">
                 <p>{title}</p>
                 </div>
        </div>
    )
}


export default TodoItem;
