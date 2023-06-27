import React, { Dispatch } from "react";
import { LuMail, LuMenu, LuMessagesSquare, LuSearch } from "react-icons/lu";

export default function MainHeader({
	setSideBarOpen,
}: {
	setSideBarOpen: Dispatch<boolean>;
}) {
	return (
		<div className="justify-between my-8 sm:flex">
			<div>
				<h3 className="text-sky-100">Welcome</h3>
				<h1 className="text-3xl font-bold text-sky-100">Dashboard</h1>
			</div>

			<div className="flex mt-6 sm:mt-0">
				<div className="lg:hidden py-1 sm:fixed left-4 top-4">
					<button onClick={() => setSideBarOpen(true)}>
						<LuMenu className="w-9 h-9" />
					</button>
				</div>
				<div className="flex ml-auto p-2 px-3 h-11 w-48 border-2 border-gray-800 rounded-full">
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
