import React from "react";
import { useHistory } from "react-router-dom";

function NotFound() {
    const history = useHistory();

    return (
        <div>
            <h1>404</h1>
            <p>Страница не найдена</p>
            <button type="button" role="link" onClick={() => history.goBack()}>
                Назад
            </button>
        </div>
    );
}

export default NotFound;
