import React from 'react'
import { useParams } from 'react-router-dom';

import "./MyLeaningPage.css";

export const MyLeaningPage = () => {
    const params: { id?: string } = useParams();

    const id = params.id;

    return (
        <div className="leaning">
            {`MyLeaningPage ${id}`}
        </div>
    )
}
