import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";


export const Login = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Senha" variant="outlined" />
        </CardContent>
      </Card>
    </div>
  );
};
