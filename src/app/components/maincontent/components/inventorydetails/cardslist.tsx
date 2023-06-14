import React from "react";
import { LuPlus } from "react-icons/lu";

export default function CardsList() {
	return (
		<div className="flex px-6 gap-6">
			<div className="">
				<div className="bg-green-200 w-72 h-52 rounded-3xl"></div>
			</div>
			<div className="">
				<div className="bg-green-200 w-72 h-52 rounded-3xl"></div>
			</div>
			<div className="">
				<div className="w-72 h-52 rounded-3xl border-dashed border-slate-700 border-2 flex justify-center items-center">
					<p className="text-lg"><LuPlus className="h-6 w-6 text-gray-200 inline mb-1" /> Add card</p>
				</div>
			</div>
		</div>
	);
}
