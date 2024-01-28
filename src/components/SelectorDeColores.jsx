import React, { useState } from 'react';
import { Container, Form, Card, Button, Alert } from 'react-bootstrap';
import ListaColoresGuardados from "./ListaColoresGuardados";


const SelectorDeColores = () => {

    return (
        <Container className="mt-5">
            <Card>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-center">Administrar Colores</Card.Title>
        </Card.Body>
      </Card>
        <section className="d-flex flex-wrap mt-3">
            <ListaColoresGuardados ></ListaColoresGuardados>
        </section>
        </Container>
    );
};

export default SelectorDeColores;