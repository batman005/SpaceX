import { useEffect, useRef } from "react";
import FooterTab from "../components/FooterTab/FooterTab";
import Navbar from "../components/Navbar/Navbar";
import {  LaunchesCard } from "../components/Launches/LaunchesCard";
export default function Launches() {
  const mountedRef = useRef(true);

  useEffect(() => {
    // title update
    document.title = "Categories";
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return (
    <div>
      <Navbar />
      <h1 style={{ marginTop: "5rem", fontWeight: "100" }}>Launches</h1>
      <LaunchesCard />
      <FooterTab />
    </div>
  );
}
