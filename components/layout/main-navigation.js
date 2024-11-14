import Link from "next/link";

import classes from "./main-navigation.module.css";
import Logo from "./logo";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


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
        {/* <div>
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
        </div> */}
        <Dialog>
          <DialogTrigger>Subscribe</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <div className="text-center text-[30px] font-bold">
                  Subscribe to Our Newsletter{" "}
                </div>
              </DialogTitle>
              <DialogDescription>
                {/* This action cannot be undone. This will permanently delete your
                account and remove your data from our servers. */}
                <div className="my-10">
                  <div className="my-4 font-bold text-black">Email</div>
                  <Input type="email" placeholder="Enter Your Email" />
                </div>
                <div className="my-10">
                  <div className="my-4 font-bold text-black">Name</div>
                  <Input type="text" placeholder="Enter Your Name" />
                </div>
                <div className="flex justify-center">
                  <Button>Subscribe</Button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
</header>
  )}

export default MainNavigation;
