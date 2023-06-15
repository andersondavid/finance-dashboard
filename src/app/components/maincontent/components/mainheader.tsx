import React from "react";
import { LuMail, LuMessagesSquare, LuSearch } from "react-icons/lu";

export default function MainHeader() {
	return (
		<div className="flex justify-between my-8">
			<div>
				<h3 className="text-sky-100">Welcome</h3>
				<h1 className="text-3xl font-bold text-sky-100">Dashboard</h1>
			</div>

			<div className="flex">
				<div className="flex p-2 px-3 h-11 w-48 border-2 border-gray-800 rounded-full">
					<input
						type="text"
						className="w-full bg-transparent"
						placeholder="Search"
					></input>
					<LuSearch className="h-6 w-6 text-sky-100" />
				</div>
				<div className="p-2 h-11 w-11 border-2 ml-2 border-gray-800 rounded-full text-center">
					<LuMail className="mb-1 h-5 w-5 text-sky-100 inline" />
				</div>
				<div className="p-2 h-11 w-11 border-2 ml-2 border-gray-800 rounded-full text-center">
					<LuMessagesSquare className="mb-1 h-5 w-5 text-sky-100 inline" />
				</div>
			</div>
		</div>
	);
}
