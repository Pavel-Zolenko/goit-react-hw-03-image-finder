import { Component } from "react";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Loader } from "components/Loader/Loader";



export class Api extends Component {
    state = {
        query: [],
        error: null,
        page: 1,
        showLoader: false,
    };
    
    

    componentDidUpdate(prevProps, prevState) {
               
        if (prevProps.query !== this.props.query || prevProps.page !== this.props.page ) {
           this.setState({showLoader: true})
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
            .finally(this.setState({showLoader: false}))
        }
    }
                    


    render() {
        const {error, query, showLoader} = this.state
        return (
            <>
                {error && <h1>{error.massage}</h1>}
                 {showLoader && <Loader />}
                 <ImageGallery images={query} />
            </>
        )
    }
}