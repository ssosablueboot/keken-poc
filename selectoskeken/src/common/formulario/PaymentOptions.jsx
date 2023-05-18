import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Stack, Row, Col, Form } from 'react-bootstrap'

function PaymentOptions({ propiedades, title, subtitle }) {

  const logged = useSelector((state) => state.logged)
  const [method, setSelectedMethod] = useState('on-delivery')
  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectedMethod = (event) => {
    setSelectedMethod(event.target.value);
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <Form.Group>
      {title && <h3 className="title-h3">{title}</h3>}
      {subtitle && <p className="title-description">{subtitle}</p>}
      {logged ?
        <>
          <fieldset>
            <Stack>
              <Stack direction="horizontal" gap={5}>
                <Form.Check
                  inline
                  style={{ textAlign: 'left' }}
                  type='radio'
                  id='on-delivery-input'
                  label='Pago con entrega'
                  value='on-delivery'
                  checked={method === 'on-delivery'}
                  onChange={handleSelectedMethod}
                  name='Method'
                />
                <Form.Check
                  inline
                  style={{ textAlign: 'left' }}
                  type='radio'
                  id='on-line-input'
                  label='Pago en línea'
                  value='on-line'
                  checked={method === 'on-line'}
                  onChange={handleSelectedMethod}
                  name='Method'
                />
              </Stack>
              {
                method === 'on-delivery' ?
                  <Stack style={{ marginLeft: '2rem', padding:'.5rem 0'}} gap={1}>
                    <Form.Check
                      style={{ textAlign: 'left'}}
                      type='radio'
                      id={`${method}-cash`}
                      label='En efectivo'
                      value={`${method}-cash`}
                      checked={selectedOption === `${method}-cash`}
                      onChange={handleRadioChange}
                      name='Payment'
                    />
                    <Form.Check
                      style={{ textAlign: 'left'}}
                      type='radio'
                      id={`${method}-card`}
                      label='Con tarjeta de crédito/débito'
                      value={`${method}-card`}
                      checked={selectedOption === `${method}-card`}
                      onChange={handleRadioChange}
                      name='Payment'
                    />
                  </Stack>
                  :
                  <Stack>

                  </Stack>
              }

            </Stack>
          </fieldset>
        </>
        :
        <></>
      }
    </Form.Group>
  )
}

export default PaymentOptions