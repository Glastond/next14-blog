"use client";

import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "../navLink";
import Image from "next/image";
import { handleLogout } from "../../../lib/actions";
import { auth } from "../../../lib/auth";

const navLinks = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/contact", title: "Contact" },
  { href: "/blog", title: "Blog" },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

console.log({session});
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {navLinks.map((el) => (
          <NavLink item={el} key={el.href} />
        ))}
        {session?.user ? (
          <>
            {session.user.isAdmin && (
              <NavLink item={{ href: "/admin", title: "Admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink
            className={styles.logout}
            item={{ href: "/login", title: "Login" }}
          />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <NavLink
              item={link}
              key={link.href}
              handleClick={() => setOpen((prev) => !prev)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
