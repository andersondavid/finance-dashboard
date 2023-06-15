import React from "react";
import YourBalance from "./components/yourbalance";
import HeaderInventoryDetails from "./components/headerinventorydetails";
import HeaderMainCards from "./components/headermaincards";
import CardsList from "./components/cardslist";
import CardStats from "./components/cardsstats";

export default function InventoryDetails() {
	return (
		<div className="border-2 border-slate-800 rounded-2xl">
			<HeaderInventoryDetails />
			<YourBalance />
			<HeaderMainCards />
			<CardsList />
			<CardStats />
		</div>
	);
}
