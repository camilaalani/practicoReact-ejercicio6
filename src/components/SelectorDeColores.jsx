import React, { useState } from 'react';
import { Container, Form, Card, Button, Alert } from 'react-bootstrap';
import ListaColoresGuardados from "./ListaColoresGuardados";


const SelectorDeColores = () => {

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
            <ListaColoresGuardados ></ListaColoresGuardados>
        </section>
        </Container>
    );
};

export default SelectorDeColores;