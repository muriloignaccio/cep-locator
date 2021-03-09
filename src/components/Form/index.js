import React, { useState } from 'react';
import { Alert, Row, Form, Button, Spinner } from 'react-bootstrap';
import { Modal } from '../';

import axios from 'axios';

import './styles.css';

export default function FormContainer() {

    const [loading, setLoading] = useState(false);
    const [cep, setCep] = useState('');
    const [show, setShow] = useState(false);
    const [cepData, setCepData] = useState({})
    const [error, setError] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleError = () => {
        setLoading(false);
        setError(true);
    }

    function handleSubmit(event){
        event.preventDefault();

        if(!cep.trim() || cep.length !== 8) return handleError()

        setError(false);
        setLoading(true);

        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(({ data }) => {

                if (data.erro) return handleError();

                setTimeout(() => {
                    setLoading(false)
                    setCepData({ ...data })
                    handleShow();
                }, 500);
            
            });
    }
    return (
        <Row className="bg-light rounded">
            <Form className="p-4">
                { error && <Alert variant={"danger"}>CEP invalido</Alert>}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ex: 02813020" 
                        className="mt-2"
                        value={cep}
                        onChange={event => setCep(event.target.value)}
                    />
                    <Form.Text className="text-muted pt-2">
                    Digite sem traços.
                    </Form.Text>
                </Form.Group>

                <Button variant="success" type="submit" block onClick={handleSubmit}>
                    {loading 
                        ? <Spinner
                            animation="grow"
                            variant="light" 
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          /> 
                        : "Buscar CEP" }
                </Button>
            </Form>

            { show && <Modal show={show} handleClose={handleClose} cepData={cepData}/>}
        </Row>
    );
};