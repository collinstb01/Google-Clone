import React from 'react'

const SearchResult = ({organicresult: {results}}) => {
  return (
    <div>
        {
            results?.map((val, i) => (
                <div key={i}>
                    <h1>{val.title}</h1>
                    <h1>{val.link}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default SearchResult