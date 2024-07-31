import React from 'react';
import {Container, Table} from 'reactstrap';
import Chemical from '../chemical/ChemicalItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteChemical, addChemical, updateChemical } from '../../redux/chemicalSlice';
import Add from '../Add/AddChemical';
import AddChemical from '../Add/AddChemical';
import ChemicalItem from '../chemical/ChemicalItem';
import SearchChemical from '../SearchChemical/SearchChemical';
export default function Chemicals() {
    const chemical = useSelector(state => state.chemicals.chemicals)
    const dispatch = useDispatch();
    

    // Function handler
    const handle_deleteChemical = (id) => {
        dispatch(deleteChemical(id))
    }

    const handle_addChemical = (dataChemical) => {
        let findLastId = chemical.length > 0 ? 
                        chemical.reduce((total, item) => {
                            return Math.max(total, item.id)
                        }, -Infinity) +1 : 1

        const { name, formula } = dataChemical
        dispatch(addChemical({
            id: findLastId,
            name: name,
            formula: formula
        }))
    }

    const handle_updateChemical = (dataChemical) => {
        dispatch(updateChemical(dataChemical))
    }

  return (
    <Container className="text-center mt-5">
      <h1>Chemical App</h1>
      <SearchChemical/>
      <AddChemical handle_addChemical={handle_addChemical}/>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Formula</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                chemical && chemical.map((item, index) => (
                    <ChemicalItem chemical={item} key={index} handle_updateChemical={handle_updateChemical}  handle_deleteChemical={handle_deleteChemical}/>
                ))
            }
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}
