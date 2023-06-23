import React from "react";
import { LuShoppingBag, LuTrendingDown, LuTrendingUp } from "react-icons/lu";

export default function CardStats() {
	return (
		<div className="border-2 border-slate-800 rounded-2xl m-6 p-6 pt-4">

			<div className="inline-flex mr-12 pt-2">
				<div className="w-11 h-11 bg-teal-300 rounded-2xl p-3">
					<LuTrendingUp className="w-5 h-5 text-slate-900" />
				</div>
				<div className="mt-1 ml-3">
					<p className="text-xs">Total earnings</p>
					<h1 className="font-bold">$10.500,50</h1>
				</div>
			</div>
			<div className="inline-flex mr-12 pt-2">
				<div className="w-11 h-11 bg-pink-300 rounded-2xl p-3">
					<LuTrendingDown className="w-5 h-5 text-slate-900" />
				</div>
				<div className="mt-1 ml-3">
					<p className="text-xs">Total Spendings</p>
					<h1 className="font-bold">$4.565,75</h1>
				</div>
			</div>
			<div className="inline-flex mr-12 pt-2">
				<div className="w-11 h-11 bg-orange-300 rounded-2xl p-3">
					<LuShoppingBag className="w-5 h-5 text-slate-900" />
				</div>
				<div className="mt-1 ml-3">
					<p className="text-xs">Spendings Goal</p>
					<h1 className="font-bold">$8.548,20</h1>
				</div>
			</div>

		</div>
	);
}
