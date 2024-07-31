import React, { useState } from 'react'
import { Button, Container, Input } from 'reactstrap'

export default function SearchChemical() {
    const [text, setText] = useState()
  return (
    <Container className='my-2 d-flex'>
        <Input placeholder='search name chemical....' className='w-50'/>
        <Button className='btn btn-success mx-2'>
            Clear filter
        </Button>
    </Container>
  )
}
