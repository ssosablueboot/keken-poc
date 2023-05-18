import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


import './formularios.css'
import '../../App.css'
import '../../index.css'


function DeliveryDateTime({ propiedades, title, subtitle }) {

    const {errors, setErrors, form, setForm, validateForm, handleSubmit, setField} = propiedades

    return (
        <Form.Group controlId='delivery-form'>
            {title && <h3 className="title-h3">{title}</h3>}
            {subtitle && <p className="title-description">{subtitle}</p>}
            <Container>
                <Row className="address-row">
                    <Col lg={true}>
                        <Form.Control className="address-input golden-input" type="date" name="" id="" isInvalid={!!errors.FechaEntrega} value={form.FechaEntrega} onChange={(e) => setField('FechaEntrega', e.target.value)} />
                        <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.FechaEntrega}</Form.Control.Feedback>
                    </Col>
                    <Col lg={true}>
                        <Form.Control className="address-input golden-input" type="time" name="" id="" isInvalid={!!errors.HoraEntrega} value={form.HoraEntrega} onChange={(e) => setField('HoraEntrega', e.target.value)} />
                        <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.HoraEntrega}</Form.Control.Feedback>
                    </Col>
                </Row>
            </Container>
        </Form.Group>
    )
}

export default DeliveryDateTime