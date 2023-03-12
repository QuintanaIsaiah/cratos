import { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Main from '../Main/index';
//import Main from './Main';
//import { useHistory } from "react-router-dom";

const Login = ({onLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [completado, setCompletado] = useState("");
  const [error, setError] = useState("");

  const [showMain, setShowMain] = useState(false);

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  //const history = useHistory();


  const hideAlerts = () => {
    setTimeout(() => {
      setError("");
      setCompletado("");
    }, 5000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Por favor, complete todos los campos.");
      hideAlerts();
      return;
    }

    console.log(password);

    // Peticion al servidor
    await fetch("http://localhost:2000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((response) => {
      if (response.ok) {
        // La respuesta es correcta, se redirecciona al main
        console.log("OK");
        setCompletado("Inicio de sesion completado correctamente");
        setShowMain(true);
      } else {
        throw new Error("Inicio de sesión incorrecto, vuelva a intentarlo.");
      }
    }).catch((error) => {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    });
  };

  if (showMain) {
    return <Main />
  }

  return (
    <>
      {error && (
        <Alert color="danger" className="alert-fixed">
          {error}
        </Alert>
      )}
      {completado && <Alert color="success" className="alert-fixed">{completado}</Alert>}
      <Form onSubmit={handleSubmit} className="formulario">
        <h1>Iniciar sesión</h1>
        <FormGroup>
          <Label for="email">Correo Electrónico</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Contraseña</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Iniciar sesión
        </Button>
      </Form>
      {/* {showMain && <Main />} */}
    </>
  );
};

export default Login;
