import React from 'react'
import { Form, Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { addNewTask, updateTask } from '../redux/actions/task';
const TaskForm = (props) => {
    const dispatch = useDispatch()
    const type = (props.type && props.type === 'update') ? props.type : 'create'
    const initialStatus = [
        { id: 'to-do', value: 'ToDo' },
        { id: 'in-progress', value: 'In Progress' },
        { id: 'done', value: 'Done' },
    ]
    const handleSubmit = (event) => {
        event.preventDefault();
        const title = document.querySelector('#title').value
        const status = document.querySelector('[name=status]:checked').value
        const task = { title, status }
        const action = addNewTask(task)
        dispatch(action)
        props.handleClose()
    }
    const handleUpdate = (event) => {
        event.preventDefault();
        const title = document.querySelector('#title').value
        const status = document.querySelector('[name=status]:checked').value
        const task = { ...props.task, title, status }
        const action = updateTask(task)
        dispatch(action)
        props.handleClose()
    }
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{type === 'update' ? 'Update Task' : 'Create New Task'}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={type === 'update' ? handleUpdate : handleSubmit}>
                <Modal.Body>
                    <Form.Control
                        type="text" id="title"
                        placeholder="Enter your task..."
                        defaultValue={props.task?.title && props.task.title}
                        className='mt-4'
                        required />
                    <div className='d-flex align-items-center gap-5 mt-4'>
                        {initialStatus.map((status, index) => {
                            let check = (props.task?.status || props.variant?.status) === status.id 
                                && 'checked'
                            return (
                                <Form.Check
                                    key={index} type='radio' name="status" defaultChecked={check} required
                                    id={status.value} label={status.value} value={status.id}
                                />
                            )
                        })}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}


export default TaskForm
