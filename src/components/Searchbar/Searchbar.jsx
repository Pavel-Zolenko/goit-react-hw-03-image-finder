import { Component } from "react";
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export class Searchbar extends Component {
    state = {
        searchQuery: '',
    };
    
    onSearchInput = event => {
        this.setState({ [event.currentTarget.name]: event.target.value.toLowerCase()})
      
    }

  hendelSubmit = event => {
    event.preventDefault();
    if (this.state.searchQuery.trim() === "") {
      return toast.error("Введите название картинки")
    };

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: "" })
  };

    
    render() {
        const { searchQuery } = this.state;
        return (
        <header className={css.Searchbar}>
  <form className={css.SearchForm} onSubmit={this.hendelSubmit}>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={css.SearchFormInput}
      type="text"
      autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="searchQuery"
        value={searchQuery}
        onChange={this.onSearchInput}               
/>
  </form>
</header>
    )
    }; 
};


