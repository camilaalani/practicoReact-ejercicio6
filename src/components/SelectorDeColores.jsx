import React, { useState } from 'react';
import { Container, Form, Card, Button, Alert } from 'react-bootstrap';
import ListaColoresGuardados from "./ListaColoresGuardados";


const SelectorDeColores = () => {
    return (
        <section>
            <ListaColoresGuardados></ListaColoresGuardados>
        </section>
    );
};

export default SelectorDeColores;