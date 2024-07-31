import React, { useState } from 'react';
import { Button, Input } from 'reactstrap';
import { updateChemical } from '../../redux/chemicalSlice';
import EditChemical from '../EditChemical/EditChemical';

export default function ChemicalItem(props) {
    const {chemical, handle_updateChemical ,handle_deleteChemical} = props
    const [isEditName, setIsEditName] = useState(false)
    const [name, setName] = useState('')
    const [isEditFormula, setIsEditFormula] = useState(false)
    const [formula, setFormula] = useState('')

    const [modal, setModal] = useState(false)

    const toggle = () => {
        setModal(!modal)
    }


  return (
    <tr>
      <th scope="row">{chemical.id}</th>
      <td>{
        isEditName?
          <Input value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => {
            if(e.key === "Enter") {
              if(name === "") {
                alert("Please input chemical name")
                
              }
              else {
                 handle_updateChemical({
                    id: chemical.id,
                    name: name,
                    formula: chemical.formula
                 })
                 setIsEditName(false)
              }
            }
          }}/>:
         <p onDoubleClick={() => {
          setIsEditName(true)
          setName(chemical.name)
         }}>{chemical.name}</p>
      }</td>
      <td>{
        isEditFormula?
        <Input value={formula} onChange={(e) => setFormula(e.target.value)} onKeyDown={(e) => {
          if(e.key === "Enter") {
            if(formula === "") {
              alert("Please fill formula")
            }
            else {
              handle_updateChemical({
                id: chemical.id,
                name: chemical.name,
                formula: formula
              })
                setIsEditFormula(false)
            }
          }
        }}/>: 
        <p onDoubleClick={() => {
          setIsEditFormula(true)
          setFormula(chemical.formula)
        }}>{chemical.formula}</p>
      }</td>
      <td>
            <Button className='btn btn-warning' onClick={() => {
                handle_deleteChemical(chemical.id)
            }}>
                Delete
            </Button>
            <EditChemical chemical={chemical} handle_updateChemical={handle_updateChemical}/>
      </td>
    </tr>
  );
}
