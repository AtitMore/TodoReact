import React, { Component } from 'react';
import { cityActions } from '../../../actions/city.action';
import NavigationBar from '../../../components/navbarContainer/navigation-bar';
import Table from '../../../components/table/table';
import { connect } from 'react-redux';
import './style.css';

class AllCities extends Component {


    constructor(props) {
        super(props);
        this.state = {
            filter_by: "All",
            search_input: "",
            short_list: false
        };
    }

    componentDidMount() {
        this.props.getCityList();
    }

    componentDidUpdate() {
        if(this.props.cityList !== this.state.cityList){
            if(this.props.cityList >= this.state.cityList || this.props.cityList <= this.state.cityList) {
                console.log('abc')
                this.setState({
                    cityList: this.state.cityList
                })
            } else {
                console.log('abc')
                this.setState({
                    cityList: this.props.cityList
                })
            }
        }
        console.log(this.state);
    }

    handleDeleteRow(i) {
        let rows = [...this.state.cityList]
        this.setState({ 
            cityList: rows.splice(i, -1)
        })
        console.log(this.state);
    }

    handleFilterChange(e) {
        e.preventDefault();;
        let value = e.target.value;
        this.setState({filter_by: value});
    }

    handleSearchChange(e){
        e.preventDefault();;
        let value = e.target.value;
        this.setState({search_input: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        switch(this.state.filter_by) {
            case "State":
                
                break;
            case "District":
                
                break;
            case "City":
                
                break;
            default:
                var updatedList = this.state.cityList;
                    updatedList = updatedList.filter(function(item){
                        return item.toLowerCase().search(
                        e.target.value.toLowerCase()) !== -1;
                });
                this.setState({cityList: [updatedList]});
              
        }
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
                                    <div className="col-md-4 mb-3">
                                        <select className="custom-select" defaultValue={'DEFAULT'} onChange={this.handleFilterChange.bind(this)}>
                                            <option value="DEFAULT" disabled>Select Filters</option>
                                            <option value="All">All</option>
                                            <option value="State">State</option>
                                            <option value="District">District</option>
                                            <option value="City">City</option>
                                        </select>        
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="form-group has-search">
                                            <span className="fa fa-search form-control-feedback"></span>
                                            <input type="text" className="form-control" placeholder="Search"
                                            onChange={this.handleSearchChange.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <button type="submit" className="btn btn-info search">Search</button>
                                    </div>
                                </div>
                            </form>
                            <Table cityList={this.props.cityList} 
                                deleteRow={ this.handleDeleteRow.bind(this) } />
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
)(AllCities);