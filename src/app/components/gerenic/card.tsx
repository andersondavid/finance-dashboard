import React from "react";

export default function Card() {
	return (
		<div className="bg-green-300 w-full aspect-[8/5] rounded-3xl flex flex-col">
			<div className="h-1/3 flex items-center justify-between pt-4 px-6">
				<p className="text-neutral-900">Shopping Card</p>
				<span className="h-9 aspect-[6/5] bg-yellow-500 rounded-xl"></span>
			</div>
			<div className="h-1/3 flex items-center justify-between px-6">
				<p className="text-neutral-900">NAME</p>
				<p className="font-bold text-neutral-900 text-lg">**** **** 1234</p>
			</div>
			<div className="h-1/3 flex items-center justify-between px-6 bg-green-500 rounded-b-3xl">
				<p className="text-neutral-900">Exp 08/09</p>
				<p className="font-bold text-neutral-900 text-xl">VISA</p>
			</div>
		</div>
	);
}
