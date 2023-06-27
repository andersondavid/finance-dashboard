import React, { Dispatch } from "react";
import MainHeader from "./components/mainheader";
import InventoryDetails from "./components/inventorydetails";
import Transactions from "./components/transactions";
import { LuMenu } from "react-icons/lu";

export default function MainContent({
	setSideBarOpen,
}: {
	setSideBarOpen: Dispatch<boolean>;
}) {
	return (
		<div className="w-full bg-gray-900 p-6">
			<div className="lg:hidden fixed top-4 left-4">
				<button onClick={() => setSideBarOpen(true)}>
					<LuMenu className="w-9 h-9" />
				</button>
			</div>
			<div className="max-w-screen-xl m-auto">
				<MainHeader />
				<InventoryDetails />
				<Transactions />
			</div>
		</div>
	);
}
