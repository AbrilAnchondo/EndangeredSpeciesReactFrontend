import React from 'react';

const filter = {
    textAlign: "center"
}

export default function FilterByGroup(props) {
    return (
        <div style={filter}>
            <form>
                <label>
                Filter by Group:
                <select className="browser-default custom-select" value={props.filterGroupTerm} onChange={props.handleChange}>
                    <option value="All">All</option>
                    <option value="Marine Animals">Marine Animals</option>
                    <option value="Reptiles">Reptiles</option>
                    <option value="Birds">Birds</option>
                    <option value="Marsupials">Marsupials</option>
                    <option value="Amphibians">Amphibians</option>
                    <option value="Big Cats">Big Cats</option>
                    <option value="Primates">Primates</option>
                    <option value="Mammals">Mammals</option>
                </select>
                </label>
                </form>
            
        </div>
    )
}
