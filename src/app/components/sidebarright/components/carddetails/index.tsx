import React from "react";
import HeaderCardDetails from "./components/headercarddetails";
import NumberCardDetails from "./components/numberscarddetails";
import SpendingLimits from "./components/spendinglimits";

export default function CardDetails() {
	return (
		<div className="border-2 border-slate-800 rounded-2xl w-max">
			<HeaderCardDetails />
			<div className="p-12 py-8">
				<div className="bg-green-200 w-36 h-48 rounded-3xl"></div>
			</div>
			<NumberCardDetails />
			<hr className="border-t-2 border-slate-800 m-4" />
			<SpendingLimits />
		</div>
	);
}
