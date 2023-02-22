import '../../styles.css'
export const Item = ({ images, onClick }) => {
    return <>
        {images.map(({id, webformatURL}) => <li onClick={onClick} className='ImageGalleryItem' key={id} id={id}><img  className='ImageGalleryItem-image'  src={webformatURL} alt="" /></li>)
}
</>
}