import React from "react";
import SideBarMenus from "./componentes/sidebarmenus";

export default function SideBar() {
	return (
		<div className="w-min bg-slate-950 border-r-2 border-slate-800">
			<div className="p-2 pt-9">
				<div className="h-11 w-11 bg-green-600 rounded-2xl p-3 border-4 border-gray-400"></div>
			</div>
			<SideBarMenus />
		</div>
	);
}
