import React from 'react';
import './Domains.css';

/**
 * The purpose of the Domains component is to represent how a domain result in the yves' domain app will be formatted and styled.
 * The domains component defines what the expected results are and their order.
 */

const Domains = ({data, query}) => {
    return(
        <div className="domain-results">
            {data&& query.map(result =>{
                return(<div>
                    <h1>{result.query}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Domains;