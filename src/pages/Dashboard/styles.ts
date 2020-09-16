import styled from "styled-components";
import { shade } from "polished";

export const Title = styled.h1`
    font-size: 2.5em;
    font-weight: bold;
    max-width: 450px;
    line-height: 50px;
    margin-top: 50px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;

    input {
        text-align: center;
        flex: 1;
        height: 70px;
        border: none;
        border-radius: 5px 0px 0px 5px;

        &::placeholder {
            color: #a8a8a3;
        }

        &:focus {
            outline: none;
        }
    }

    button {
        width: 20%;
        height: 70px;
        background: #04d361;
        border: none;
        border-radius: 0px 5px 5px 0px;
        color: white;
        transition: 0.3s;

        &:focus {
            outline: none;
        }

        &:hover {
            background: ${shade(0.2, "#04d361")};
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 70%;

    a {
        display: flex;
        background: #fff;
        align-items: center;
        width: 100%;
        border-radius: 5px;
        padding: 10px;
        text-decoration: none;
        transition: 0.3s;

        & + a {
            margin-top: 10px;
        }

        img {
            height: 64px;
            width: 64px;
            border-radius: 50%;
            margin-right: 50px;
        }

        .container {
            display: flex;
            margin-left: 16px;

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                margin-top: 4px;
                color: #a8a8b3;
            }
        }

        svg {
            margin-left: auto;
            color: #c9c9d4;
        }

        &:hover {
            transform: translateX(10px);
        }
    }
`;
