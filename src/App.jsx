import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { CloseButton, Col, Container, Row } from "react-bootstrap";
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
            <h1>Escultores inspiradores:</h1>
            <input
              value={frase}
              onChange={e => setFrase(e.target.value)}
              onKeyDown={pulsarEnter}
            />
          </Col>
        </Row>
        <Row>
          <Col>
              {lista.map(e => (
                <div><p key={e.id}>{e.frase}</p>
                <CloseButton onClick={() => eliminarLista(e.id)}></CloseButton></div>
              ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};
