import React from 'react'
import { Container } from '@mui/material'
import CustomerCreate from './components/CustomerCreate';
import ProductCreate from './components/ProductCreate';





const Create = () => {
  return (
    <Container>
      <React.Fragment>
        <CustomerCreate />
        <ProductCreate />
      </React.Fragment>
    </Container>
  )
}

export default Create