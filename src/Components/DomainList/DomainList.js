import React from 'react';
import './DomainList.css';

/**
 * The purpose of the DomainList component is to simulate what a returned list of domains would look like in the yves' domain app (after querying the GoDaddy API)
 * To help this simulation, the DomainList wull make use of the Domains component repeatedly.
 */

class DomainList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataDomain: [],
        };
    }

    handleClick=(e, query)=>{
        e.preventDefault()

        fetch(`https://api.godaddy.com/v1/domains/suggest?query=${query}&waitMs=1000`)
    .then(response => {
      return response.json()
    })
    .then(response => {
      this.setState({Movies: response})
    })
    .catch(err => {
      console.error(err);
    });
    }

    render() {
        return(
            <div className="domain-container">
                {this.props.Domains.map((item, i) => (
                    <div className="domain-list" key={i}>
                        <h5 className="domains">{item.domain}</h5>
                    </div>
                ))}
            </div>
        )
    }
}

export default DomainList;
