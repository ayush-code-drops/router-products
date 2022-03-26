import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const NavWrapper = styled.nav`
background:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
padding:17px;
margin-bottom:30px;

h1{
  color:yellow;
}
`

const StyledLink = styled(Link)`
color:white;
text-decoration:none;
padding:10px;
font-weight:bold;
font-size:15px
`
function Navbar() {
  return (
      <NavWrapper >
          <StyledLink to='/'> Home </StyledLink>
          <StyledLink to='/products'>All Products</StyledLink>
          <StyledLink to='/products/id'>Product Details</StyledLink>
         
         
    </NavWrapper>
  )
}

export default Navbar