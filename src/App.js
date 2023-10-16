import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import SearchFeed from "./Component/SearchFeed"
import Feed from "./Component/Feed"
import NavBar from "./Component/NavBar"
import ChannelDetail from "./Component/ChannelDetail"
import VideoDetail from "./Component/VideoDetail"
const App = () => {
  return(
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id'  element={<VideoDetail />} />
        <Route path='/channel/:id'  element={<ChannelDetail />} />
        <Route path='/search/:searchTerm'  element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
  )
}

export default App