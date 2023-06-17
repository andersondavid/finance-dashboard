import React from "react";
import { LuArrowRight } from "react-icons/lu";

export default function YourBalance() {
	return (
		<div className="w-full flex px-6">
			<div className="bg-gray-200 w-1/2 rounded-l-2xl p-6 px-8">
				<p className=" text-neutral-900 text-base">Your balance</p>
				<h1 className="text-neutral-900 font-extrabold text-3xl">$45,50</h1>
				<p className=" text-neutral-900 text-sm">3 CARD</p>
			</div>
			<div className="bg-green-400 w-1/2 rounded-r-2xl relative">
				<div className="absolute bottom-4 right-4">
					<button className="text-neutral-900 text-sm rounded-full bg-gray-200 p-2 px-4 flex">Details<LuArrowRight className="h-5 w-5 ml-3" /></button>
				</div>
			</div>
		</div>
	);
}
