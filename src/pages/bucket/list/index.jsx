import React, { Component } from 'react';
import { cityActions } from '../../../actions/city.action';
import { connect } from 'react-redux';

class BuckletList extends Component {

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
                <div class="limiter">
                    <div class="container-table100">
                        <div class="wrap-table100">
                            <div class="table100 ver1 m-b-110">
                                <div class="table100-head">
                                    <table>
                                        <thead>
                                            <tr class="row100 head">
                                                <th class="cell100 column1">Sr no.</th>
                                                <th class="cell100 column2">Title</th>
                                                <th class="cell100 column3">Discription</th>
                                                <th class="cell100 column4">Action</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div class="table100-body js-pscroll">
						            <table>
							            <tbody>
                                            <tr class="row100 body">
                                                <td class="cell100 column1">Sr no.</td>
                                                <td class="cell100 column2">Title</td>
                                                <td class="cell100 column3">Discription</td>
                                                <td class="cell100 column5">
                                                    <button type="button" className="btn-primary btn" >
                                                        <i className="fa fa-eye" aria-hidden="true"></i>Edit
                                                    </button>
                                                    <button type="button" className="btn-delete btn">
                                                        <i className="fa fa-trash" aria-hidden="true"></i>Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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
)(BuckletList);