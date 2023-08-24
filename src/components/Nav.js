import data from "../scp.json";
import Scp from "./Scp";
import "../style.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Nav()
{
    return (
        <>
            <Router>
            <nav className="card navbar navbar-expand-lg bg-body-tertiary sticky-lg-top rounded" id="mynav" data-bs-theme="dark">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="topnav">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav p-2">
                                <li className="nav-item m-1">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>

                                {
                                data.map(
                                    scp => (
                                        <li key={scp.subject} className="nav-item m-1" >
                                            <Link to={`${scp.subject}`} className="nav-link" >SCP-{scp.subject}</Link>
                                        </li>
                                    )
                                )
                                }

                            </div>
                        </div>
                    </ul>
                </div>
            </nav>

                
                <Routes>
                    <Route path="/" element={<Home />} />
                    {
                        data.map (
                            scp => (
                                <Route key={scp.subject}
                                path={`${scp.subject}`}
                                element={<Scp scp={scp} />}
                                />
                            )
                        )
                    }
                </Routes>
            </Router>
        </>
    );
}

function Home()
{
    return (
        <>
            <div className="container-fluid mb-3 p-4 mt-2 shadow bg-body-tertiary text-center rounded text-danger"  data-bs-theme="dark">
                <h4>WARNING: THE FOUNDATION DATABASE IS</h4>
                <h1 className="display-1">CLASSIFIED</h1>
                <h4>UNAUTHORIZED PERSONNEL WILL BE TRACKED, LOCATED, AND DETAINED</h4>
            </div>
        </>
    );
}