import '../../styles.css'
import { Item } from 'components/ImageGalleryItem/ImageGalleryItem'



export const Gallery =({images, onClick}) =>{
        return (<>
            <ul className='ImageGallery'>
                <Item
                    onClick={onClick}
                    images={images}
                />
            </ul>
        </>
        )
    }
  