import React, { Component } from 'react';
import { cityActions } from '../../../actions/city.action';
import NavigationBar from '../../../components/navbarContainer/navigation-bar';
import { connect } from 'react-redux';
import './style.css';

class AddCities extends Component {

    constructor(props){
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentDidMount() {
        this.props.getCityList();
    }

    handleFilterChange(spec, e) {
        e.preventDefault();
        this.setState({spec: e.target.value});
    }

    handleCityChange(e){
        e.preventDefault();
        this.setState({city_name: e.target.value});
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <lable>State</lable>
                                        <select className="custom-select" onChange={this.handleFilterChange.bind(this, "State")}>
                                            <option selected disabled>Select State</option>
                                            <option value="All">All</option>
                                            <option value="State">State</option>
                                            <option value="District">District</option>
                                            <option value="City">City</option>
                                        </select>        
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <lable>District</lable>
                                        <select className="custom-select" onChange={this.handleFilterChange.bind(this, "District")}>
                                            <option selected disabled>Select District</option>
                                            <option value="All">All</option>
                                            <option value="State">State</option>
                                            <option value="District">District</option>
                                            <option value="City">City</option>
                                        </select>        
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group has-search">
                                            <lable>City</lable>
                                            <input type="text" className="form-control" placeholder="Enter City"
                                            onChange={this.handleCityChange.bind(this)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div class="text-center">
                                        <button type="submit" className="btn btn-success px-3 py-2 rounded add-btn">Add</button>
                                    </div>
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
    const {city} = state;
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
)(AddCities);