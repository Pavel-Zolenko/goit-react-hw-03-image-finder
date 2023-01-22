import { Component } from "react";
import { ToastContainer} from 'react-toastify';
// import axios from "axios";
import { Searchbar } from "components/Searchbar/Searchbar";
import { Button } from "components/Button/Button";

import { Api } from "components/Api/Api";


export class App extends Component {

  state = {
    images: [],
    page: 1,
    query: "",
    loading: false,
    

  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  searchQuery = newQuery => {
    this.setState({
      query: newQuery.trim(),
      // images: []
    })
    
  }



  render() {
       
    return ( 
      <>
        {this.state.loading && <h1>Загружаем...</h1>}
        <Searchbar onSubmit={this.searchQuery} />
        <Api query={ this.state.query} page={this.state.page} />
        <ToastContainer autoClose={3000} />
        <Button loadMore={this.loadMore} />
        </>
    )
    
  }
};



