import '../../styles.css'

export const SearchBar=({onSubmit, onChange})=>{
    
 
        return <>
            <header className="Searchbar" >
                <form
                    className='SearchForm' 
                    
                    onSubmit={onSubmit}>
                    <button
                        className='SearchForm-button'
                        
                        type="submit" >
                        <span className='SearchForm-button-label' >Search</span>
                    </button>
                    <input
                        className='SearchForm-input'
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={onChange}
                        
                    />
                </form>
            </header>
</>

}