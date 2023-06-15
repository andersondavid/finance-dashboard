import React from "react";

export default function NumberCardDetails() {
	return (
		<div>
			<div className="p-4">
				<p className="text-xs font-bold">CARD CARD</p>
				<p className="text-lg font-bold font-mono">1234 1234 1234 1234</p>
			</div>
			<div className="p-4 flex justify-between">
				<div>
					<p className="text-xs font-bold">EXPIRE DATE</p>
					<p>08/28</p>
				</div>
				<div className="border-x-2 border-slate-800 px-2 mx-2">
					<p className="text-xs font-bold">CVV</p>
					<p>123</p>
				</div>
				<div>
					<p className="text-xs font-bold">LEVEL</p>
					<p>23</p>
				</div>
			</div>
		</div>
	);
}
