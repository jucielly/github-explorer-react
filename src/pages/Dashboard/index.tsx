import React, { useState } from 'react';
import LogoImg from '../../assets/Logo.svg';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from "react-icons/fi";


const Dashboard: React.FC = () => {


    return (
        <>
            <img src={LogoImg} alt="logo" />
            <Title>Explore Repositorios no Github</Title>

            <Form>
                <input placeholder="pesquisar repositorio" />
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                <a href="#">
                    <div className="container">
                        <img src="https://avatars1.githubusercontent.com/u/36751273?s=460&u=9c60260daea5ae5cc3880f0d8632c0065971827d&v=4" />
                        <div className="info">
                            <strong>Repository</strong>
                            <p>description description</p>
                        </div>
                    </div>
                    <FiChevronRight />
                </a>
            </Repositories>
        </>
    )
};

export default Dashboard;
