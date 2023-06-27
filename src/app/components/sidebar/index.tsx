import React from "react";
import SideBarMenus from "./componentes/sidebarmenus";

export default function SideBar({ sideBarOpen }: { sideBarOpen: boolean }) {
	return (
		<div className={`fixed ${sideBarOpen ? 'left-0' : '-left-44'} transition-all h-full w-min bg-gray-900 border-r-2 border-gray-800 z-50`}>
			<div className="p-2 pt-9">
				<div className="h-11 w-11 bg-green-600 rounded-2xl p-3 border-4 border-sky-100"></div>
			</div>
			<SideBarMenus />
		</div>
	);
}
