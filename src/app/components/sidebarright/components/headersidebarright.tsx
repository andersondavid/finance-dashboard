import React from "react";
import { LuBell, LuWallet } from "react-icons/lu";

export default function HeaderSideBarRight() {
	return (
		<div className="w-min flex p-4 pr-0 ml-auto">
			<div className="p-2 pl-3 h-11 w-28 border-2 border-slate-800 rounded-full">
				<p className="inline text-gray-400 m-0">
					<LuWallet className="h-5 w-5 text-gray-400 mr-2 mb-1 inline" />
					Wallet
				</p>
			</div>
			<div className="p-2 h-11 w-11 border-2 ml-2 border-slate-800 rounded-full text-center">
				<p>
					<LuBell className="mb-1 h-5 w-5 text-gray-400 inline" />
				</p>
			</div>
			<div className="p-2 h-11 w-11 ml-2 rounded-full text-center bg-green-600"></div>
		</div>
	);
}
