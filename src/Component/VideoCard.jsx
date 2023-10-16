import React from 'react'
import { demoVideoUrl,demoChannelUrl,demoProfilePicture,demoVideoTitle,demoChannelTitle,demoThumbnailUrl } from '../utils/constants'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    <Card sx={{width:{xs:'100%',sm:'356px',md:'320px'},borderRadius:'0',boxShadow:'none'}}

    
    >
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url}
        
        sx={{width:{xs:'100%',sm:'356px',md:'320px'}}}
        />

        </Link>
<CardContent sx={{background:'#1e1e1e',height:'106px'}}>
<Link to={videoId?`/video/${videoId}`:demoVideoUrl}> 
<Typography variant= 'subtitle1' color='#FFF' fontWeight='bold' >
{snippet?.title.slice(0,60)}

</Typography>
</Link>
<Link to={snippet.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}> 
<Typography variant= 'subtitle2' color='gray' fontWeight='bold' >
{snippet?.channelTitle||demoChannelTitle}
<CheckCircle sx={{fontSize:'13px', color:'gray', ml:'5px',}}/>
</Typography>
</Link>

</CardContent>
    </Card>
  )
}

export default VideoCard