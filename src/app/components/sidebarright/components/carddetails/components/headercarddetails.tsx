import React from "react";
import { LuMoreHorizontal, LuPlus } from "react-icons/lu";

export default function HeaderCardDetails() {
	return (
		<div className="flex p-4">
			<div className="py-3 pr-4">
				<p className="text-sm font-bold text-sky-100">Card details</p>
			</div>
			<div className="p-2 h-11 w-11 border-2 ml-2 border-gray-800 rounded-full text-center">
				<LuPlus className="h-5 w-5 mb-1 text-sky-100 inline" />
			</div>
			<div className="p-2 h-11 w-11 border-2 ml-2 border-gray-800 rounded-full text-center">
				<LuMoreHorizontal className="h-5 w-5 mb-1 text-sky-100 inline" />
			</div>
		</div>
	);
}
