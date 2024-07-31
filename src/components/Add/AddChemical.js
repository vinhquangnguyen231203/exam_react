import React, {useState} from 'react';
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';

export default function AddChemical(props) {
  // State
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const {handle_addChemical} = props
  const [name, setName] = useState('')
  const [formula, setFormula] = useState('')

  //   Render
  return (
    <Container className="my-3 d-flex justify-content-start">
      <Button onClick={toggle}>Add New Chemical</Button>

      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add New Chemical</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="name">Chemical name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Input chemical name"
                  type="text"
                  required={true}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Chemical formula</Label>
                <Input
                  id="formula"
                  name="formula"
                  placeholder="Input formula name"
                  type="text"
                  required={true}
                  value={formula}
                  onChange={(e) => {
                    setFormula(e.target.value)
                  }}
                />
              </FormGroup>

              {/* Submit */}
              <Button type='submit' color="primary" onClick={(e) => {
                e.preventDefault()
                handle_addChemical({
                  name: name,
                  formula: formula
                })
                toggle()
                setName('')
                setFormula('')
              }}>
              Add Chemical
            </Button>{' '}
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </Container>
  );
}
