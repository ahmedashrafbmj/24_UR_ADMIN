import React from 'react'
import { useState ,useEffect } from "react";
import Swal from "sweetalert2";
// import { Loader } from "react-overlay-loader"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import BaseUrl from '../../Baseurl/Baseurl'
import { ToastContainer, toast } from 'react-toastify';

const ForgetPassword = ({Role}) => {

    const [Email, setEmail] = useState('');
    const [loader, setLoader] = useState(false);
    const [myemail, setmyemail] = useState('')

    const Navigate = useNavigate()

    console.log("role ==>",Role)

    // const Token =localStorage.getItem("AdminToken")

    // useEffect(()=>{

    //     if(Token === null)
    //     {
    //       Navigate('/')
    //     }
    
    //   },[])

    const handleInputChange = (event, func) => {
        func(event.target.value);
    }

    const schema = yup.object().shape({
        // name: yup.string().required(),
        Email: yup.string().email().required(),
        // Password: yup.string().min(8).required(),
      });
      
      // initialize the form with useForm and yupResolver
      const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });

    const ForgetPassword = (data) => {

        console.log("Data==>",data)

        if(Role == "Superadmin")
        {
            var formdata = new FormData();
            formdata.append("email",data.Email);
    
            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };
    
            fetch(`${BaseUrl.baseUrl}/superadmin/forgotPasswordlinkSend`, requestOptions)
                .then(response => response.json())
                .then(result => {
    
                    if (result.status ) {
                        console.log("id==>",result)
    
                        // Swal.fire({
                        //     title: "Success",
                        //     text: result.message,
                        //     icon: "success",
                        //     confirmButtonColor: "#29BF12",
                        // });
                      
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
                        setmyemail(result.id)
                        Navigate("/verifycode", { state: { userId: result.id } })
    
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

        else if(Role == "Subadmin")
        {
            var formdata = new FormData();
            formdata.append("email", data.Email);
    
            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };
    
            fetch(`${BaseUrl.BaseUrlVariable}/forgotPasswordlinkSend`, requestOptions)
                .then(response => response.json())
                .then(result => {
    
                    if (result.status ) {
                        console.log("id==>",result)
    
                        // Swal.fire({
                        //     title: "Success",
                        //     text: result.message,
                        //     icon: "success",
                        //     confirmButtonColor: "#29BF12",
                        // });
                      
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
                        setmyemail(result.id)
                        Navigate("/hospital/verifycode", { state: { userId: result.id } })
    
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

        else{
            var formdata = new FormData();
            formdata.append("email", data.Email);
    
            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };
    
            fetch(`${BaseUrl.UserBaseUrl}/forgotPasswordlinkSend`, requestOptions)
                .then(response => response.json())
                .then(result => {
    
                    if (result.status ) {
                        console.log("id==>",result)
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
                        setmyemail(result.id)
                        Navigate("/staff/verifycode", { state: { userId: result.id } })
    
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


// ahmed comment

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
                                    <div className="card-header border-0 pb-5 ">
                                        <div className="card-title text-center">
                                            <img src="../../../app-assets/images/logo/24UR-02.png" height={60}  alt="branding logo" />
                                        </div>
                                        <h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                                            <span>We will send you a link to reset password.</span>
                                        </h6>
                                    </div>
                                    <div className="card-content pb-5">
                                        <div className="card-body">
                                            <form className="form-horizontal" onSubmit={handleSubmit(ForgetPassword)}>
                                                <fieldset className="form-group position-relative has-icon-left">
                                                    <input type="email" className="form-control form-control-lg input-lg" {...register("Email")}  id="id_email" required maxLength={64} placeholder="Email Address" />
                                                    <div className="form-control-position">
                                                        <i className="ft-mail" />
                                                    </div>
                                                </fieldset>
                                                {errors.Email && <p style={{color:"red"}} >{errors.Email.message}</p>}
                                                <button  type="submit"
                                                // onClick={forgetpass}
                                                 className="btn btn-outline-info btn-lg btn-block mt-5"><i className="ft-unlock" /> Recover Password</button>
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

export default ForgetPassword