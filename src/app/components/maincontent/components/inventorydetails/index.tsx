import React from "react";
import YourBalance from "./yourbalance";
import HeaderInventoryDetails from "./headerinventorydetails";
import HeaderMainCards from "./headermaincards";
import CardsList from "./cardslist";

export default function InventoryDetails() {
	return (
		<div className="border-2 border-slate-800 rounded-2xl">
			<HeaderInventoryDetails />
			<YourBalance />
			<HeaderMainCards />
			<CardsList />
		</div>
	);
}
