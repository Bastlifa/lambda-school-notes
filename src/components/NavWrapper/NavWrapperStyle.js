import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavMidDiv = styled.div`
    background-color: black;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin-top: -22px;
`;

export const NavImg = styled.img`
    padding-top: 15px;
`;

export const P = styled.p`
    color: white;

`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const NavTopDiv = styled.div`
    margin-top: -22px;
    background-color: #333333;
    color: white;
`;

export const NavBottomDiv = styled.div`
    background-color: #1a1a1a;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin-top: -22px;
    color: white;
`;