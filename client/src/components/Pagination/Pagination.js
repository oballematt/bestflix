import React from 'react'

export default function Pagination({titlesPerPage, totalTitles, paginate}) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalTitles / titlesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-4">
                    <nav >
                        <ul className="pagination" >
                            {pageNumbers.map(number => (
                                <li key={number} className="page-item">
                                    <button style={{backgroundColor: "black", opacity: ".8", color:"white",}}  onClick={() => paginate(number)} className="page-link">
                                        {number}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        
    )
}
