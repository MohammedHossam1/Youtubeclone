import React, { useState } from 'react'
import { Paper,IconButton } from '@mui/material'
import {Search} from '@mui/icons-material'
import { Form, useNavigate } from 'react-router-dom'
const SearchBar = () => {
  let navigate =useNavigate()
  const [searchTerm, setSearchTerm] = useState('');
const handlesubmit=(e)=>{
e.preventDefault()
if(searchTerm){
  navigate(`/search/${searchTerm}`)
  setSearchTerm('')
}
}
  return (
    <Paper component='form'
    onSubmit={handlesubmit}
sx={{borderRadius:20,border:'1px solid #e3e3e3',boxShadow:'none',pl:2,mr:{sm:5 }}}
    
    
    >
<input className='search-bar' placeholder='Search ...' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
<IconButton type='submit' sx={{p:'10px',color:'red'}}>
     <Search/>
</IconButton>

    </Paper>
  )
}

export default SearchBar