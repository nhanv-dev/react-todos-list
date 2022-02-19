import React, { useState } from 'react'
import { Card, Button, ListGroup, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { BsPlusLg } from "react-icons/bs";
import Task from './Task'
import ModalForm from './ModalForm'
const GroupTask = ({ variant }) => {
    const tasks = useSelector(state => state.tasks)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card >
            <Card.Header>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="card__title">
                        <Badge bg="primary" pill>
                            {tasks?.filter((task) => task.status === variant.status).length}
                        </Badge>
                        <span className="ms-2">{variant?.title || 'Something to do'}</span>
                    </div>
                    <div>
                        <Button variant="primary" onClick={handleShow} className="d-flex align-items-center gap-2">
                            <BsPlusLg style={{ fontSize: '12px' }} />New task
                        </Button>
                        <ModalForm show={show} handleClose={handleClose} variant={variant} />
                    </div>
                </div>
            </Card.Header>
            <ListGroup variant="flush" className="container-tasks">
                {[...tasks]?.reverse().map((task) => task?.status === variant.status && <Task key={task.id} task={task} />)}
            </ListGroup>
        </Card>
    )
}


export default GroupTask
