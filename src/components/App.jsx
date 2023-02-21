import { Component } from "react";
import axios from 'axios';
import { SearchBar } from "./Searchbar/Searchbar";
import { Gallery } from "./ImageGallery/ImageGallery";

axios.defaults.baseURL = 'https://pixabay.com/api/'
const MY_KEY = '33229711-19a5fd6125c37356a31dee8eb'

export class App extends Component  {
  state = {
    images: [],
    search: '',
    isLoad: false,
    }
  async componentDidMount() {
    try {
            const promise = await axios.get(`?key=${MY_KEY}&per_page=12`);
            const data = promise.data;
            this.setState({ images: data.hits })
        } catch (error) {
            
        }  
    }
  
  
  
  handleReadInput = (e) => {
    this.setState({ search: e.target.value }) 
    
    }
  handleSubmit = (e) => {
  e.preventDefault()

  }
  render() {
  return <>
    < SearchBar
      onSubmit={this.handleSubmit}
      onChange={this.handleReadInput}
    />
    <Gallery
      images={this.state.images}
      
    />
  </>
  }
};
