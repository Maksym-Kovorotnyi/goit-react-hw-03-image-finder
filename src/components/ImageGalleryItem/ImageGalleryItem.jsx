export const Item = ({images}) => {
    return <>
        {images.map(({id, pageURL, previewURL}) => <li key={id}><img  src={previewURL} alt="" /></li>)
}
</>
}