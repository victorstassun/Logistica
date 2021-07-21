import React from "react";
import { FiLogIn } from "react-icons/fi";
import Input from "../../components/input";
import { Container, Content, Background } from "./styles";

const Signin: React.FC = () => (

    <Container>
        <Content>
            <form >
                <h1> Faça seu login </h1>

                <Input name="email" placeholder="Email" />
                <Input name="senha" type="password" placeholder="Senha" />

                <button type="submit">Entrar</button>

                <a href="teste">Esqueci minha senha</a>
            </form>

            <a href="teste">
                <FiLogIn />
                Criar conta
            </a>
        </Content>
        <Background />
    </Container>
);

export default Signin;