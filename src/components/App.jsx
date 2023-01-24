import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import css from "components/styles.module.css";
import { Searchbar } from "components/Searchbar/Searchbar";
import { Button } from "components/Button/Button";

import { Api } from "components/Api/Api";


export class App extends Component {

  state = {
    images: [],
    page: 1,
    query: "",
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  searchQuery = newQuery => {
    this.setState({
      query: newQuery.trim(),
    })
    
  };


  render() {
       
    return ( 
      <div className={css.App}>
        
        <Searchbar onSubmit={this.searchQuery} />
        <Api query={ this.state.query} page={this.state.page} />
        <ToastContainer autoClose={3000} />
        {this.state.query && <Button loadMore={this.loadMore} />}
        
        </div>
    )
     }
};



