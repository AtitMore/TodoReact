import React, { Component } from 'react';
import { cityActions } from '../../../actions/city.action';
import NavigationBar from '../../../components/navbarContainer/navigation-bar';
import { connect } from 'react-redux';
import './style.css';

class AddTodoList extends Component {

    constructor(props) {
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentDidMount() {
        this.props.getCityList();
    }

    handleFilterChange(spec, e) {
        e.preventDefault();
        this.setState({ spec: e.target.value });
    }

    handleCityChange(e) {
        e.preventDefault();
        this.setState({ city_name: e.target.value });
    }

    render() {
        return (
            <div>
                <div>
                    <div class="container-contact100">
                        <div class="contact100-map" id="google_map" data-map-x="40.722047" data-map-y="-73.986422" data-pin="images/icons/map-marker.png" data-scrollwhell="0" data-draggable="1"></div>

                        <div class="wrap-contact100">
                            <form class="contact100-form validate-form">
                                <span class="contact100-form-title">
                                    Add Bucket List
				            </span>

                                <div class="wrap-input100 validate-input" data-validate="Please enter your name">
                                    <input class="input100" type="text" name="name" placeholder="Full Name" />
                                    <span class="focus-input100"></span>
                                </div>

                                <div class="wrap-input100 validate-input" data-validate="Please enter your message">
                                    <textarea class="input100" name="message" placeholder="Your Message"></textarea>
                                    <span class="focus-input100"></span>
                                </div>

                                <div class="container-contact100-form-btn">
                                    <button class="contact100-form-btn">
                                        Send Email
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    const { city } = state;
    return {
        cityList: city.cityList,
    }
}

const actionCreator = {
    getCityList: cityActions.getCityList,
}

export default connect(
    mapStateToProps,
    actionCreator
)(AddTodoList);