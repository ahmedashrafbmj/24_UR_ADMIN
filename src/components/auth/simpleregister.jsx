import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

import Baseurl from '../../Baseurl/Baseurl';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Loader } from 'react-overlay-loader';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const Simpleregister = () => {
    
    const navigate = useNavigate();
    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    const [Address, setAddress] = useState('');
    const [Contact, setContact] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const [loader, setLoader] = useState(false)


    const handleInputChange = (event, func) => {
        func(event.target.value);
    }

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            // registerUser();
        }
    };

    const schema =yup.object().shape({
     Fname:yup.string().required(),
     hname:yup.string().required(),
     Lname:yup.string().required(),
     Address:yup.string().required(),
     Email:yup.string().email().required(),
     Password:yup.string().min(8).required(),
    //  Contact:yup.string().required
     Contact: yup.string().matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, 'Invalid phone number').required(),


    })

    const {register , handleSubmit ,formState: { errors }}  = useForm({
        resolver: yupResolver(schema)

    })


    const registerUser = (data) => {

        console.log("data==>",data)


            var formdata = new FormData();
            formdata.append("fname",data.Fname);
            formdata.append("hname",data.hname);
            formdata.append("lname", data.Lname);
            formdata.append("address", data.Address);
            formdata.append("contact", data.Contact);
            formdata.append("email", data.Email);
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

            fetch(`${Baseurl.BaseUrlVariable}/registration`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    setLoader(false)
                    if (result.status == true) {
                        console.log(result)
                        // localStorage.setItem('SubAdminToken', result.token);
                        // console.log("status check==================", localStorage.getItem('SubAdminToken'))

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

                        // Navigate('/dashboard')
                        navigate("/hospital/login")

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
                                    <div className="card-header border-0">
                                        <div className="card-title text-center">
                                        <img src="../../../app-assets/images/logo/24UR-02.png" height={60} alt="branding logo" />
                                        </div>
                                        <h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                                            <span>Create Account</span>
                                        </h6>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            <form className="form-horizontal form-simple" onSubmit={handleSubmit(registerUser)} >
                                            {errors.hname && <p style={{color:"red"}} >{errors.hname.message}</p> }
                                                <fieldset className="form-group position-relative has-icon-left">
                                                    <input type="text" className="form-control form-control-lg input-lg" {...register("hname")}  id="user-password" placeholder="Enter Hospital Name" required  onKeyDown={(e) => handleKeypress(e)}/>
                                                    <div className="form-control-position">
                                                    <i className="ft-user" />
                                                    </div>
                                                </fieldset>
                                                <fieldset className="form-group position-relative has-icon-left mb-1">
                                                    <input type="text" className="form-control form-control-lg input-lg" {...register("Fname")}  id="user-fname" placeholder="First Name" onKeyDown={(e) => handleKeypress(e)} />
                                                    <div className="form-control-position">
                                                        <i className="ft-user" />
                                                    </div>
                                                </fieldset>

                                                {errors.Fname && <p style={{color:"red"}} >{errors.Fname.message}</p> }
                                                <fieldset className="form-group position-relative has-icon-left mb-1">
                                                    <input type="text" className="form-control form-control-lg input-lg" {...register("Lname")}  id="user-lname" placeholder="Last Name" onKeyDown={(e) => handleKeypress(e)} />
                                                    <div className="form-control-position">
                                                        <i className="ft-user" />
                                                    </div>
                                                </fieldset>
                                                {errors.Lname && <p style={{color:"red"}} >{errors.Lname.message}</p> }
                                                <fieldset className="form-group position-relative has-icon-left mb-1">
                                                {/* onChange={(e) => handleInputChange(e, setPassword)} defaultValue={Password} type="password" name="password" id="id_password" required maxLength={64} placeholder="Password" onKeyDown={(e) => handleKeypress(e)} */}
                                                    <input type="email" className="form-control form-control-lg input-lg"  {...register("Email")}  id="user-email" placeholder="Your Email Address" required onKeyDown={(e) => handleKeypress(e)} />
                                                    <div className="form-control-position">
                                                        <i className="ft-mail" />
                                                    </div>
                                                </fieldset>
                                                {errors.Email && <p style={{color:"red"}} >{errors.Email.message}</p> }
                                                <fieldset className="form-group position-relative has-icon-left mb-1">
                                                {/* onChange={(e) => handleInputChange(e, setPassword)} defaultValue={Password} type="password" name="password" id="id_password" required maxLength={64} placeholder="Password" onKeyDown={(e) => handleKeypress(e)} */}
                                                    <input type="text" className="form-control form-control-lg input-lg" {...register("Address")}  id="user-address" placeholder="Your  Address" required onKeyDown={(e) => handleKeypress(e)} />
                                                    <div className="form-control-position">
                                                        <i className="ft-home" />
                                                    </div>
                                                </fieldset>
                                                {errors.Address && <p style={{color:"red"}} >{errors.Address.message}</p> }
                                                <fieldset className="form-group position-relative has-icon-left">
                                                    <input type="password" className="form-control form-control-lg input-lg" {...register("Password")}  id="user-password" placeholder="Enter Password" required  onKeyDown={(e) => handleKeypress(e)}/>
                                                    <div className="form-control-position">
                                                        <i className="la la-key" />
                                                    </div>
                                                </fieldset>
                                                {errors.Password && <p style={{color:"red"}} >{errors.Password.message}</p> }
                                                <fieldset className="form-group position-relative has-icon-left">
                                                    <input type="number" className="form-control form-control-lg input-lg" {...register("Contact")}  min="0"  id="user-contact" placeholder="Enter Contact" required  onKeyDown={(e) => handleKeypress(e)}/>
                                                    <div className="form-control-position">
                                                        <i className="la la-phone" />
                                                    </div>
                                                </fieldset>
                                                {errors.Contact && <p style={{color:"red"}} >{errors.Contact.message}</p> }
                                                <button type="submit"   className="btn btn-info btn-lg btn-block"><i className="ft-unlock" /> Register</button>
                                            </form> 
                                        </div>
                                        <p className="text-center">Already have an account ? <Link to="/hospital/login" className="card-link">Login</Link></p>
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

export default Simpleregister