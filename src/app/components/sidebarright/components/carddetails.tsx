import React from "react";
import { LuMoreHorizontal, LuPlus } from "react-icons/lu";

export default function CardDetails() {
	return (
		<div className="border-2 border-slate-800 rounded-2xl w-max">
			<div className="flex p-4">
				<div className="py-3 pr-4">
					<p className="text-sm font-bold">Card details</p>
				</div>
				<div className="p-2 h-11 w-11 border-2 ml-2 border-slate-800 rounded-full text-center">
					<LuPlus className="h-5 w-5 mb-1 text-gray-400 inline" />
				</div>
				<div className="p-2 h-11 w-11 border-2 ml-2 border-slate-800 rounded-full text-center">
					<LuMoreHorizontal className="h-5 w-5 mb-1 text-gray-400 inline" />
				</div>
			</div>

			<div className="p-12 py-8">
				<div className="bg-green-200 w-36 h-48 rounded-3xl"></div>
			</div>

			<div>
				<div className="p-4">
					<p className="text-xs font-bold">CARD CARD</p>
					<p className="text-lg font-bold font-mono">1234 1234 1234 1234</p>
				</div>
				<div className="p-4 flex justify-between">
					<div>
						<p className="text-xs font-bold">EXPIRE DATE</p>
						<p>08/28</p>
					</div>
					<div className="border-x-2 border-slate-800 px-2 mx-2">
						<p className="text-xs font-bold">CVV</p>
						<p>123</p>
					</div>
					<div>
						<p className="text-xs font-bold">LEVEL</p>
						<p>23</p>
					</div>
				</div>
			</div>
			<hr className="border-t-2 border-slate-800 m-4" />
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
		</div>
	);
}
