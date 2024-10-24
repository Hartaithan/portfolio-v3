import type { Metadata } from "next";
import type { FC } from "react";
import HomeSection from "@/sections/home";

export const metadata: Metadata = { title: "Home | Hartaithan." };

const Home: FC = () => <HomeSection />;

export default Home;
