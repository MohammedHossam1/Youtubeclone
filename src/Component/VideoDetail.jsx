import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";

const VideoDetail = () => {
  let [videoDetail, setVideoDetail] = useState(null);
  let [videos, setVideos] = useState(null);
  
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) =>setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}`)
    .then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";
  const {
    snippet: { channelId, title, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex="1">
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />

            <Typography
              pt={2}
              pl={2}
              color="#FFF"
              variant="h4"
              fontWeight="bold"
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#FFF" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#FFF"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ color: "gray", ml: "5px", fontSize: "12px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: "0.7" }}>
                  {parseInt(viewCount).toLocaleString()} view
                </Typography>
                <Typography variant="body1" sx={{ opacity: "0.7" }}>
                  {parseInt(likeCount).toLocaleString()} like
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      <Box px={2} py={{md:1,xm:5}} justifyContent='center' alignItems='center'>
        {videos!=null?  <Videos videos={videos} direction='column' />:'Loading...'}
      
      </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
