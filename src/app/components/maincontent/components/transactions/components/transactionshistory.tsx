import React from "react";
import { LuClapperboard, LuLink2, LuPlayCircle, LuTrendingUp } from "react-icons/lu";

export default function TransactionsHistory() {
	return (
		<div className="m-6">
			<div className="inline-flex mr-12 w-full mb-2">
				<div className="w-11 h-11 bg-gray-100 rounded-2xl p-3">
					<LuTrendingUp className="w-5 h-5 text-slate-900" />
				</div>
				<div className="mt-1 ml-3 w-1/4">
					<h1 className="text-sm font-bold">Deposity money</h1>
					<p className="text-xs">Cash deposity</p>
				</div>
				<div className="ml-3 p-4 grow text-center">
					<p className="text-sm">6:35 PM</p>
				</div>
				<div className="ml-3 p-3 w-1/4 text-right">
					<p className="text-lg">$950,55</p>
				</div>
				<div className="p-2 h-11 w-11 border-2 ml-2 border-slate-800 rounded-full text-center">
					<LuLink2 className="h-5 w-5 mb-1 text-gray-400 inline" />
				</div>
			</div>

			<div className="inline-flex mr-12 w-full mb-2">
				<div className="w-11 h-11 bg-gray-100 rounded-2xl p-3">
					<LuClapperboard className="w-5 h-5 text-slate-900" />
				</div>
				<div className="mt-1 ml-3 w-1/4">
					<h1 className="text-sm font-bold">Cinema</h1>
					<p className="text-xs">Spider-Man 3</p>
				</div>
				<div className="ml-3 p-4 grow text-center">
					<p className="text-sm">10:24 AM</p>
				</div>
				<div className="ml-3 p-3 w-1/4 text-right">
					<p className="text-lg">-$50,00</p>
				</div>
				<div className="p-2 h-11 w-11 border-2 ml-2 border-slate-800 rounded-full text-center">
					<LuLink2 className="h-5 w-5 mb-1 text-gray-400 inline" />
				</div>
			</div>

			<div className="inline-flex mr-12 w-full mb-2">
				<div className="w-11 h-11 bg-gray-100 rounded-2xl p-3">
					<LuPlayCircle className="w-5 h-5 text-slate-900" />
				</div>
				<div className="mt-1 ml-3 w-1/4">
					<h1 className="text-sm font-bold">Amazon Prime Video</h1>
					<p className="text-xs">Monthly subscription</p>
				</div>
				<div className="ml-3 p-4 grow text-center">
					<p className="text-sm">yesterday | 12:00 AM</p>
				</div>
				<div className="ml-3 p-3 w-1/4 text-right">
					<p className="text-lg">-$16,10</p>
				</div>
				<div className="p-2 h-11 w-11 border-2 ml-2 border-slate-800 rounded-full text-center">
					<LuLink2 className="h-5 w-5 mb-1 text-gray-400 inline" />
				</div>
			</div>
		</div>
	);
}
