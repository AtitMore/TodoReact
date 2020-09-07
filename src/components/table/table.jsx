import React, { Component } from 'react';
import './style.css';

const table = (props) => {
    console.log(props);
    let cityList = props.cityList ? (
        props.cityList.map((data, index) => (
            <tr key={index}>
                <td data-label="sr-no">{index + 1}</td>
                <td data-label="state">{data.State}</td>
                <td data-label="district">{data.District}</td>
                <td data-label="Period">{data.City}</td>
                <td data-label="Period">
                    <button type="button" className="btn-primary btn" >
                        <i className="fa fa-eye" aria-hidden="true"></i>Shortlist</button>
                    <button type="button" className="btn-delete btn" onClick={() => props.deleteRow(index + 1)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
                </td>
            </tr>
        ))
    ) : null
    return(
        <div>
            <h1>Cities List</h1>
            <table className="mt-5">
                <thead>
                    <tr>
                        <th scope="col">Sr. No</th>
                        <th scope="col">State</th>
                        <th scope="col">District</th>
                        <th scope="col">City</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>{cityList}</tbody>
            </table>
        </div>
    )
};

export default table;