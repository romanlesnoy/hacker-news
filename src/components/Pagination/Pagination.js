import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { paginationActions } from "../../store/pagination-slice";

import styles from "./Pagination.module.css";
import Button from "../Button/Button";
import { usePagination, DOTS } from "../../hooks/usePagination";

const Pagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.pagination.currentPage);
    const pageSize = useSelector((state) => state.pagination.dataLimit);
    const totalCount = useSelector((state) => state.pagination.totalCount);
    const siblingCount = 1;

    const paginationRange = usePagination({
        totalCount,
        pageSize,
        siblingCount,
        currentPage
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    function goToNextPage() {
        dispatch(paginationActions.setPage(currentPage + 1));
    }

    function goToPreviousPage() {
        dispatch(paginationActions.setPage(currentPage - 1));
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        dispatch(paginationActions.setPage(pageNumber));
    }

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <nav>
            <ul className={styles.list}>
                {currentPage !== 1 ? (
                    <li>
                        <Button text="back" onClick={goToPreviousPage} />
                    </li>
                ) : null}

                {paginationRange.map((pageNumber, index) => {
                    if (pageNumber === DOTS) {
                        return (
                            <li key={index} className="pagination-item dots">
                                &#8230;
                            </li>
                        );
                    }

                    return (
                        <li key={index}>
                            <Button
                                onClick={changePage}
                                text={pageNumber.toString()}
                                disabled={pageNumber === currentPage}
                            />
                        </li>
                    );
                })}

                {currentPage === lastPage ? null : (
                    <li>
                        <Button text="next" onClick={goToNextPage} />
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;
