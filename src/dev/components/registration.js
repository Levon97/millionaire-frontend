import React from 'react';

const Registration = () => {
    return (
        <div className="container-fluid d-flex  justify-content-center align-items-center millionaireContainer" style={
            {
                border: '2px solid red'
            }
        }>
            <div className="row d-flex justify-content-center ">
                <div className="col d-flex justify-content-center">
                    <form>
                        <div className="form-group ">
                            <label for="name">name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter name" />
                        </div>
                        <div className="form-group ">
                            <label for="lastName">last name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Enter last name" />
                        </div>
                        <div className="form-group ">
                            <label for="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                        </div>
                        <div className="form-group">
                            <label for="inputPassword">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label for="passwordCheck">Confirm password</label>
                            <input type="password" className="form-control" id="passwordCheck" placeholder="retype" />
                        </div>
                        <div className="form-group m-3">
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration;
