import React from 'react'

const Search = ({handleSearch}) => {
	return (
		<div className='col col-sm-4'size ="1.3rem">
			<input onChange={(event)=>handleSearch(event.target.value)}
				className='form-control' placeholder='Type to search note...'></input>
		</div>
	);
};


export default Search; 
