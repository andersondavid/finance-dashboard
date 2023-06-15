import React from 'react'
import HeaderTransactions from './components/headertransactions'
import TransactionsFilters from './components/transactionsfilters'
import TransactionsHistory from './components/transactionshistory'

export default function Transactions() {
	return (
		<div className="border-2 border-gray-800 rounded-2xl my-6">
			<HeaderTransactions />
			<TransactionsFilters />
			<TransactionsHistory />
		</div>
	)
}
