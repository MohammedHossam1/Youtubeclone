import React from 'react'

import {Stack} from "@mui/material"
import {Link} from 'react-router-dom'
import logo from "../amboba.png"
import SearchBar from './SearchBar'
const NavBar = () => {
  return (
    <Stack 

    alignItems="center"
    p={2}
sx={{positon:'sticky' ,backgroundColor:'#000',top:0,justifyContent:'space-between', flexDirection:{md:'column'}
}}
    >
<Link to='/' style={{display:"flex",alignItems:'center',margin:10} } ClassName='ic'>
  <img src={logo} alt="logo" width={200} />
  </Link>      
<SearchBar/>
    </Stack>
  )
}

export default NavBar