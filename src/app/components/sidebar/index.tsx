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

export default function SideBar() {
	return (
		<div className="w-min bg-slate-950 border-r-2 border-slate-800">
			<div className="p-2 pt-9">
				<div className="h-11 w-11 bg-green-600 rounded-2xl p-3 border-4 border-gray-400"></div>
			</div>

			<div className="pt-6">
				<div className="bl-3 pl-2 pr-3 border-l-4 border-slate-600">
					<div className="p-2 mt-2 rounded-xl hover:bg-slate-800 bg-slate-600">
						<LuHome className="h-5 w-5 text-gray-400" />
					</div>
				</div>

				<div className="bl-3 pl-2 pr-3 border-l-4 border-transparent">
					<div className="p-2 mt-2 rounded-xl hover:bg-slate-800">
						<LuWallet className="h-5 w-5 text-gray-400" />
					</div>
				</div>

				<div className="bl-3 pl-2 pr-3 border-l-4 border-transparent">
					<div className="p-2 mt-2 rounded-xl hover:bg-slate-800">
						<LuBarChart3 className="h-5 w-5 text-gray-400" />
					</div>
				</div>

				<div className="bl-3 pl-2 pr-3 border-l-4 border-transparent">
					<div className="p-2 mt-2 rounded-xl hover:bg-slate-800">
						<LuStore className="h-5 w-5 text-gray-400" />
					</div>
				</div>

				<div className="bl-3 pl-2 pr-3 border-l-4 border-transparent">
					<div className="p-2 mt-2 rounded-xl hover:bg-slate-800">
						<LuShoppingBag className="h-5 w-5 text-gray-400" />
					</div>
				</div>

				<div className="bl-3 pl-2 pr-3 border-l-4 border-transparent">
					<div className="p-2 mt-2 rounded-xl hover:bg-slate-800">
						<LuCalendarDays className="h-5 w-5 text-gray-400" />
					</div>
				</div>
				<div className="bl-3 pl-2 pr-3 border-l-4 border-transparent">
					<div className="p-2 mt-2 rounded-xl hover:bg-slate-800">
						<LuMessagesSquare className="h-5 w-5 text-gray-400" />
					</div>
				</div>

				<div className="bl-3 pl-2 pr-3 border-l-4 border-transparent">
					<div className="p-2 mt-12 rounded-xl hover:bg-slate-500">
						<LuSettings className="h-5 w-5 text-gray-400" />
					</div>
				</div>
			</div>
		</div>
	);
}
