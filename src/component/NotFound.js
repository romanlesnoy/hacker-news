import React from "react";
import { useHistory } from "react-router-dom";

import Button from "./Button";

function NotFound() {
    const history = useHistory();

    return (
        <div>
            <h1>404</h1>
            <p>Страница не найдена</p>
            <Button
                role="link"
                text={"back"}
                onClick={() => history.goBack()}
            />
        </div>
    );
}

export default NotFound;
