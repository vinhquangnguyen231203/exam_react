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
import { updateChemical } from '../../redux/chemicalSlice';

export default function EditChemical(props) {
    const [modal, setModal] = useState(false)
    const [name, setName] = useState('')
    const [formula, setFormula] = useState('')

    const {chemical, handle_updateChemical} = props

    const toggle = () => {
        setModal(!modal)
        setName(chemical.name)
        setFormula(chemical.formula)
    }
  return (
    <div className='mt-2'>
      <Button className="btn mx-2" color="primary" onClick={toggle}>
        Update
      </Button>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Update Chemical</ModalHeader>
          <ModalBody>
          <Form>
              <FormGroup>
                <Label for="name_edit">Chemical name</Label>
                <Input
                  id="name_edit"
                  name="name"
                  placeholder="Input chemical name"
                  type="text"
                  required={true}
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Chemical formula</Label>
                <Input
                  id="formula_edit"
                  name="formula"
                  placeholder="Input formula name"
                  type="text"
                  value={formula}
                  onChange={(e) => setFormula(e.target.value)}
                  required={true}
                />
              </FormGroup>

              {/* Submit */}
              <Button type='submit' color="primary" onClick={(e) => {
                e.preventDefault()
                handle_updateChemical({
                    id: chemical.id,
                    name: name,
                    formula: formula
                })
                toggle()
              }}>
              Update Chemical
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
    </div>
  );
}
