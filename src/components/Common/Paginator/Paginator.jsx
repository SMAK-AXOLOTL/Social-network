import React from 'react'
import s from "./Paginator.module.css";

let Paginator = ({totalUsers, pageSize, currentPage, onPageSelectorClick}) => {

    let pagesCount = Math.ceil(totalUsers / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curPL = (currentPage - 5 < 0 ? 0 : currentPage - 5)
    let curPR = currentPage + 5
    let slicedPages = pages.slice(curPL, curPR)


    return <div className={s.pageSelector}>
        {slicedPages.map(p => {
            return <span
                className={currentPage === p && s.selectedPage}
                onClick={() =>
                    onPageSelectorClick(p)
                }>
                            {p + ' '}
                        </span>
        })}
    </div>
}

export default Paginator