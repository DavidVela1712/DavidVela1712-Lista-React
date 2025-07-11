import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { CloseButton, Col, Container, Row} from "react-bootstrap";
import { useState } from "react";

let nextId = 0;

export const App = () => {

  const [frase, setFrase] = useState('');
  const [lista, setLista] = useState([]);

  const añadirLista = () => {
    setLista([...lista, {id: nextId++, frase}]);
    setFrase('');    
  };

  const pulsarEnter = (e) => {
    if(e.key === "Enter") {
      añadirLista();
    }
  };

  const eliminarLista = (id) => {
    setLista(lista.filter(a => a.id !== id))
  }

  return (
    <>
      <Container fluid className="d-flex flex-column justify-content-center align-items-center">
        <Row>
          <Col>
            <h1>Lista actualizada:</h1>
            <input
              className="form-control"
              value={frase}
              onChange={e => setFrase(e.target.value)}
              onKeyDown={pulsarEnter}
              placeholder="Escribe la frase"
            />
          </Col>
        </Row>
        <Row>
          <Col>
              {lista.map(e => (
                <div key={e.id} className="d-flex align-items-center justify-content-between position-relative">
                  <p>{e.frase}<CloseButton onClick={() => eliminarLista(e.id)}></CloseButton></p>
                </div>
              ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};
