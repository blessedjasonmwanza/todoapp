// Shoud carry (id, Title, date, isDone)
import React from 'react';
const ToDoCard  = ({id, title, date, isDone}) =>{
    return(
        <div className="todo-card" id={id}>
            <span>
            {
                   isDone ? <input type="checkbox" disabled checked /> :<input type="checkbox" />
            }
            {
                   isDone ? <del><h1>{title} </h1> </del> :<h1>{title} </h1>
            }
            
            <date>  {date} </date>
            </span>
        </div>
    );


}
export default ToDoCard;