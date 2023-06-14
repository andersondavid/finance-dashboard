import React from "react";
import MainHeader from "./components/mainheader";
import InventoryDetails from "./components/inventorydetails";

export default function MainContent() {
	return (
		<div className="w-full h-screen bg-slate-950 p-6">
			<div className="max-w-screen-xl m-auto">
				<MainHeader />
				<InventoryDetails />
			</div>
		</div>
	);
}
