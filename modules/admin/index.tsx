import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { Button, FormControl, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { AdminInputs } from "types/admin";
import { useForm } from "react-hook-form";
import { AdminSchema } from "schema/admin";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";

const Admin: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<AdminInputs>({ resolver: yupResolver(AdminSchema) });
  const ErrorMessageToastify = (errors: any) => {
    toast.error(errors, { autoClose: 3000 });
  };

  useEffect(() => {
    if (errors.email) {
      ErrorMessageToastify(errors.email.message);
    } else if (errors.password) {
      ErrorMessageToastify(errors.password.message);
    }
  }, [errors]);
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
        <form
          onSubmit={handleSubmit((data: AdminInputs) => {
            console.log(data);
          })}
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
              {...register("email")}
            />
            <TextField
              sx={{ marginTop: 2 }}
              id="filled-basic"
              label="Password"
              type="password"
              variant="filled"
              {...register("password")}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ marginTop: 2, height: "44px" }}
            >
              Login
            </Button>
          </FormControl>
        </form>
      </Box>
      <ToastContainer />
    </>
  );
};

export default Admin;
