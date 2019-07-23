import React from 'react'
import { Route, Link } from 'react-router-dom'
import { NavImg, P, StyledLink, NavBottomDiv} from '../NavWrapper/NavWrapperStyle'
const SubNav = (props) =>
{
    const {linkList} = props
    console.log(props.match.params.id)
    const category = linkList.find(
        category => category.id === parseInt(props.match.params.id)
    )
    return (
        <NavBottomDiv>
            {category.subLinks.map(link =>
                <StyledLink key={link.id} to={`/${link.url}`}>
                    <NavImg src={require(`../../icons/${link.src}`)} alt={`a`} />
                    <P>{link.name}</P>
                </StyledLink>
            )}
        </NavBottomDiv>
    )
}

export default SubNav
