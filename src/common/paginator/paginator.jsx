import React, { useState } from 'react';
import style from './paginator.module.css';

const Paginator = ({currentPage, pageSize, totalItemsCount, onPageChanged}) => {

    let PageCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for(let i = 1; i <= PageCount; i++) {
        pages.push(i);
    }

    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * pageSize + 1;
    let rightPortionNumber = portionNumber * pageSize;

    return (
        <div className={style.pagesPagination}>
            { portionNumber > 1 &&
                <button className={style.btn} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
        {
            
            pages
                .filter(page => page >= leftPortionNumber && page <= rightPortionNumber)
                .map(page => {
                return <span key={page} 
                            className={page === currentPage && style.pagePagination}
                             onClick={()=> onPageChanged(page)}
                             style={{padding: '2px 7px 2px 7px'}}>
                            {page}
                        </span>
            })
        }
            { PageCount > portionNumber &&
                <button className={style.btn} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
        </div>

    )
};

export default Paginator;