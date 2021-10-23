import React from "react";

export default function SubHeader() {
  return (
    <>
      <aside>
        <div style={{ display: "flex", marginBottom: "3.5rem" }}>
          <img
            src="https://avatars.githubusercontent.com/u/80542304?v=4"
            alt="Dan Abramov"
            style={{
              marginRight: "0.875rem",
              marginBottom: "0",
              width: "3.5rem",
              height: "3.5rem",
              borderRadius: "50%",
            }}
          />
          <p style={{ maxWidth: "310px", fontFamily: "system-ui" }}>
            Personal blog by{" "}
            <a href="https://github.com/asyncfinkd">Nika Shamiladze</a>.{" "}
            I&nbsp;explain with words and code.
          </p>
        </div>
      </aside>
    </>
  );
}
