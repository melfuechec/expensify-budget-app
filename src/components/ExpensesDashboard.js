import React from 'react';
import ExpenesList from "./ExpenseList";
import ExpenesListFilters from "./ExpenseListFilters";

const ExpenseDashboardPage = () => {
    return (
    <div>
        <ExpenesListFilters />
        <ExpenesList />
    </div>
    )
}

export default ExpenseDashboardPage