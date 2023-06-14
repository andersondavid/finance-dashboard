import React from "react";
import { LuArrowUpWideNarrow } from "react-icons/lu";

export default function HeaderMainCards() {
	return (
		<div className="flex p-6">
			<div className="py-3 pr-4 mr-auto">
				<p className="text-base font-bold">
					Cards
					<span className="bg-slate-700 px-1 rounded-sm text-xs inline-block">
						2
					</span>
				</p>
			</div>
			<div className="p-2 h-11 w-11 border-2 ml-2 border-slate-800 rounded-full text-center">
				<LuArrowUpWideNarrow className="h-5 w-5 mb-1 text-gray-400 inline" />
			</div>
		</div>
	);
}
