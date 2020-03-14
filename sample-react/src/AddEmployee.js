import React from 'react';

export class AddEmployee extends React.Component {

    emptyEmp = {
        eId: '',
        eName: '',
        eSalary: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            empData: this.emptyEmp
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let emp = { ...this.state.empData };
        emp[name] = value;
        this.setState({ empData: emp });



    }
    async handleSubmit(event) {
        event.preventDefault();
        const emp = this.state.empData;
        console.log("emp:" + JSON.stringify(emp));
        await fetch('http://localhost:8012/api/employee', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emp),
        });


        this.props.history.push('/list-emp');
    }

    render() {
        return (
            <div>
                <div className="container mt-5">

                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-md-5 ">


                            <div className="card card-align mt-5">
                                <div className="card-header text-center text-dark" >
                                    <h4>Add Employee</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>




                                    <div className="form-group mt-3">
                                        <b><label for="EmployeeId">Enter Name</label></b>
                                        <input type="text" className="form-control" placeholder="Enter Id" id="EmployeeId"
                                            name="eName" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <b><label for="Employeename">Employee Salary</label></b>
                                        <input type="EmployeeName" className="form-control" placeholder="EmployeeName" id="EmployeeName"
                                            name="eSalary" onChange={this.handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-outline-primary" ><b>AddEmployee</b></button>
                                    </form>
                                </div>
                                


                            </div>
                        </div>
                    </div>

                </div>
            </div>




        );
    }
}