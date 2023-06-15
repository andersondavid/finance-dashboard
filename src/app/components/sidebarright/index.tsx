import React from "react";
import HeaderSideBarRight from "./components/headersidebarright";
import CardDetails from "./components/carddetails";

export default function SideBarRight() {
	return (
		<div className="w-min bg-slate-950 p-6 pl-0">
			<HeaderSideBarRight />
			<CardDetails />
		</div>
	);
}
