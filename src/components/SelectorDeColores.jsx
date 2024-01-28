import React, { useState } from 'react';
import { Container, Form, Card, Button, Alert } from 'react-bootstrap';
import ListaColoresGuardados from "./ListaColoresGuardados";

const nombresColores = {
    azul: '#0000FF',
    rojo: '#FF0000',
    verde: '#008000',
    rosa: "#FF689D",
    amarillo: "#FFFB00",
    naranja: "#FF8000",
    morado: "#7000FF",
    marron: "#553D13",
    blanco: "#FFFFFF",
    negro: "#000000",
    celeste: "#00A6FF",
    gris: "#9E9E9E",
  };


const SelectorDeColores = () => {
    const [nombreColor, setNombreColor] = useState('');
  const [coloresGuardados, setColoresGuardados] = useState(
    JSON.parse(localStorage.getItem('coloresGuardados')) || []
  );
  const [mensajeError, setMensajeError] = useState(''); 

  const manejarCambioDeColor = (e) => {
    setMensajeError('');

    const valorInput = e.target.value.toLowerCase();
    setNombreColor(valorInput);
  };

  const manejarGuardarColor = () => {
    if (!/^[a-zA-Z]+$/.test(nombreColor)) {
      setMensajeError('Por favor, ingresa solo letras para el nombre del color.');
      return;
    }

    if (nombreColor.length < 2 || nombreColor.length > 15) {
      setMensajeError('Por favor, ingresa un color con más de una letra y menos de 15 letras.');
      return;
    }

    const codigoColor = nombresColores[nombreColor];

    if (!codigoColor) {
      setMensajeError('El color ingresado no está disponible.');
      return;
    }

    const nuevoColor = {
      nombre: nombreColor,
      codigo: codigoColor,
    };

    const nuevosColoresGuardados = [...coloresGuardados, nuevoColor];
    localStorage.setItem('coloresGuardados', JSON.stringify(nuevosColoresGuardados));
    setColoresGuardados(nuevosColoresGuardados);

    setNombreColor('');
  };

  const manejarBorrarColor = (nombre) => {
    const nuevosColoresGuardados = coloresGuardados.filter(
      (color) => color.nombre !== nombre
    );

    localStorage.setItem('coloresGuardados', JSON.stringify(nuevosColoresGuardados));
    setColoresGuardados(nuevosColoresGuardados);
  };

  const manejarKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      manejarGuardarColor();
    }
  };
  
    return (
        <Container className="mt-5">
            <Card>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-center">Administrar Colores</Card.Title>
          <Form className="w-100">
   <Form.Group controlId="colorPersonalizado" className="mb-2">
     <Form.Label>Ingrese un color:</Form.Label>
     <Form.Control
       type="text"
       placeholder="por ejemplo, azul, rojo, verde"
       value={nombreColor}
       onChange={manejarCambioDeColor}
       onKeyPress={manejarKeyPress}
     />
   </Form.Group>
   <Button
     variant="primary"
     type="button"
     className="mt-2 align-self-end"
     onClick={manejarGuardarColor}
   >
     Guardar
   </Button>
</Form>
{mensajeError && <Alert variant="danger" className="mt-2 mb-2">{mensajeError}</Alert>}
        </Card.Body>
      </Card>
        <section className="d-flex flex-wrap mt-3">
            <ListaColoresGuardados></ListaColoresGuardados>
        </section>
        </Container>
    );
};

export default SelectorDeColores;