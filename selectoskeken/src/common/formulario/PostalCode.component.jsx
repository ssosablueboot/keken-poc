import React, { useState } from 'react'
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import ServicioCodigoPostal from '../../services/ServicioCodigoPostal'

import './formularios.css'
import '../../App.css'
import '../../index.css'

function PostalCode() {

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })

        if (!!errors) {
            setErrors({
                ...errors,
                [field]: null,
            })
        }
    }

    const validateForm = () => {
        const { CodigoPostal } = form
        const newErrors = {}
        if (!CodigoPostal || CodigoPostal === '') {
            newErrors.CodigoPostal = 'Por favor ingrese su código postal.'
        } else {
            const existeCodigo = ServicioCodigoPostal.getCodigo(CodigoPostal);
            if (!existeCodigo.data){
                newErrors.CodigoPostal = 'El código postal ingresado está fuera de alcance.'
            }
        }
        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formErrors = validateForm()

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
        } else {

        }
    }

    return (
        <Stack className="cp-main-container" direction='horizontal' gap={2}>
            <Stack className="cp-input-container">
                <Form.Control type="text" className="validate-input golden-input" placeholder="Código Postal" isInvalid={!!errors.CodigoPostal} value={form.CodigoPostal} onChange={(e) => setField('CodigoPostal', e.target.value)} />
                <Form.Control.Feedback className="input-feedback" type='invalid'>{errors.CodigoPostal}</Form.Control.Feedback>
            </Stack>
            <button className='btn-dorado validate-btn' onClick={(e) => handleSubmit(e)}>Validar</button>
        </Stack>
    )
}

export default PostalCode