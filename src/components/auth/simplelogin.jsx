import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useParams } from 'react-router-dom';
import * as yup from 'yup';

import { Loader } from 'react-overlay-loader';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Baseurl from '../../Baseurl/Baseurl';


const Simplelogin = ({ Role }) => {

    const {PackageId} = useParams();
    console.log(PackageId,"params")
    localStorage.setItem("PackageId",PackageId)

    


    console.log("ahmed", Role)

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const [loader, setLoader] = useState(false)

    const Navigate = useNavigate();

    const Location = useLocation()

    console.log("LoginPath==>", Location)

  
    // const handleInputChange = (event, func) => {
    //     func(event.target.value);
    // }

    const handleKeypress = e => {
        //it triggers by pressing the enter key

        if (e.keyCode === 13) {
            // loginUser();
            onSubmit();
        }
    };

    // this is used for add bg on login page

    // useEffect(() => {
    //     document.body.classList.remove(
    //         "2-columns", "fixed-navbar", "menu-collapsed"
    //     );
    //     document.body.classList.add(
    //         "vertical-layout", "vertical-menu-modern", "1-column", "bg-full-screen-image", "blank-page", "blank-page", "pace-done", "menu-collapsed"
    //     );
    // }, [])
    const schema = yup.object().shape({
        // name: yup.string().required(),
        Email: yup.string().email().required(),
        Password: yup.string().min(8).required(),
    });

    // initialize the form with useForm and yupResolver
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    //   const onSubmit = (a) =>{

    //     console.log("==>",a)

    //   }

    




    const onSubmit = (data) => {

        console.log("data==>", data)
        // admin
        if (Role == "Admin") {
            var formdata = new FormData();
            formdata.append("email", data?.Email);
            formdata.append("password", data.Password);

            var requestOptions = {
                method: 'POST',
                headers: {
                    Accept: 'application/json'
                },
                body: formdata,
                redirect: 'follow'
            };
            localStorage.setItem("PackageId",PackageId)
            console.log(PackageId,"PackageId")
            setLoader(true)

            fetch(`${Baseurl.baseUrl}/superadmin/login`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    setLoader(false)
                    if (result.status == true) {
                    
                       
                        localStorage.setItem('AdminToken', result.token);
                        localStorage.setItem('Status', result.status);
                        console.log("status check==================", localStorage.getItem('AdminToken'))
                        console.log(result,"result")

                        toast.success(result.message, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        Navigate('/dashboard')


                        if (Location.state !== null) {
                            console.log("Locationss",Location)
                            Navigate(`${Location.state.historyLocation}`)
                        }
                        else {
                            Navigate('/dashboard')
                        }




                    }
                    else {

                        toast.error(result.message, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }

                }
                )
                .catch(error => console.log('error', error));

        }

        // user
        else if (Role == "User") {

            var formdata = new FormData();
            formdata.append("email", data.Email);
            formdata.append("password", data?.Password);

            var requestOptions = {
                method: 'POST',
                headers: {
                    Accept: 'application/json'
                },
                body: formdata,
                redirect: 'follow'
            };
            setLoader(true)

            fetch(`${Baseurl.UserBaseUrl}/login`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    setLoader(false)
                    if (result.status == true) {
                        console.log(result)
                        localStorage.setItem('UserToken', result.token);
                        console.log("status check==================", localStorage.getItem('UserToken'))

                        toast.success(result.message, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });

                        if (Location.state !== null) {
                            // console.log("Locationss",Location)
                            Navigate(`${Location.state.historyLocation}`)
                        }
                        else {
                            Navigate('/staff/dashboard')
                        }



                    }
                    else {
                        setLoader(false)
                        toast.error(result.message, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }

                }
                )
                .catch(error =>
                    {
                        setLoader(false)
                    console.log('error', error)
                    }
                    );

        }


        // subadmin
        else {

            var formdata = new FormData();
            formdata.append("email", data?.Email);
            formdata.append("password", data.Password);

            var requestOptions = {
                method: 'POST',
                headers: {
                    Accept: 'application/json'
                },
                body: formdata,
                redirect: 'follow'
            };
            setLoader(true)

            fetch(`${Baseurl.BaseUrlVariable}/login`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    setLoader(false)
                    if (result.status == true) {
                        console.log(result,"result")
                        localStorage.setItem('SubAdminToken', result.token);
                        localStorage.setItem('Userstatus', result.sub_status);
                        localStorage.setItem('Useremail', result.data.email);
                        console.log("status check==================", localStorage.getItem('SubAdminToken'))
                        // SubadminStatus()
                        toast.success(result.message, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        if (Location.state !== null) {
                            // console.log("Locationss",Location)
                            Navigate(`${Location.state.historyLocation}`)
                        }
                        else {
                            Navigate("/hospital/dashboard")
                        }

                    }
                    else {
                        setLoader(false)
                        toast.error(result.message, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }

                }
                )
                .catch(error =>{
                    setLoader(false)
                    console.log('error', error)
                }
                     );



        }



    }



    return (
        <>
            {loader == true ?
                <Loader fullPage loading /> : null
            }
            <div className="app-content content ahmed " style={{ marginLeft: 0 }}>
                <div className="content-wrapper">
                    <div className="content-header row">
                    </div>
                    <div className="content-body">
                        <section className="flexbox-container">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <div className="col-md-4 col-10 box-shadow-2 p-0">
                                    <div className="card border-grey border-lighten-3 m-0">
                                        {/* // ahmed change */}
                                        {/* <div className="card-header border-0 py-5"> */}
                                        <div className="card-header border-0 ">
                                            <div className="card-title text-center">
                                                <div className="p-1">
                                                    {/* <img src="../../../app-assets/images/logo/1.png" height={72} alt="branding logo" /> */}
                                                    <img src="../../../app-assets/images/logo/24UR-02.png" height={60} alt="branding logo" />


                                                    {/* public\app-assets\images\logo\Pyurelywhite-01.png */}
                                                </div>
                                            </div>
                                            <h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                                                <span>
                                                    {
                                                        Role == "Admin" ? "Super Admin Login with  24UR" :

                                                            Role == "Subadmin" ? "Hospital Login with 24UR" :

                                                                "Staff Login with 24UR"

                                                    }</span>
                                                {/* {aaa == admin ? "safdar": aaa == mager ?  "manager" : "jawad" } */}
                                            </h6>
                                        </div>
                                        {/* <div className="card-content pb-5"> */}
                                        <div className="card-content ">
                                            <div className="card-body">
                                                <form className="form-horizontal form-simple" onSubmit={handleSubmit(onSubmit)} noValidate>
                                                    <fieldset className="form-group position-relative has-icon-left mb-0">
                                                        <input className="form-control form-control-lg input-lg" {...register("Email")} placeholder="Email" type="email" onKeyDown={(e) => handleKeypress(e)} />
                                                        {/* <input className="form-control form-control-lg input-lg" onChange={(e) => handleInputChange(e, setEmail)} defaultValue={Email} type="email" name="emailaddress" id="id_email" required maxLength={64} placeholder="Email Address" onKeyDown={(e) => handleKeypress(e)} /> */}
                                                        <div className="form-control-position">
                                                            <i className="ft-user" />
                                                        </div>
                                                    </fieldset>
                                                    {errors.Email && <p style={{ color: "red" }} >{errors.Email.message}</p>}
                                                    <fieldset className="form-group position-relative has-icon-left mt-2">
                                                        <input className="form-control form-control-lg input-lg" {...register("Password")} placeholder="Password" type="password" onKeyDown={(e) => handleKeypress(e)} />
                                                        {/* <input className="form-control form-control-lg input-lg" onChange={(e) => handleInputChange(e, setPassword)} defaultValue={Password} type="password" name="password" id="id_password" required maxLength={64} placeholder="Password" onKeyDown={(e) => handleKeypress(e)} /> */}

                                                        <div className="form-control-position">
                                                            <i className="la la-key" />
                                                        </div>
                                                    </fieldset>
                                                    {errors.Password && <p style={{ color: "red" }} >{errors.Password.message}</p>}
                                                    <div className="form-group row">
                                                        <div className="col-md-6 col-12 text-center text-md-left">
                                                            {/* <fieldset>
                                                            <input type="checkbox" id="remember-me" className="chk-remember" />
                                                            <label htmlFor="remember-me"> Remember Me</label>
                                                        </fieldset> */}
                                                        </div>
                                                        {/* <div className="col-md-6 col-12 text-center text-md-right"><Link to="/forgetpassword" className="card-link">Forgot Password?</Link></div> */}
                                                    </div>
                                                    {/* <button type="button" onClick={loginUser} className="btn btn-info btn-lg btn-block mt-5"><i className="ft-unlock" /> Login</button> */}
                                                    <button type="submit" className="btn btn-info btn-lg btn-block "><i className="ft-unlock" /> Login</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="">
                                                {
                                                    Role == "Admin" ? <p className="float-sm-right text-center m-0"><Link to="/forgetpassword" className="card-link">Recover password</Link></p> :
                                                        Role == "Subadmin" ?
                                                            <>

                                                                <p className="float-sm-right text-center m-0"><Link to="/hospital/forgetpassword" className="card-link">Recover password</Link></p>
                                                                <p className="float-sm-left text-center m-0">New to 24UR ?<Link to="/hospital/register" className="card-link ml-1">Sign Up</Link></p>
                                                            </>
                                                            :
                                                            <p className="float-sm-right text-center m-0"><Link to="/staff/forgetpassword" className="card-link">Recover password</Link></p>

                                                }

                                                {/* <p className="float-sm-right text-center m-0">New to Moden Admin?<Link to="/register" className="card-link">Sign Up</Link></p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Simplelogin