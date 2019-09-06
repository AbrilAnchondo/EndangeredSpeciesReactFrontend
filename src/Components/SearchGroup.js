import React from 'react'

export default function SearchGroup(props) {
    console.log(props)
    return (
        <div>
            <form>
                <label>
                Filter by Group:
                <select value={props.searchGroupTerm} onChange={props.handleChange}>
                    <option value="All">All</option>
                    <option value="Marine Mammals">Marine Mammals</option>
                    <option value="Big Cats">Big Cats</option>
                    <option value="Primates">Primates</option>
                    <option value="Mammals">Mammals</option>
                </select>
                </label>
                </form>
            
        </div>
    )
}
