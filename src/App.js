import React from 'react';
import './App.css';
import Search from './Components/Search/Search';
import './Components/Search/Search.css';
import DomainList from './Components/DomainList/DomainList';
// import Pagination from './Components/Pagination/Pagination';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Domains: [],
      Query: '',
    };
  }

  handleChange=(e, name) =>{
    const value = e.target.value;
    this.setState({Query:value})
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    console.log('test')

    fetch(`https://api.godaddy.com/v1/domains/suggest?query=${this.state.Query}&waitMs=1000`, {
      headers: {
        'Authorization': 'sso-key fXfkbuG67hzG_9JHnVn6gQXv3mASZ72pNP8:GB7rnq2cDbb9R95fFa46kY'
      }
    })
    .then(response => {
      return response.json()
    })
    .then(response => {
      this.setState({Domains: response})
    })
    .catch(err => {
      console.error(err);
    });
  }


  render() {
   
    return(
      <div className="App">
        <h1>Yves' Domains</h1>
        <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchGoDaddy={this.searchGoDaddy} />
        {this.state.Domains && <DomainList Domains={this.state.Domains}/>}
      </div>
    );
  }
}


export default App;
