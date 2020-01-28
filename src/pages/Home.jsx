import React from 'react'

import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <nav>
                <ul>
                <li><Link className="btn btn-large btn-primary" to="/">Home</Link></li>
                <li><Link className="btn btn-large btn-primary" to="/newrx">New Rx</Link></li>
                </ul>
            </nav>
        </div>
    )
}
