import Actions from "actions/modules/index";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [showToggle, setShowToggle] = Actions.useState<any>(false);

  Actions.useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.add("light");
    }
  });
  return (
    <>
      <Actions.Head>
        <title>Nerdactive — A blog by Nika Shamiladze</title>
      </Actions.Head>
      <div
        style={{
          color: "var(--textNormal)",
          backgroundColor: "var(--bg)",
          transition: "0.2s ease-out",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "42em",
            padding: "2.625rem 1.3125rem",
          }}
        >
          <Actions.Header
            showToggle={showToggle}
            setShowToggle={setShowToggle}
          />
          <Actions.SubHeader />
          <Actions.IndexCard />
          <Actions.Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
