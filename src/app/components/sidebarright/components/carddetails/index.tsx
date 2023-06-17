import React from "react";
import HeaderCardDetails from "./components/headercarddetails";
import NumberCardDetails from "./components/numberscarddetails";
import SpendingLimits from "./components/spendinglimits";
import Card from "@/app/components/gerenic/card";

export default function CardDetails() {
	return (
		<div className="border-2 border-gray-800 rounded-2xl w-max">
			<HeaderCardDetails />
			<div className="py-14 px-2">
				<div className="rotate-90">
					<Card />
				</div>
			</div>
			<NumberCardDetails />
			<hr className="border-t-2 border-gray-800 m-4" />
			<SpendingLimits />
		</div>
	);
}
