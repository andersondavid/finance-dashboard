import React from "react";
import {
	LuClapperboard,
	LuLink2,
	LuPlayCircle,
	LuTrendingUp,
} from "react-icons/lu";

export default function TransactionsHistory() {
	return (
		<div className="m-6">
			<div className="inline-flex mr-12 w-full mb-2">
				<div className="w-11 h-11 bg-sky-100 rounded-2xl p-3">
					<LuTrendingUp className="w-5 h-5 text-slate-900" />
				</div>
				<div className="mt-1 ml-3 w-1/4">
					<h1 className="text-sm font-bold text-sky-100">Deposity money</h1>
					<p className="text-xs text-sky-100">Cash deposity</p>
				</div>
				<div className="p-4 grow text-center">
					<p className="text-sm text-sky-100">6:35 PM</p>
				</div>
				<div className="center lg:flex items-center">
					<div className="">
						<p className="text-lg text-sky-100 m-auto lg:mr-6">$950,55</p>
					</div>
					<div className="m-auto p-2 h-11 w-11 border-2 border-gray-800 rounded-full text-center">
						<LuLink2 className="h-5 w-5 mb-1 text-sky-100 inline" />
					</div>
				</div>
			</div>

			<div className="inline-flex mr-12 w-full mb-2">
				<div className="w-11 h-11 bg-sky-100 rounded-2xl p-3">
					<LuClapperboard className="w-5 h-5 text-slate-900" />
				</div>
				<div className="mt-1 ml-3 w-1/4">
					<h1 className="text-sm font-bold text-sky-100">Cinema</h1>
					<p className="text-xs text-sky-100">Spider-Man 3</p>
				</div>
				<div className="p-4 grow text-center">
					<p className="text-sm text-sky-100">10:24 AM</p>
				</div>
				<div className="center lg:flex items-center">
					<div className="">
						<p className="text-lg text-sky-100 m-auto lg:mr-6">$50,99</p>
					</div>
					<div className="m-auto p-2 h-11 w-11 border-2 border-gray-800 rounded-full text-center">
						<LuLink2 className="h-5 w-5 mb-1 text-sky-100 inline" />
					</div>
				</div>
			</div>

			<div className="inline-flex mr-12 w-full mb-2">
				<div className="w-11 h-11 bg-sky-100 rounded-2xl p-3">
					<LuPlayCircle className="w-5 h-5 text-slate-900" />
				</div>
				<div className="mt-1 ml-3 w-1/4">
					<h1 className="text-sm font-bold text-sky-100">Amazon Prime Video</h1>
					<p className="text-xs text-sky-100">Monthly subscription</p>
				</div>
				<div className="p-4 grow text-center">
					<p className="text-sm text-sky-100">yesterday | 12:00 AM</p>
				</div>
				<div className="center lg:flex items-center">
					<div className="">
						<p className="text-lg text-sky-100 m-auto lg:mr-6">$145,45</p>
					</div>
					<div className="m-auto p-2 h-11 w-11 border-2 border-gray-800 rounded-full text-center">
						<LuLink2 className="h-5 w-5 mb-1 text-sky-100 inline" />
					</div>
				</div>
			</div>
		</div>
	);
}
