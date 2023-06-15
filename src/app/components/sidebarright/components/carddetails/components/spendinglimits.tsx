import React from "react";

export default function SpendingLimits() {
	return (
		<div className="p-4">
			<h3>Spending limits</h3>
			<div className="relative py-3">
				<div className="absolute w-full h-3 bg-slate-700 rounded-full"></div>
				<div className="absolute w-2/3 h-3 bg-blue-500 rounded-full"></div>
			</div>
			<div className="flex justify-between">
				<p className="text-xs py-2">$660 spend of $1000</p>
				<p className="text-xs py-2">66%</p>
			</div>
		</div>
	);
}
