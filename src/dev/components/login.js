import { useState } from 'react';
import BackgroundContainer from '../containers/backgroundContainer';
import  apiConfigs from '../configs/config';
import { Redirect } from 'react-router';

const Login = () => {
    const [inputField, setInputFieldVal] = useState({})
    const [errMessage, setErrMessage] = useState(null);
    const [disabledButton, setDisabledButton] = useState(false)
    const [loginSuccess, setSuccessfulLogin] = useState(null);
    const changeHandler = (e) => {
        const { name, value } = e.target;
        errMessage && setErrMessage(null);
        setInputFieldVal({ ...inputField, [name]: value });
        console.log(inputField,`${apiConfigs.apiDomain + apiConfigs.apiPort}/login`)
    }

    // function to send post request regisdtration
    async function handleSubmit() {
        setDisabledButton(true);
        const res = await fetch(`${apiConfigs.apiDomain + apiConfigs.apiPort}/sign-in`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputField)
        })
        const data = await res.json();
        if (data.error) {
            setErrMessage(data.error);
            setDisabledButton(true);
        } else {
            const authData = data.data;
            localStorage.setItem('auth-token', JSON.stringify(authData));
            setSuccessfulLogin(true);
        }
    }

    return (
        <BackgroundContainer>
            <div className="row d-flex justify-content-center ">
                <div className="col d-flex justify-content-center">
                    <form>
                        {

                            errMessage && <div className="alert alert-danger" role="alert">{errMessage}</div>
                        }
                        <div className="form-group ">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => changeHandler(e)} name="email" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => changeHandler(e)} name="password" placeholder="Password" />
                        </div>
                        <div className="form-group m-3">
                            <div className="d-flex justify-content-center">
                                <button type="submit" disabled={disabledButton} onClick = {handleSubmit} className="btn btn-primary blankButton">Submit</button>
                            </div>
                        </div>

                    </form>
                    {/* {
                        loginSuccess && <Redirect to="/profile" />
                    } */}

                </div>
            </div>
        </BackgroundContainer>

    )
}

export default Login;