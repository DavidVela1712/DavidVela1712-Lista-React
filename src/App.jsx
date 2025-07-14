import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, CloseButton, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

let nextId = 0;

export const App = () => {

  const [frase, setFrase] = useState('');
  const [lista, setLista] = useState([]);
  const [ocultarX, setOcultarX] = useState(false);

  const añadirLista = () => {
    setLista([...lista, { id: nextId++, frase }]);
    setFrase('');
  };

  const pulsarEnter = (e) => {
    if (e.key === "Enter") {
      añadirLista();
    }
  };

  const eliminarLista = (id) => {
    setLista(lista.filter(a => a.id !== id))
  }

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={6}>
            <Card className="shadow">
              <Card.Body>
                <h1 className="text-center">Lista actualizada:</h1>
                <input
                  className="form-control w-100 mb-3"
                  value={frase}
                  onChange={e => setFrase(e.target.value)}
                  onKeyDown={pulsarEnter}
                  placeholder="Escribe la frase"
                />
                {lista.map(e => (
                  <div key={e.id} className="frase d-flex align-items-center justify-content-between w-100"
                    onMouseEnter={() => setOcultarX(true)}
                    onMouseLeave={() => setOcultarX(false)}
                  >
                    <span>{e.frase}</span>
                    {
                      ocultarX && (
                        <CloseButton className="ocultar-boton ms-3" onClick={() => eliminarLista(e.id)}></CloseButton>
                      )
                    }
                  </div>
                ))}
              </Card.Body>
              <Card.Footer className="text-muted small">{lista.length} frases</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
