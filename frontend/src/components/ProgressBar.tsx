import * as React from "react";
import CircularProgress, { CircularProgressProps } from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props: CircularProgressProps & { value: number; label: number | string }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" value={props.value} sx={{ color: "white" }} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Typography variant="caption" component="div" color="white" sx={{ fontWeight: "bold" }}>
          {props.label}
        </Typography>
      </Box>
    </Box>
  );
}

export function ProgressBar({ progress, label }: { progress: number; label: number | string }) {
  return <CircularProgressWithLabel value={progress} label={label} />;
}
