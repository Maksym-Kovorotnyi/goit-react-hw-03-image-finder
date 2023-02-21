

export const SearchBar=({onSubmit, onChange})=>{
    
 
        return <>
            <header >
                <form onSubmit={onSubmit}>
                    <button
                        type="submit" >
                        <span >Search</span>
                    </button>
                    <input
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