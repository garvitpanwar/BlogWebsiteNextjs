import Link from "next/link";

import classes from "./main-navigation.module.css";
import Logo from "./logo";

function MainNavigation() {
  return (
    <header
      style={{
        position: "absolute",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginRight: 250,
          marginLeft: 250,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Link href="/">
            <Logo />
          </Link>
          <ul style={{ listStyle: "none", display: "flex", gap: 15 }}>
            <li>
              <Link href="/posts" style={{ color: "black", fontSize: 14 }}>
                Posts
              </Link>
            </li>
            <li style={{ color: "white" }}>
              <Link href="/contact" style={{ color: "black", fontSize: 14 }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul style={{ listStyle: "none", display: "flex", gap: 15 }}>
            <li style={{ color: "white" }}>
              <Link
                href="/"
                style={{
                  color: "black",
                  fontSize: 14,
                  backgroundColor: "white",
                  padding: 6,
                  borderRadius: 8,
                }}
              >
                Subscribe
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;
