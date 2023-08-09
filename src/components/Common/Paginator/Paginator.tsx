import React from 'react'
import s from "./Paginator.module.css";

type PropsType = {
    totalItems: number
    pageSize: number
    currentPage: number
    onPageSelectorClick: (pageNumber: number) => void
}

const Paginator: React.FC<PropsType> = ({totalItems, pageSize, currentPage, onPageSelectorClick}) => {

    let pagesCount = Math.ceil(totalItems / pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curPL = (currentPage - 5 < 0 ? 0 : currentPage - 5)
    let curPR = Number(currentPage) + 5
    let slicedPages = pages.slice(curPL, curPR)


    return <div className={s.pageSelector}>
        {currentPage >= 10
            ? <button onClick={() => {
                currentPage <= 10
                    ? onPageSelectorClick(1)
                    : onPageSelectorClick(currentPage - 10)
            }}>
                Previous
            </button>
            : null
        }
        {slicedPages.map(p => {
            return <span
                key={p}
                className={Number(currentPage) === Number(p)? s.selectedPage : ''}
                onClick={() =>
                    onPageSelectorClick(p)
                }>
                            {p + ' '}
                    </span>
        })}
        {currentPage < pagesCount - 10
            ? <button onClick={() => {
                currentPage > pagesCount - 10
                    ? onPageSelectorClick(pagesCount)
                    : onPageSelectorClick(currentPage + 10)
            }}>
                Next
            </button>
            : null
        }
        <div>
            <input
                type={"number"}
                min={1}
                max={pagesCount}
                placeholder={'Go to page#'}
                onKeyDown={ e => {
                    if (e.key === 'Enter'){
                        onPageSelectorClick(Number(e.currentTarget.value))
                    }
                }}
            />
        </div>
    </div>
}

export default Paginator