import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, CloseButton, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { deleteTodos, getTodos, putTodos } from "./todo";

let nextId = 0;

export const Todo = () => {

  const [label, setLabel] = useState('');
  const [lista, setLista] = useState([]);
  const [ocultarX, setOcultarX] = useState(null);

  const añadirLista = () => {
    if (label.trim() !== "") {
      putTodos(label).then(listaApi => {
      setLista(listaApi)
    })
      setLabel('');
    }
  };

  const pulsarEnter = (e) => {
    if (e.key === "Enter") {
      añadirLista();
    }
  };

  const eliminarLista = (id) => {
    deleteTodos(id).then(listaApi => {
      setLista(listaApi)
    })
  }

  useEffect(() => {
    getTodos().then(listaApi => {
      setLista(listaApi)
    })
  }, []);

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
                  value={label}
                  onChange={e => setLabel(e.target.value)}
                  onKeyDown={pulsarEnter}
                  placeholder="Escribe la label"
                />
                {
                  lista.length === 0 && (
                    <p className="text-center">No tasks, add a task</p>
                  )
                }
                {lista.map(e => (
                  <div key={e.id} className="label d-flex align-items-center justify-content-between w-100"
                    onMouseEnter={() => setOcultarX(e.id)}
                    onMouseLeave={() => setOcultarX(null)}
                  >
                    <span>{e.label}</span>
                    {
                      ocultarX === e.id && (
                        <CloseButton className="ms-3" onClick={() => eliminarLista(e.id)}></CloseButton>
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
