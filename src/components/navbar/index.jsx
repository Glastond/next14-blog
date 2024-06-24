import React from "react";
import Links from "./links";

import styles from "./navbar.module.css";
import Link from "next/link";
import { auth } from "../../lib/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/">Logo</Link>
      <Links session = {session}/>
    </div>
  );
};

export default Navbar;
