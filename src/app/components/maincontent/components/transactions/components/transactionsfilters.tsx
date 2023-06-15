import React from "react";

export default function TransactionsFilters() {
	return (
		<div className="flex gap-2 mx-6">
			<div className="p-2 px-4 h-11 border-2 border-gray-700 bg-gray-700 rounded-full">
				<p className="inline text-sky-100 m-0">All</p>
			</div>
			<div className="p-2 px-4 h-11 border-2 border-gray-800 rounded-full">
				<p className="inline text-sky-100 m-0">Revenses</p>
			</div>
			<div className="p-2 px-4 h-11 border-2 border-gray-800 rounded-full">
				<p className="inline text-sky-100 m-0">Expense</p>
			</div>
		</div>
	);
}