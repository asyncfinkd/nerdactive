import Actions from "actions/modules/admin";
import { NextPage } from "next";
import { AdminInputs } from "types/admin";

const Admin: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = Actions.useForm<AdminInputs>({
    resolver: Actions.yupResolver(Actions.AdminSchema),
  });
  const ErrorMessageToastify = (errors: any) => {
    Actions.toast.error(errors, { autoClose: 3000 });
  };

  Actions.useEffect(() => {
    if (errors.email) {
      ErrorMessageToastify(errors.email.message);
    } else if (errors.password) {
      ErrorMessageToastify(errors.password.message);
    }
  }, [errors]);
  return (
    <>
      <Actions.Head>
        <title>Login | Nerdactive</title>
      </Actions.Head>
      <Actions.Box
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
          <Actions.FormControl
            sx={{
              width: 300,
            }}
          >
            <Actions.TextField
              id="filled-basic"
              label="Email address"
              variant="filled"
              type="text"
              {...register("email")}
            />
            <Actions.TextField
              sx={{ marginTop: 2 }}
              id="filled-basic"
              label="Password"
              type="password"
              variant="filled"
              {...register("password")}
            />
            <Actions.Button
              variant="contained"
              type="submit"
              sx={{ marginTop: 2, height: "44px" }}
            >
              Login
            </Actions.Button>
          </Actions.FormControl>
        </form>
      </Actions.Box>
      <Actions.ToastContainer />
    </>
  );
};

export default Admin;
