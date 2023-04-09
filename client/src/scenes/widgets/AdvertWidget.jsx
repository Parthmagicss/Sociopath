import React from "react";
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Sponsored</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/myself.jpg"
                style={{borderRadius: "0.75rem", margin: "0.75rem 0"}}
            />
            <FlexBetween>
                <Typography color={main}>Parthib's Insta</Typography>
                <Typography color={medium}>parthib.banerjee</Typography>
            </FlexBetween>
            <Typography color = {medium} m="0.5rem 0">
                Follow Parthib on Instagram to know more about him and see his developer journey along his Daily life.
                You can also Check him out in his GitHub for more such cool projects and also in LinkedIn to stay connected.
            </Typography>
        </WidgetWrapper>
    );
};

export default AdvertWidget;