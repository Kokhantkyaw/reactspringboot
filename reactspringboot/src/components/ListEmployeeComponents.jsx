// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react'
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className= "row">
                    <table className= "table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th> Employee First Name</th>
                            <th> Employee Last Name</th>
                            <th> Employee Email Id</th>
                            <th> Actions</th>
                        </tr>

                        </thead>

                        <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                    <tr key= {employee.id}>
                                        <td> { employee.firstName} </td>
                                        <td> { employee.lastName} </td>
                                        <td> { employee.emailId} </td>
                                        <td>
                                            <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponents;