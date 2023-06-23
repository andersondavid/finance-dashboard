import Card from "@/app/components/gerenic/card";
import React from "react";
import { LuPlus } from "react-icons/lu";

export default function CardsList() {
	return (
		<div className="overflow-x-scroll scrollbar-hide">
			<div className="px-6 gap-6 flex flex-wrap w-max whitespace-nowrap">
				<div className="w-80">
					<Card />
				</div>
				<div className="w-80">
					<Card />
				</div>
				<div className="w-80">
					<Card />
				</div>
				<div className="w-80">
					<div className="w-full aspect-[8/5] rounded-3xl border-dashed border-slate-700 border-2 flex justify-center items-center">
						<p className="text-lg">
							<LuPlus className="h-6 w-6 text-gray-200 inline mb-1" /> Add card
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
