import React from 'react'
import styled from 'styled-components'


const Pagination = ({ postsPerPage, totalPosts, paginate}:any) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
        <nav style={{marginLeft:'18%'}}>
            <ul className='pagination'>
                <li className="page-item"><a className="page-link">Previous</a></li>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                    <a style={{cursor:'pointer'}} onClick={() => paginate(number)}  className='page-link'>
                        {number}
                    </a>
                    </li>
                    ))}
                <li className="page-item"><a className="page-link">Next</a></li>
            </ul>
        </nav>
     );
  };

export default Pagination