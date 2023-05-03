import React, { useState, useEffect } from 'react'
import Swal from "sweetalert2";
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import { useLocation, useNavigate } from 'react-router-dom';
import BaseUrl from '../../Baseurl/Baseurl';
import { ToastContainer, toast } from 'react-toastify';
const VerifyCode = ({ Role }) => {


    const [loader, setLoader] = useState(false);
    const location = useLocation()
    const Navigate = useNavigate()

    const [Code, setCode] = useState("");

    console.log("Role==>", Role)



    console.log("value of id ==>", location?.state?.userId)

    const Token = localStorage.getItem("AdminToken")

    const handleInputChange = (event, func) => {
        func(event.target.value);

    }


    const schema = yup.object().shape({
        Code: yup.number().positive().integer().required(),
        // Email: yup.string().email().required(),
    })


    const {register ,handleSubmit , formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })


    const verifycodefunction = (data) => {


        if (Role == "Superadmin") {
            var formdata = new FormData();
            formdata.append("id", location.state.userId);
            formdata.append("token", data.Code);

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch(`${BaseUrl.baseUrl}/superadmin/forgettokenCheck`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    if (result.status == true) {
                        console.log("result===>verification", result.id);
                        Navigate("/newpassword", { state: { userId: location.state.userId } })
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

        else if (Role == "Subadmin") {
            var formdata = new FormData();
            formdata.append("id", location.state.userId);
            formdata.append("token", data.Code);

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch(`${BaseUrl.BaseUrlVariable}/forgettokenCheck`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    if (result.status == true) {
                        console.log("result===>verification", result.id);

                        // Navigate( "/newpassword",{ state:{userEmail: location.state.userEmail}})
                        Navigate("/hospital/newpassword", { state: { userId: location.state.userId } })
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

        else {            
            var formdata = new FormData();
            formdata.append("id", location.state.userId);
            formdata.append("token", data.Code);

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch(`${BaseUrl.UserBaseUrl}/forgettokenCheck`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    if (result.status == true) {
                        console.log("result===>verification", result.id);

                        // Navigate( "/newpassword",{ state:{userEmail: location.state.userEmail}})
                        Navigate("/staff/newpassword", { state: { userId: location.state.userId } })
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



    }


    // useEffect(() => {
    //     document.body.classList.remove(
    //         "2-columns", "fixed-navbar", "menu-collapsed"
    //     );
    //     document.body.classList.add(
    //         "vertical-layout", "vertical-menu-modern", "1-column", "bg-full-screen-image", "blank-page", "blank-page", "pace-done", "menu-collapsed"
    //     );
    // }, [])


    return (

        <div className="app-content content" style={{ marginLeft: 0 }}>
            <div className="content-wrapper">
                <div className="content-header row">
                </div>
                <div className="content-body">
                    <section className="flexbox-container">
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <div className="col-md-4 col-10 box-shadow-2 p-0">
                                <div className="card border-grey border-lighten-3 px-2 py-2 m-0">
                                    <div className="card-header border-0 pb-5">
                                        <div className="card-title text-center">
                                            <img src="../../../app-assets/images/logo/24UR-02.png" height={30} alt="branding logo" />
                                        </div>
                                        <h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                                            <span>We will send you a link to reset password.</span>
                                        </h6>
                                    </div>
                                    <div className="card-content pb-5">
                                        <div className="card-body">
                                            <form  className="form-horizontal" onSubmit={handleSubmit(verifycodefunction)}  >
                                                <fieldset className="form-group position-relative has-icon-left">
                                                    <input type="text" className="form-control form-control-lg input-lg" {...register("Code")} required  placeholder="Enter varification Code" />
                                                    <div className="form-control-position">
                                                        <i className="ft-check" />
                                                    </div>
                                                </fieldset>
                                                {errors.Code &&  <p style={{color:"red"}} >{errors.Code.message}</p>}
                                                <button type="submit"  className="btn btn-outline-info btn-lg btn-block mt-5"><i className="ft-unlock" /> Verify Code</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card-footer border-0">
                                        {/* <p className="float-sm-left text-center"><Link to="/login" className="card-link">Login</Link></p> */}
                                        {/* <p className="float-sm-right text-center">New to Modern ? <Link to="/register" className="card-link">Create Account</Link></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default VerifyCode