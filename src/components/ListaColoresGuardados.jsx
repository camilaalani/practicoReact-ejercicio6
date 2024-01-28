import { Card, Button } from "react-bootstrap";

const ListaColoresGuardados = ({ coloresGuardados, manejarBorrarColor }) => {
  return (
    <>
      {coloresGuardados.map((color) => (
        <Card key={color.nombre} className="m-2">
          <Card.Body style={{ backgroundColor: color.codigo }}>
            <Card.Title>{color.nombre}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <Button
              variant="danger"
              onClick={() => manejarBorrarColor(color.nombre)}
            >
              Borrar
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </>
  );
};

export default ListaColoresGuardados;
