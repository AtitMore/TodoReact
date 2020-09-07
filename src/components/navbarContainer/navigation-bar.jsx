import React, { Component } from "react";
import { connect } from 'react-redux';
import './style.css';

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <section className="head-section">
                        <a href="#" id="logo" target="_blank">Logo</a>

                        <label className="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>

                        <nav>
                            <ul>
                                <li><a href="#logo"><i className="icon-home"></i>All</a></li>
                                <li><a href="#about"><i className="icon-user"></i>Shortlisted</a></li>
                            </ul>
                        </nav>
                    </section>
                </header>
            </div>

        );
    }
}

export default NavigationBar;