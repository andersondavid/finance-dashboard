import React from "react";
import { LuMail, LuMessagesSquare, LuSearch } from "react-icons/lu";

export default function MainHeader() {
	return (
		<div className="flex justify-between my-8">
			<div className="">
				<h3>Welcome</h3>
				<h1 className="text-3xl font-bold">Dashboard</h1>
			</div>

			<div className="flex ">
				<div className="flex p-2 px-3 h-11 w-48 border-2 border-slate-800 rounded-full">
					<input
						type="text"
						className="w-full bg-transparent"
						placeholder="Search"
					></input>
					<LuSearch className="h-6 w-6 text-gray-400" />
				</div>
				<div className="p-2 h-11 w-11 border-2 ml-2 border-slate-800 rounded-full text-center">
					<p>
						<LuMail className="mb-1 h-5 w-5 text-gray-400 inline" />
					</p>
				</div>
				<div className="p-2 h-11 w-11 border-2 ml-2 border-slate-800 rounded-full text-center">
					<p>
						<LuMessagesSquare className="mb-1 h-5 w-5 text-gray-400 inline" />
					</p>
				</div>
			</div>
		</div>
	);
}
