"use client";
import { useState } from "react";
import MainContent from "./components/maincontent";
import SideBar from "./components/sidebar";
import SideBarRight from "./components/sidebarright";

export default function Home() {
	const [sideBarOpen, setSideBarOpen] = useState(false);
	return (
		<main className="flex">
			<span
				className={`${sideBarOpen ? '' : 'hidden'} fixed h-full w-full transition-all bg-gray-900 opacity-70 z-10`}
				onClick={() => setSideBarOpen(false)}
			></span>
			<SideBar sideBarOpen={sideBarOpen} />
			<MainContent setSideBarOpen={setSideBarOpen} />
			{/* <SideBarRight /> */}
		</main>
	);
}
