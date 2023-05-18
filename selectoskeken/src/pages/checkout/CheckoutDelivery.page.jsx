import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { Stack, Breadcrumb, BreadcrumbItem, Row, Col } from 'react-bootstrap';
import HeroBanner from '../../common/hero-banner.common'
import HeroBannerImg from '../../images/checkout/HeroBannerImg.png'

//--------------- Componentes ---------------
import DeliveryAddress from '../../common/formulario/DeliveryAddress'
import DeliveryDateTime from '../../common/formulario/DeliveryDateTime'
import DeliveryContact from '../../common/formulario/DeliveryContact'
import CartOverview from './CartOverview.component'
// ------------------------------------------------------------------

import './Checkout.page.css'
import '../../index.css'
import '../../App.css'
import '../../common/formulario/formularios.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function CheckoutDelivery() {

  const logged = useSelector((state) => state.logged)

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
    const { CodigoPostal, Calle, Colonia, NoExterior, NoInterior, Estado, Municipio, FechaEntrega, HoraEntrega, NombreEntrega, DireccionEntrega, EmailEntrega, TelEntrega } = form
    const newErrors = {}
    if (!CodigoPostal || CodigoPostal === '') newErrors.CodigoPostal = 'Por favor ingrese su código postal.'
    if (!Calle || Calle === '') newErrors.Calle = 'Ingrese el nombre de la calle.'
    if (!Colonia || Colonia === '') newErrors.Colonia = 'Ingrese el nombre de una colonia.'
    if (!NoExterior || NoExterior === '') newErrors.NoExterior = 'Ingrese su No. Exterior.'
    if (!NoInterior || NoInterior === '') newErrors.NoInterior = 'Ingrese su No. Interior.'
    if (!Estado || Estado === '') newErrors.Estado = 'Ingrese el nombre de su estado.'
    if (!Municipio || Municipio === '') newErrors.Municipio = 'Ingrese el nombre de su municipio.'
    if (!FechaEntrega || FechaEntrega === '') newErrors.FechaEntrega = 'Seleccione una fecha de entrega..'
    if (!HoraEntrega || HoraEntrega === '') newErrors.HoraEntrega = 'Ingrese un horario para su entrega.'
    if (!NombreEntrega || NombreEntrega === '') newErrors.NombreEntrega = 'Ingrese el nombre de la persona que recibirá el paquete.'
    if (!DireccionEntrega || DireccionEntrega === '') newErrors.DireccionEntrega = 'Ingrese una dirección de entrega válida.'
    if (!EmailEntrega || EmailEntrega === '') newErrors.EmailEntrega = 'Ingrese una dirección de e-mail válido.'
    if (!TelEntrega || TelEntrega === '') newErrors.TelEntrega = 'Ingrese un número de teléfono del contacto que recibirá la entrega.'
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

  const props = {form, setForm, errors, setErrors, handleSubmit, validateForm, setField}
  return (
    <div className="checkout" >
      <div className="checkout-banner">
        <HeroBanner title='Información de entrega' subtitle='Conoce nuestra variedad de cortes selectos de cerdo' backgroundImg={HeroBannerImg}></HeroBanner>
      </div>
      <section className="gradient-bg">
        <Stack className='container checkout-body'>
          <Breadcrumb>
            <BreadcrumbItem active href='/checkout'>Datos de entrega</BreadcrumbItem>
            <BreadcrumbItem href='/checkout/payment'>Proceso de pago</BreadcrumbItem>
          </Breadcrumb>
          {logged ?
            <>
              {/* Acá se renderiza el formulario de entrega si el usuario NO esta logeado */}
              <Stack className="form-container">
                <CartOverview total='Total: $600.00' cardsEnabled={true} />
                <Stack>
                  <DeliveryAddress
                    propiedades={{errors, setErrors, form, setForm, validateForm, handleSubmit, setField}}
                    setField={setField}
                    title='Dirección'
                    subtitle='Selecciona la dirección.' />
                </Stack>

                <Stack className="delivery-info">
                  <DeliveryDateTime
                    propiedades={{errors, setErrors, form, setForm, validateForm, handleSubmit, setField}}
                    title='Información de entrega'
                    subtitle='Seleccione fecha y hora de tu entrega.' />
                </Stack>
                <Stack className="contact-info">
                  <DeliveryContact
                    propiedades={{errors, setErrors, form, setForm, validateForm, handleSubmit, setField}}
                    title='Información de contacto'
                    subtitle='Información del comprador' />
                </Stack>
                <Row>
                  <Col lg={true}><button className="btn-dorado btn-submit" onClick={(e) => handleSubmit(e)}>Confirmar pedido</button></Col>
                </Row>
              </Stack>
            </>
            :
            <>
              {/* Acá se renderiza el formulario de entrega si el usuario NO esta logeado */}
              <Stack className="form-container">
                <CartOverview total='Total: $600.00' cardsEnabled={true} />
                <Stack className="address">
                  <DeliveryAddress
                    propiedades={{errors, setErrors, form, setForm, validateForm, handleSubmit, setField}}
                    title='Dirección'
                    subtitle='Escribe la dirección a donde deseas que se entregue tu paquete.' />
                </Stack>
                <Stack className="delivery-info">
                  <DeliveryDateTime
                    propiedades={{errors, setErrors, form, setForm, validateForm, handleSubmit, setField}}
                    title='Información de entrega'
                    subtitle='Seleccione fecha y hora de tu entrega.' />
                </Stack>
                <Stack className="contact-info">
                  <DeliveryContact
                    propiedades={{errors, setErrors, form, setForm, validateForm, handleSubmit, setField}}
                    title='Información de contacto'
                    subtitle='Información del comprador' />
                </Stack>
                <Row>
                  <Col lg={true}><button className="btn-dorado btn-submit" onClick={(e) => handleSubmit(e)}>Confirmar pedido</button></Col>
                </Row>
              </Stack>
            </>
          }
        </Stack>
      </section>
    </div>
  )
}

export default CheckoutDelivery