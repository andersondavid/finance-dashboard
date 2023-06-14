import React from "react";
import HeaderSideBarRight from "./components/headersidebarright";
import CardDetails from "./components/carddetails";

export default function SideBarRight() {
	return (
		<div className="h-screen w-min bg-slate-950">
			<HeaderSideBarRight />
			<CardDetails />
		</div>
	);
}
