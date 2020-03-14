import React from 'react';
import { Link } from 'react-router-dom';


export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md bg-danger">

                <h2 className="text-dark"><i>Employee</i></h2>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#collapse-nav-bar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapse-nav-bar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link
                                to={'/list-emp'}
                                className="nav-link text-white">List Employee
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                 to={"/add-emp"}
                                 className="nav-link  text-white">AddEmployee
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}

