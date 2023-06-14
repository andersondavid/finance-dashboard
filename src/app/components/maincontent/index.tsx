import React from "react";
import MainHeader from "./components/mainheader";
import InventoryDetails from "./components/inventorydetails";

export default function MainContent() {
	return (
		<div className="w-full h-screen bg-slate-950">
			<div className="max-w-screen-xl m-auto p-6">
				<MainHeader />
				<InventoryDetails />
			</div>
		</div>
	);
}
