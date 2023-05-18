import React from 'react'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import './formularios.css'
import '../../App.css'
import '../../index.css'

function DeliveryContact({ propiedades, title, subtitle }) {
    const {errors, form, setField} = propiedades

    const logged = useSelector((state) => state.logged)

    const userBackendData = useSelector((state) => state.userBackendData)


    return (
        <Form.Group controlId="contact-form">
            {title && <h3 className="title-h3">{title}</h3>}
            {subtitle && <p className="title-description">{subtitle}</p>}

            {logged ?
                <>
                    <Container>
                        <Row className="address-row">
                            <Col md={true}>
                                <p  className="address-input"><span>C.P.: </span>{userBackendData[0].CP}</p>
                            </Col>
                        </Row>
                        <Row className="address-row">
                            <Col md={true}>
                                <p className="address-input"><span>Nombre: </span> {userBackendData[0].Nombre}</p>
                            </Col>
                            <Col lg={true}>
                                <p className="address-input"><span>Apellido: </span>{userBackendData[0].Apellido}</p>
                            </Col>
                        </Row>
                        <Row className="address-row">
                            <Col md={true}>
                                <p className="address-input"><span>Teléfono: </span>{userBackendData[0].Telefono}</p>
                            </Col>
                            <Col md={true}>
                                <p className="address-input"><span>Email: </span>{userBackendData[0].Email}</p>
                            </Col>
                        </Row>
                    </Container>
                </>
                :
                <>
                    <Container>
                        <Row className="address-row">
                            <Col lg={true}>
                                <Form.Control type="text" placeholder='Nulla Egestas' className="address-input golden-input" name="" id="" isInvalid={!!errors.NombreEntrega} value={form.NombreEntrega} onChange={(e) => setField('NombreEntrega', e.target.value)} />
                                <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.NombreEntrega}</Form.Control.Feedback>
                            </Col>
                            <Col lg={true}>
                                <Form.Control type="text" placeholder='Tortor Pharetra' className="address-input golden-input" name="" id="" isInvalid={!!errors.DireccionEntrega} value={form.DireccionEntrega} onChange={(e) => setField('DireccionEntrega', e.target.value)} />
                                <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.DireccionEntrega}</Form.Control.Feedback>
                            </Col>
                        </Row>
                        <Row className="address-row">
                            <Col lg={true}>
                                <Form.Control type="email" placeholder='Nulla123@dominio.com' className="address-input golden-input" name="" id="" isInvalid={!!errors.EmailEntrega} value={form.EmailEntrega} onChange={(e) => setField('EmailEntrega', e.target.value)} />
                                <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.EmailEntrega}</Form.Control.Feedback>
                            </Col>
                            <Col lg={true}>
                                <Form.Control type="text" placeholder='Teléfono' className="address-input golden-input" name="" id="" isInvalid={!!errors.TelEntrega} value={form.TelEntrega} onChange={(e) => setField('TelEntrega', e.target.value)} />
                                <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.TelEntrega}</Form.Control.Feedback>
                            </Col>
                        </Row>
                    </Container>
                </>}

        </Form.Group>
    )
}

export default DeliveryContact