import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateMovie = ({ modal, toggle, loggedIn, handleNewPost }) => {


    const [form, setForm] = useState(
        {
            name: "",
            category: "",
            description: ""
        }
    )

    //name is the titile of the movie, category is which a movies falls under and description is movies about


    //handleSave fcn will push movieObj in movieList array
    const handleSave = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9293/users/${loggedIn.id}/movies`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        handleNewPost()
        toggle()

    }


    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Movie</ModalHeader>
            <ModalBody>

                <form>
                    <div className='form-group'>
                        <label>Movie title</label>
                        <input type="text" className='form-control' value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} name="title" />
                    </div>
                    <div className='form-group'>
                        <label>Category</label>
                        <input type="text" className='form-control' value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} name="category" />
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea rows="5" className='form-control' value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} name="description"></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateMovie;