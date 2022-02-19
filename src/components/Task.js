import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { BiTrash, BiEdit } from "react-icons/bi"
import { useDispatch } from 'react-redux'
import { removeTask } from '../redux/actions/task'
import TaskForm from './ModalForm'
const Task = (props) => {
    const { id, title, status } = props.task
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()

    const handleRemove = () => {
        const action = removeTask({ id, title, status })
        dispatch(action)
    }
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false);

    return (
        <ListGroup.Item className={'card__task card__task--' + status} >
            <div>{title}</div>
            <div style={{ display: 'flex', gap: '12px' }}>
                <BiEdit
                    style={{ fontSize: '1.275rem', color: '#20c997' }}
                    onClick={handleShow} />
                <BiTrash
                    style={{ fontSize: '1.275rem', color: '#dc3545' }}
                    onClick={handleRemove} />
                <TaskForm task={props.task} show={show} handleClose={handleClose} type="update" />
            </div>
        </ListGroup.Item>
    )
}

export default Task