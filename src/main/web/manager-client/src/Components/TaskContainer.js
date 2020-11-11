import React from 'react';
import Task from './Task';

const TaskContainer = ({tasks, refresh}) => {

    const emptyStyle = {
        color: '#E6B447',
        background: '#282c34',
        display: 'flex',
        height: '-webkit-fill-available'
    }

    const createTaskList = () => {
        if (tasks === null || tasks.length === 0
            ) {
            return <div style={{flex: 1}}>
                        Nothing to display. Post a task or use the filters.
                   </div>
        } else {
            let items = [];
            for (let i=0; i<tasks.length; i++) {
                let user = tasks[i].user;
                let due = tasks[i].dueDate;
                let text = tasks[i].task;
                let id = tasks[i].id;
                items.push(<Task user={user} due={due} text={text} id={id} getItems={refresh}/>)
            }
            return <div style={{flex: 1}}>
                    {items}
                   </div> 
        }
    }

    return(
        <div style={emptyStyle}>
            {createTaskList()}
        </div>
    );

} 
export default TaskContainer;