import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { paginationActions } from "../../store/pagination-slice";

import styles from "./Pagination.module.css";
import Button from "../Button/Button";

const Pagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.pagination.currentPage);
    const newsPerPage = useSelector((state) => state.pagination.dataLimit);
    const totalCount = useSelector((state) => state.pagination.totalCount);

    const pageLimit = Math.ceil(totalCount / newsPerPage);
    const pageNumbers = new Array(pageLimit).fill().map((_, idx) => 1 + idx);

    function goToNextPage() {
        dispatch(paginationActions.setPage(currentPage + 1));
    }

    function goToPreviousPage() {
        dispatch(paginationActions.setPage(currentPage + 1));
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        dispatch(paginationActions.setPage(pageNumber));
    }

    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <Button text="back" onClick={goToPreviousPage} />
                </li>
                {pageNumbers.map((page, index) => (
                    <li key={index}>
                        <Button onClick={changePage} text={page.toString()} />
                    </li>
                ))}
                <li>
                    <Button text="next" onClick={goToNextPage} />
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
