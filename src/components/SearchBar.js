import { useState } from 'react'

const SearchBar = () => {
  
  const [searchWord, setSearchWord] = useState('');
  const onSearchHandler = (e) => {
    e.preventDefault();
    console.log(searchWord);
  }

  return (
    <div className='searchbar'>
        <form className='searchbar__form'>
            <input type='text' placeholder='Search' 
            value={searchWord}
            onChange={ (e) => setSearchWord(e.target.value) } 
            />
            <button className='btn btn-block' onClick={onSearchHandler}>
                SEARCH
            </button>
        </form>
    </div>
  )
}

export default SearchBar