import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useEffect } from 'react';
import { useState } from 'react';

const EditMovie = ({modal,loggedIn, handleNewPost, toggle,taskObj}) => {
    const [form, setForm] = useState(
        {
            title: "",
            category: "",
            description: ""
        }
    )



    

    const handleUpdate = (e) => {
        fetch(`http://localhost:9293/users/${loggedIn.id}/movies/${taskObj.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(form)
        })
        handleNewPost()
        toggle()
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Title</label>
                        <input type="text" className = "form-control" value = {form.title} onChange={(e) => setForm({...form, title:e.target.value})}  name = "title"/>
                    </div>
                    <div className = "form-group">
                        <label>category</label>
                        <input type="text" className = "form-control" value = {form.category} onChange={(e) => setForm({...form, category:e.target.value})}  name = "category"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {form.description}onChange={(e) => setForm({...form, description:e.target.value})} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};




export default EditMovie;