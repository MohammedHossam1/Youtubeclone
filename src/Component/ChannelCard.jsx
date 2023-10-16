import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channelDetail,marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "320px",
        margin: "auto",
        marginTop
      }}
    >
      <Link to={`channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFF",
            textAlign: "center",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails.high?.url || demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: "18px", color: "gray", ml: "5px" }} />
          </Typography>

          {channelDetail?.statistics?.subscriberCount && (
            <Typography
              variant=""
              sx={{ display: "flex", alignItems: "center" ,color:'gray'}}
            >
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>

          )}
          
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
