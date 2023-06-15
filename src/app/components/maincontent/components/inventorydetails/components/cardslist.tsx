import React from "react";
import { LuPlus } from "react-icons/lu";

export default function CardsList() {
	return (
		<div className="flex px-6 gap-6">
			<div className="w-1/3 max-w-xs">
				<div className="bg-green-200 w-full aspect-[8/5] rounded-3xl"></div>
			</div>
			<div className="w-1/3 max-w-xs">
				<div className="bg-green-200 w-full aspect-[8/5] rounded-3xl"></div>
			</div>
			<div className="w-1/3 max-w-xs">
				<div className="w-full aspect-[8/5] rounded-3xl border-dashed border-slate-700 border-2 flex justify-center items-center">
					<p className="text-lg">
						<LuPlus className="h-6 w-6 text-gray-200 inline mb-1" /> Add card
					</p>
				</div>
			</div>
		</div>
	);
}
