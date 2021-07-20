import React from 'react';
import './Search.css';

/**
 * The purpose of the search bar component is to search for domain suggestions in the app.
 * Home to the search buttons.
 */

class SearchBar extends React.Component{

    render() {
        return(
            <div className="SearchBar">
                <div className="SearchBar-fields" >
                    <form onSubmit={this.props.handleSubmit}>
                        <input placeholder="Customer Input" name='Query'onChange={(e)=>this.props.handleChange(e, 'Query')}/>
                        <button >Get domain suggestions</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;