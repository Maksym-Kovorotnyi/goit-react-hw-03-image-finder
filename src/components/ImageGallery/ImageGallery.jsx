import axios from 'axios'
import {Component} from 'react'

export class List extends Component{
    state = {
        images: [],
        isLoad: false,
    }
    MY_KEY = '33229711-19a5fd6125c37356a31dee8eb'
    getImage = async () => {
        const promise = await axios.get('https://pixabay.com/api/')
        console.log("List ~ promise:", promise)
    }}