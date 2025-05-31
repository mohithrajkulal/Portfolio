"use client";
import { useRouter } from "next/navigation";
import { navButton } from "@/app/constants";
import styles from "./Components.module.scss";
import React from "react";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <div>
        <h1 className={styles.name}>Mohith Raj Kulal</h1>
      </div>
      <div>
        {navButton?.map((item, index) => (
          <React.Fragment key={index}>
            <button
              className={styles.navButton}
              onClick={() => router.push(item?.Route)}
            >
              {item?.ButtonName}
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
