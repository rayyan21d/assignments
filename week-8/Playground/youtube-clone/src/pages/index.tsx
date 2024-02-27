import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { VideoCard } from "@/components/VideoCard";
import App from "./_app";
import { VideoGrid } from "../components/VideoGrid";
import { Appbar } from "../components/Appbar";

export default function Home() {
  return (
    <>
      This is a Youtube Clone
      <Appbar />
      <div className="grid"></div>
      <VideoGrid />
      Some more text below...
    </>
  );
}
