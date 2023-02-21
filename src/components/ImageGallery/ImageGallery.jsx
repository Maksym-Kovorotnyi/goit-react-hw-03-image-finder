
import { Item } from 'components/ImageGalleryItem/ImageGalleryItem'



export const Gallery =({images}) =>{
        return (<>
            <ul>
                <Item
                    images={images}
                />
            </ul>
        </>
        )
    }
  