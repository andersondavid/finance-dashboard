import React, { Dispatch } from "react";
import MainHeader from "./components/mainheader";
import InventoryDetails from "./components/inventorydetails";
import Transactions from "./components/transactions";

export default function MainContent({
	setSideBarOpen,
}: {
	setSideBarOpen: Dispatch<boolean>;
}) {
	return (
		<div className="w-full bg-gray-900 p-6">
			<div className="max-w-screen-xl m-auto">
				<MainHeader setSideBarOpen={setSideBarOpen}/>
				<InventoryDetails />
				<Transactions />
			</div>
		</div>
	);
}
