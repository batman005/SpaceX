import { useEffect, useRef } from "react";
import FooterTab from "../components/FooterTab/FooterTab";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import { LaunchCards } from "../components/LaunchCard/LaunchCard";
export default function Home() {
  const mountedRef = useRef(true);
  useEffect(() => {
    // title update
    document.title = "SpaceX Launchpads";
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <LaunchCards />
      <FooterTab />
    </div>
  );
}
