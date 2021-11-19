import React from "react";
import { Box, Card, Typography, CardContent, Paper } from "@mui/material";

const styles = {
  contact: {
    display: "flex",
    alignItems: "center",
  },
};

const Displayer = ({ value, variant }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      marginLeft: "8px",
      marginBottom: "2px",
    }}
  >
    {variant == "a" ? (
      <a href={variant} target="_blank">
        {value}
      </a>
    ) : (
      <Typography component="div" variant={variant}>
        {value}
      </Typography>
    )}
  </Box>
);

export default function ContactCard({
  name,
  title,
  subtitle,
  place,
  email,
  image,
  page,
  sx,
}) {
  return (
    <Card sx={{ ...styles.contact, ...sx }}>
      {image && (
        <Box component="figure" sx={{ height: "200px", width: "150px" }}>
          <img height="100%" src={image} />
        </Box>
      )}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          justifyContent: "center",
        }}
      >
        {title && <Displayer value={title} variant="h5" />}
        {name && <Displayer value={name} />}
        {subtitle && <Displayer value={subtitle} />}
        {place && <Displayer value={place} />}
        {email && <Displayer value={email} />}
        {page && <Displayer value={page} variant="a" />}
      </CardContent>
    </Card>
  );
}
