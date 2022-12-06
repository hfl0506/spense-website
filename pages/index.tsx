import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <div className="text-6xl text-green-700">
      hello world
      <button onClick={() => signOut()}> signout</button>
    </div>
  );
}
