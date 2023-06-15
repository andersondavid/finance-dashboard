import React from "react";
import { LuCalendar, LuLineChart, LuSlidersHorizontal } from "react-icons/lu";

export default function HeaderTransactions() {
	return (
		<div className="flex p-6">
			<div className="py-3 pr-4 mr-auto">
				<p className="text-base font-bold text-sky-100">Transactions</p>
			</div>
			<div className="p-2 pl-3 h-11 w-36 border-2 border-gray-800 rounded-full">
				<p className="inline text-sky-100 m-0">
					<LuCalendar className="h-5 w-5 text-sky-100 mr-2 mb-1 inline" />
					Calendar
				</p>
			</div>
			<div className="p-2 h-11 w-11 border-2 ml-2 border-gray-800 rounded-full text-center">
				<LuLineChart className="h-5 w-5 mb-1 text-sky-100 inline" />
			</div>
			<div className="p-2 h-11 w-11 border-2 ml-2 border-gray-800 rounded-full text-center">
				<LuSlidersHorizontal className="h-5 w-5 mb-1 text-sky-100 inline" />
			</div>
		</div>
	);
}
