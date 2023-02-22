import { Component } from "react";
import axios from 'axios';
import '../styles.css'
import { SearchBar } from "./Searchbar/Searchbar";
import { Gallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";

axios.defaults.baseURL = 'https://pixabay.com/api/'
const MY_KEY = '33229711-19a5fd6125c37356a31dee8eb'

export class App extends Component {
  state = {
    images: [],
    modalImg: '',
    search: '',
    isLoad: false,
    ModalOpen: false
  }
  async componentDidMount() {
    try {
      const promise = await axios.get(`?key=${MY_KEY}&per_page=12`);
      const data = promise.data;
      this.setState({ images: data.hits })
    } catch (error) {
            
    }
  }
  
  async searchQuery(query) {
    try {
      const promise = await axios.get(`?key=${MY_KEY}&per_page=12&q=${query}`);
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
    const query = this.state.search;
    this.searchQuery(query)
  }


  handleClickImg = (e) => {
 this.setState(state => ({ ModalOpen: !state.ModalOpen }));

  const imageId = e.currentTarget.id;
  const image = this.state.images.find((image) => image.id === Number(imageId));
  this.setState({ modalImg: image }); 
  };
  

  render() {
    const {largeImageURL} = this.state.modalImg
    return <>
      < SearchBar
        onSubmit={this.handleSubmit}
        onChange={this.handleReadInput}
      />
      <Gallery
        images={this.state.images}
        onClick={this.handleClickImg}
      />
      
      {this.state.ModalOpen ? <Modal
        Image={largeImageURL}
        onClick={this.handleClickImg}
      />: ''}
    
    </>
  }
}