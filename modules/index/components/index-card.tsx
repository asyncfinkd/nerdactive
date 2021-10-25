import React from "react";

export default function IndexCard() {
  return (
    <>
      <main>
        <article>
          <header>
            <h3
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1.75rem",
                marginBottom: "0.4375rem",
              }}
            >
              <a
                style={{ boxShadow: "none" }}
                rel="bookmark"
                href="/npm-audit-broken-by-design/"
              >
                npm audit: Broken by Design
              </a>
            </h3>
            <small style={{ fontFamily: "sans-serif" }}>
              July 7, 2021 • ☕️☕️☕️ 14 min read
            </small>
          </header>
          <p style={{ fontFamily: "sans-serif" }}>
            Found 99 vulnerabilities (84 moderately irrelevant, 15 highly
            irrelevant)
          </p>
        </article>
      </main>
    </>
  );
}
