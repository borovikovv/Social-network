import React, { useState } from 'react';
import style from './paginator.module.css';

const Paginator = ({currentPage, pageSize, totalItemsCount, onPageChanged, portionSize = 7}) => {

    let PageCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for(let i = 1; i <= PageCount; i++) {
        pages.push(i);
    }

    let PortionCount = Math.ceil(PageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

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
                             style={{ width: '30px'}}>
                            {page}
                        </span>
            })
        }
            { PortionCount > portionNumber &&
                <button className={style.btn} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
        </div>

    )
};

export default Paginator;