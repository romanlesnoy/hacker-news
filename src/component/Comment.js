import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchSubComments } from "../store/news-actions";
import CommentsList from "./CommentsList";

const Comment = ({ item }) => {
    const { by, id, kids, parent, text, time } = item;
    const newDate = new Date(time * 1000);

    const dispatch = useDispatch();
    const subComments = useSelector((state) => state.news.subComments);
    const hasSubComments = useSelector((state) => state.news.hasSubComments);

    useEffect(() => {
        if (kids) {
            dispatch(fetchSubComments(kids));
        }
    }, [dispatch, kids]);

    const filtredSubComments = subComments.filter((item) => item.parent === id);

    return (
        <React.Fragment>
            <article>
                <p>by {by}</p>
                <time>{newDate.toDateString()}</time>
                <div dangerouslySetInnerHTML={{ __html: text }} />
                <p>id {id}</p>
                <p>kids: {JSON.stringify(kids)}</p>
                <p>Parent: {parent}</p>
            </article>
            {kids && hasSubComments && (
                <CommentsList comments={filtredSubComments} />
            )}
        </React.Fragment>
    );
};

Comment.propTypes = {
    item: PropTypes.object,
    by: PropTypes.string,
    id: PropTypes.number,
    kids: PropTypes.array,
    parent: PropTypes.number,
    text: PropTypes.string,
    time: PropTypes.number
};

export default Comment;
