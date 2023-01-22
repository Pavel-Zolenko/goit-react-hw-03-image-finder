import { Component } from "react";
import { ImageGallery } from "components/ImageGallery/ImageGallery";



export class Api extends Component {
    state = {
        query: [],
        error: null,
        page: 1,
    };
    
    

    componentDidUpdate(prevProps, prevState) {
       
        if (prevProps.query !== this.props.query || prevProps.page !== this.props.page ) {
           
            fetch(`https://pixabay.com/api/?q=${this.props.query}&page=${this.props.page}&key=31665473-d71629ddfe13db1f02d81492c&image_type=photo&orientation=horizontal&per_page=12`)
                .then(resp => {
                    if (resp.ok) {
                        return resp.json();
                    }
                    return Promise.reject( new Error(`нет картинки с названием ${this.props.query}`)
                    )
                })
                .catch(error => this.state({error}))
                .then(query => this.setState(prevState => ({
                    query: [...prevState.query, ...query.hits]
                    })))
        }
    }

    render() {
        const {error, query} = this.state
        return (
            <>
                {error && <h1>{error.massage}</h1>}
                 <ImageGallery images={query} />
            </>
        )
    }
}