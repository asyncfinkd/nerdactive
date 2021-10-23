import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Button, FormControl, TextField } from "@mui/material";
import Box from "@mui/material/Box";

const Admin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login | Nerdactive</title>
      </Head>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <FormControl
          sx={{
            width: 300,
          }}
        >
          <TextField
            id="filled-basic"
            label="Email address"
            variant="filled"
            type="text"
          />
          <TextField
            sx={{ marginTop: 2 }}
            id="filled-basic"
            label="Password"
            type="password"
            variant="filled"
          />
          <Button variant="contained" sx={{ marginTop: 2, height: "44px" }}>
            Login
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Admin;
