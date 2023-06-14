import React from "react";
import MainHeader from "./components/mainheader";
import InventoryDetails from "./components/inventorydetails";

export default function MainContent() {
	return (
		<div className="w-full h-screen bg-slate-950 border-r-2 border-slate-800">
			<div className="max-w-screen-xl m-auto">
				<MainHeader />
				<InventoryDetails />
			</div>
		</div>
	);
}