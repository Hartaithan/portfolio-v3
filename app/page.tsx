import HomeSection from "@/sections/home";
import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = { title: "Home | Hartaithan." };

const Home: FC = () => <HomeSection />;

export default Home;
