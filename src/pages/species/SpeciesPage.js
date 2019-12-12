import React from 'react';
import { Route } from 'react-router-dom';
import SpeciesBrowser from './SpeciesBrowser';
import SpeciesProfile from './SpeciesProfile';


export default function SpeciesPage(props) {
    return (
        <div className="bg-species">
            <Route exact path={props.match.url} render={(routerProps) => (
                <SpeciesBrowser  {...routerProps}/>)}/>
            <Route path={`${props.match.url}/:id`} render={routerProps => 
                <SpeciesProfile {...routerProps}/>} />
        </div>
    )
}
