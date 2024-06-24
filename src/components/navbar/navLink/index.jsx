"use client";

import React from "react";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item, handleClick }) => {
  const path = usePathname();

  return (
    <Link
      href={item.href}
      className={`${styles.container} ${path === item.href && styles.active}`}
      onClick={handleClick}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
