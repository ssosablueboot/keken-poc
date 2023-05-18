import React from 'react'
import { useState } from 'react'
import { Stack, Row, Col, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import PostalCodeChecker from '../../common/formulario/PostalCode.component'

import './formularios.css'
import '../../App.css'
import '../../index.css'

function DeliveryAddress({ propiedades, title, subtitle, }) {

    const { errors, form, setField } = propiedades
    
    const logged = useSelector((state) => state.logged)

    const userBackendData = useSelector((state) => state.userBackendData)

    const [selectedOption, setSelectedOption] = useState(userBackendData[0].Direccion[0]);
    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <Form.Group controlId="address-form">
            {title && <h3 className="title-h3">{title}</h3>}
            {subtitle && <p className="title-description">{subtitle}</p>}
            {logged ?
                <>
                    <fieldset>
                        {userBackendData[0].Direccion.map((dir, index) => (
                            <Form.Check
                                style={{ textAlign: 'left' }}
                                type='radio'
                                id={index}
                                label={dir}
                                value={dir}
                                checked={selectedOption === dir}
                                onChange={handleRadioChange}
                                name='Direccion'
                            />
                        ))}

                        <Form.Check
                            style={{ textAlign: 'left' }}
                            type='radio'
                            id={userBackendData.length}
                            value='Otra'
                            checked={selectedOption === 'Otra'}
                            onChange={handleRadioChange}
                            label='Otra dirección'
                            name='Direccion'
                        />

                        {selectedOption === 'Otra' &&
                            <>
                                <PostalCodeChecker />
                                <Row className="address-row">
                                    <Col lg={true}>
                                        <Form.Control className="address-input grey-input" type="text" placeholder='Calle' isInvalid={!!errors.Calle} value={form.Calle} onChange={(e) => setField('Calle', e.target.value)} />
                                        <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.Calle}</Form.Control.Feedback>
                                    </Col>
                                    <Col lg={true}>
                                        <Form.Control className="address-input grey-input" type="text" placeholder='Colonia' isInvalid={!!errors.Colonia} value={form.Colonia} onChange={(e) => setField('Colonia', e.target.value)} />
                                        <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.Colonia}</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                <Row className="address-row">
                                    <Col lg={true}>
                                        <Form.Control className="address-input grey-input" type="text" placeholder='No. Exterior' isInvalid={!!errors.NoExterior} value={form.NoExterior} onChange={(e) => setField('NoExterior', e.target.value)} />
                                        <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.NoExterior}</Form.Control.Feedback>
                                    </Col>
                                    <Col lg={true}>
                                        <Form.Control className="address-input grey-input" type="text" placeholder='No. Interior' isInvalid={!!errors.NoInterior} value={form.NoInterior} onChange={(e) => setField('NoInterior', e.target.value)} />
                                        <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.NoInterior}</Form.Control.Feedback>
                                    </Col>
                                </Row>
                                <Row className="address-row">
                                    <Col lg={true}>
                                        <Form.Control className="address-input grey-input" type="text" placeholder='Estado' isInvalid={!!errors.Estado} value={form.Estado} onChange={(e) => setField('Estado', e.target.value)} />
                                        <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.Estado}</Form.Control.Feedback>
                                    </Col>
                                    <Col lg={true}>
                                        <Form.Control className="address-input grey-input" type="text" placeholder='Municipio' isInvalid={!!errors.Municipio} value={form.Municipio} onChange={(e) => setField('Municipio', e.target.value)} />
                                        <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.Municipio}</Form.Control.Feedback>
                                    </Col>
                                </Row>
                            </>
                        }
                    </fieldset>
                </>
                :
                <>
                    <fieldset>
                        <Row className="address-row">
                            <Col lg={true}>
                                <Form.Control className="address-input grey-input" type="text" placeholder='Calle' isInvalid={!!errors.Calle} value={form.Calle} onChange={(e) => setField('Calle', e.target.value)} />
                                <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.Calle}</Form.Control.Feedback>
                            </Col>
                            <Col lg={true}>
                                <Form.Control className="address-input grey-input" type="text" placeholder='Colonia' isInvalid={!!errors.Colonia} value={form.Colonia} onChange={(e) => setField('Colonia', e.target.value)} />
                                <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.Colonia}</Form.Control.Feedback>
                            </Col>
                        </Row>
                        <Row className="address-row">
                            <Col lg={true}>
                                <Form.Control className="address-input grey-input" type="text" placeholder='No. Exterior' isInvalid={!!errors.NoExterior} value={form.NoExterior} onChange={(e) => setField('NoExterior', e.target.value)} />
                                <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.NoExterior}</Form.Control.Feedback>
                            </Col>
                            <Col lg={true}>
                                <Form.Control className="address-input grey-input" type="text" placeholder='No. Interior' isInvalid={!!errors.NoInterior} value={form.NoInterior} onChange={(e) => setField('NoInterior', e.target.value)} />
                                <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.NoInterior}</Form.Control.Feedback>
                            </Col>
                        </Row>
                        <Row className="address-row">
                            <Col lg={true}>
                                <Form.Control className="address-input grey-input" type="text" placeholder='Estado' isInvalid={!!errors.Estado} value={form.Estado} onChange={(e) => setField('Estado', e.target.value)} />
                                <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.Estado}</Form.Control.Feedback>
                            </Col>
                            <Col lg={true}>
                                <Form.Control className="address-input grey-input" type="text" placeholder='Municipio' isInvalid={!!errors.Municipio} value={form.Municipio} onChange={(e) => setField('Municipio', e.target.value)} />
                                <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.Municipio}</Form.Control.Feedback>
                            </Col>
                        </Row>
                    </fieldset>
                </>
            }

        </Form.Group>
    )
}

export default DeliveryAddress