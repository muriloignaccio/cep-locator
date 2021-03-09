import React from 'react';
import { Button, Modal, Form} from 'react-bootstrap';

export default function ModalContainer({ show, handleClose, cepData }) {
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>CEP encontrado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label className="mb-2" >LOGRADOURO</Form.Label>
                        <Form.Control placeholder={cepData.logradouro} disabled />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="mb-2" >BAIRRO</Form.Label>
                        <Form.Control placeholder={cepData.bairro} disabled />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="mb-2" >LOCALIDADE</Form.Label>
                        <Form.Control placeholder={cepData.localidade} disabled />
                    </Form.Group>
                    
                    <Form.Group className="d-flex justify-content-between">
                        <Form.Group block>
                            <Form.Label className="mb-2" >CEP</Form.Label>
                            <Form.Control placeholder={cepData.cep} disabled />
                        </Form.Group>
                        <Form.Group block>
                            <Form.Label className="mb-2" >UF</Form.Label>
                            <Form.Control placeholder={cepData.uf} disabled />
                        </Form.Group>
                        
                    </Form.Group>

                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>Buscar outro CEP</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};