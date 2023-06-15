import React from "react";
import {
	LuBarChart3,
	LuCalendarDays,
	LuSettings,
	LuHome,
	LuMessagesSquare,
	LuShoppingBag,
	LuStore,
	LuWallet,
} from "react-icons/lu";

export default function SideBarMenus() {
	return (
		<div className="pt-6">
			<div className="bl-3 pl-2 pr-3 border-l-4 border-gray-700">
				<div className="p-2 mt-2 rounded-xl bg-gray-700 cursor-pointer">
					<LuHome className="h-5 w-5 text-sky-100" />
				</div>
			</div>

			<div className="bl-3 pl-2 pr-3 border-l-4 border-transparent">
				<div className="p-2 mt-2 rounded-xl hover:bg-slate-800 cursor-pointer">
					<LuWallet className="h-5 w-5 text-sky-100" />
				</div>
			</div>

			<div className="bl-3 pl-2 pr-3 border-l-4 border-transparent">
				<div className="p-2 mt-2 rounded-xl hover:bg-slate-800 cursor-pointer">
					<LuBarChart3 className="h-5 w-5 text-sky-100" />
				</div>
			</div>

			<div className="bl-3 pl-2 pr-3 border-l-4 border-transparent">
				<div className="p-2 mt-2 rounded-xl hover:bg-slate-800 cursor-pointer">
					<LuStore className="h-5 w-5 text-sky-100" />
				</div>
			</div>

			<div className="bl-3 pl-2 pr-3 border-l-4 border-transparent">
				<div className="p-2 mt-2 rounded-xl hover:bg-slate-800 cursor-pointer">
					<LuShoppingBag className="h-5 w-5 text-sky-100" />
				</div>
			</div>

			<div className="bl-3 pl-2 pr-3 border-l-4 border-transparent cursor-pointer">
				<div className="p-2 mt-2 rounded-xl hover:bg-slate-800">
					<LuCalendarDays className="h-5 w-5 text-sky-100" />
				</div>
			</div>
			<div className="bl-3 pl-2 pr-3 border-l-4 border-transparent cursor-pointer">
				<div className="p-2 mt-2 rounded-xl hover:bg-slate-800">
					<LuMessagesSquare className="h-5 w-5 text-sky-100" />
				</div>
			</div>

			<div className="bl-3 pl-2 pr-3 border-l-4 border-transparent cursor-pointer">
				<div className="p-2 mt-12 rounded-xl hover:hover:bg-slate-800">
					<LuSettings className="h-5 w-5 text-sky-100" />
				</div>
			</div>
		</div>
	);
}
