import React from 'react'
// import Container from '@material-ui/core/Container'
import { Route } from 'react-router-dom'
import SubNav from '../SubNav/SubNav'
// import Link from '@material-ui/core/Link'
import {NavMidDiv, NavImg, P, StyledLink, NavTopDiv, NavBottomDiv} from './NavWrapperStyle'


const NavWrapper = (props) =>
{
    const {linkList} = props

    if (!linkList) return (<div>Loading...</div>)

    return (
        <div>
            <NavTopDiv>
                <h1>Eli's Lambda School Notes</h1>
            </NavTopDiv>
            <NavMidDiv>
                {linkList.map(link => 
                <StyledLink key={link.id} to={`/${link.id}`}>
                    <NavImg src={require(`../../icons/${link.src}`)} alt={`a`} />
                    <P>{link.name}</P>
                </StyledLink>)}
            </NavMidDiv>
            
            
            <Route path={`/:id`} render={props => <SubNav {...props} linkList={linkList} />} />
            
        </div>
    )
}


export default NavWrapper