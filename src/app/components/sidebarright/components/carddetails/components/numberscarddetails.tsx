import React from "react";

export default function NumberCardDetails() {
	return (
		<div>
			<div className="p-4">
				<p className="text-xs font-bold text-sky-100">CARD CARD</p>
				<p className="text-lg font-bold font-mono text-sky-100">1234 1234 1234 1234</p>
			</div>
			<div className="p-4 flex justify-between">
				<div>
					<p className="text-xs font-bold text-sky-100">EXPIRE DATE</p>
					<p className="text-sky-100">08/28</p>
				</div>
				<div className="border-x-2 border-gray-800 px-2 mx-2">
					<p className="text-xs font-bold text-sky-100">CVV</p>
					<p className="text-sky-100">123</p>
				</div>
				<div>
					<p className="text-xs font-bold text-sky-100">LEVEL</p>
					<p className="text-sky-100">23</p>
				</div>
			</div>
		</div>
	);
}
