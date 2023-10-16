import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  console.log(videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <>
      <Box minHeight={"95vh"}>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
            height: "300px",
            zIndex: "10",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-106px" />
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }}/>
          <Videos videos={videos} />
        
      </Box>
      </Box>
    </>
  );
};

export default ChannelDetail;
