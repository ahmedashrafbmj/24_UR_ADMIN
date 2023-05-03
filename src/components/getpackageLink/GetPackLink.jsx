import React, { useState, useEffect } from 'react'
import MaterialTable from "material-table";
import StripeCheckout from 'react-stripe-checkout';

import { forwardRef } from 'react';

import Swal from 'sweetalert2';
import { toast } from 'react-toastify';


import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import DeleteIcon from '@material-ui/icons/Delete';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

import { AiFillCloseCircle, AiOutlineConsoleSql } from "react-icons/ai";
import Baseurl from '../../Baseurl/Baseurl';
import { Loader } from 'react-overlay-loader';
import { useLocation, useNavigate } from 'react-router-dom';



const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const GetPackLink = ({ Role }) => {


    const [CategoryData, SetCategoryData] = useState('')
    const [fname, Setfname] = useState('')
    const [lname, Setlname] = useState('')
    const [email, Setemail] = useState('')
    const [contact, Setcontact] = useState('')
    const [password, Setpassword] = useState('')
    const [address, Setaddress] = useState('')


    const location = useLocation()

    //   const [searchParams,setsearchParams] =useSearchParams() 


    // console.log("location==>", location)

    let splitit = location.pathname.split('/')

    console.log("SubAdmiId==>", splitit[2])
    console.log("PackageId==>", splitit[3])


    console.log("Role==>", Role)

    const [CoupanStatus, SetCoupanStatus] = useState('')

    const [TabelId, SetTabelId] = useState('')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const Token = localStorage.getItem("SubAdminToken")

    const AdminToken = localStorage.getItem("AdminToken")

    const navigate = useNavigate()





    const [loader, setloader] = useState(false)


    useEffect(() => {
        if (Token !== null) {
            GetSubadmin()
        }
    }, [])

    const GetSubadmin = () => {


        var requestOptions = {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + Token
            },
            redirect: 'follow'
        };
        setloader(true)
        fetch(`${Baseurl.baseUrl}/superadmin/privatepackage?packageid=${splitit[2]}&subadminid=${splitit[3]}`, requestOptions)

            .then(response => response.json())
            .then(result => {
                if (result.status == true) {
                    console.log("GetPackLinkapi==>", result.package)
                    setloader(false)
                    SetCategoryData(result.package)
                }
                else {
                    navigate('/hospital/login')
                    setloader(false)
                    console.log("result.message", result.message)
                
                }

            }
            )
            .catch(error => {
                setloader(false)
                console.log('error', error)

            });

    }

    const addCategory = () => {
        handleClose()

        var formdata = new FormData();
        formdata.append("fname", fname);
        formdata.append("lname", lname);
        formdata.append("email", email);
        formdata.append("password", password);
        formdata.append("contact", contact);
        formdata.append("address", address);


        var requestOptions = {
            method: 'POST',

            headers: {
                Authorization: "Bearer " + Token
            },
            body: formdata,
            redirect: 'follow'
        };
        setloader(true)
        fetch(`${Baseurl.BaseUrlVariable}/userregistration`, requestOptions)
            .then(response => response.json())
            .then(result => {

                setloader(false)
                if (result.status == true) {


                    console.log("getcustomerapi ===>", result)

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

                    // setProfileImage('')
                    // setSelectProfileImage('')
                    Setfname('')
                    Setlname('')
                    Setemail('')
                    Setcontact('')
                    Setpassword('')
                    setShow(false)
                    GetSubadmin()
                }
                else {
                    setloader(false)
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
            .catch(error => {
                console.log('error', error)
            }

            );
    }

    const handleInputChange = (event, func) => {
        func(event.target.value);
        // setDisable(false);
        console.log('dis')
    }

    const Edited = (e) => {
        console.log("i am running")
        console.log("value of rowdata id is ==>", e)
        SetTabelId(e)
        handleShow2()
    }

    const EditCategory = () => {
        var formdata = new FormData();
        formdata.append("id", TabelId);
        formdata.append("fname", fname);
        formdata.append("lname", lname);
        formdata.append("contact", contact);
        formdata.append("password", password);
        // formdata.append("email", email);
        formdata.append("address", address);
        // formdata.append("status", CoupanStatus);


        var requestOptions = {
            method: 'PUT',

            headers: {
                Authorization: "Bearer " + AdminToken
            },
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${Baseurl.baseUrl}/superadmin/subadminedit`, requestOptions)
            .then(response => response.json())
            .then(result => {

                if (result.status == true) {


                    console.log("getcustomerapi ===>", result)

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
                    GetSubadmin()
                    setShow2(false)

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
            .catch(error => {
                console.log('error', error)
            });
    }


    const DeleteService = (e) => {

        console.log("value of delete id ==>", e)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#29BF12',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                ConfirmDelete(e)

            }
        })

    }


    const ConfirmDelete = (a) => {
        console.log("id in delete==>", a)
        var formdata = new FormData();
        formdata.append("id", a);

        var requestOptions = {
            method: 'DELETE',
            body: formdata,
            headers: {
                Authorization: "Bearer " + AdminToken
            },
            redirect: 'follow'
        };



        fetch(`${Baseurl.baseUrl}/superadmin/subadmindelete`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status == true) {
                    console.log(result)

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
                    GetSubadmin()
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

    const ActiveDeactive = (a) => {

        console.log("status==>", a.status)
        var formdata = new FormData();
        formdata.append("id", a.id);
        formdata.append("status", !a.status);

        var requestOptions = {
            method: 'PATCH',
            body: formdata,
            headers: {
                Authorization: "Bearer " + AdminToken
            },
            redirect: 'follow'
        };



        fetch(`${Baseurl.baseUrl}/superadmin/subadminstatus`, requestOptions)
            .then(response => response.json())
            .then(result =>
            {
                if (result.status == true) {
                    console.log(result)
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
                    // GetCategoryData()
                    GetSubadmin()
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

    const onToken = (token) => {
        console.log("my stripe token==>", token)
        console.log("id to pas", token.id)
        BuyPackage(token.id, "stripe")
    }

    const paymentStripe = () => {
        // e.preventDefault()
        // console.log("click")
        let a = document.getElementById('paymentmethod')
        a.children[0].click()
        // a.children[0].click()
    }


    const BuyPackage = (stripeid) => {
        console.log("stripeid", stripeid)

        // api call
        let formdata = new FormData();
        formdata.append("packageid", CategoryData?.id);
        formdata.append("token", stripeid);


        var requestOptions = {
            method: 'POST',

            headers: {
                Authorization: "Bearer " + Token
            },
            body: formdata,
            redirect: 'follow'
        };
        setloader(true)
        // "https://pyurelyecommerce.pythonanywhere.com/api/categorys"
        fetch(`${Baseurl.BaseUrlVariable}/subscription`, requestOptions)
            .then(response => response.json())
            .then(result => {

                setloader(false)
                if (result.status == true) {


                    console.log("stripapi==> ===>", result)

                    // navigate("/subadmin/login")

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

                    // setProfileImage('')
                    // setSelectProfileImage('')
                    // Navigate('/addcustomer')


                }
                else {
                    setloader(false)
                    toast.error(result.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });}
            }
            )
            .catch(error => {
                console.log('error', error)}

            );

        //api call end

    }

    return (
        <>
            {loader == true ?
                <Loader fullPage loading /> : null
            }

            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                            <h3 className="content-header-title mb-0 d-inline-block">
                                {/* {Role == "Superadmin" ? "Edit User" : "Add User"} */}
                                Private Packages

                            </h3>
                            {/* <div className="row breadcrumbs-top d-inline-block">
                                <div className="breadcrumb-wrapper col-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item"><a href="#">Gallery</a>
                                        </li>
                                        <li className="breadcrumb-item active">Gallery Media Grid
                                        </li>
                                    </ol>
                                </div>
                            </div> */}
                        </div>
                        <div className="content-header-right col-md-6 col-12">
                            <div className="dropdown float-md-right">
                                {Role == "Subadmin" ?
                                    <button
                                        onClick={handleShow}
                                        className="btn btn-danger  round btn-glow px-2 mb-2 mr-2" id="dropdownBreadcrumbButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Add User

                                    </button>
                                    : null

                                }
                            </div>
                        </div>
                    </div>
                    <div className="content-body">
                        {/* get packages start */}

                        <div className="row mt-2">


                            {/* {               
                                        CategoryData.map((data, index) => {
                                            return ( */}
                            {/* <> */}
                            <div className="col-xl-4 col-md-6 col-12">
                                <div className="card profile-card-with-cover">
                                    <div className="card-content card-deck text-center">
                                        <div className="card box-shadow">
                                            <div className="card-header pb-0">
                                                <h2 className="my-0 font-weight-bold">{CategoryData.name}</h2>
                                            </div>
                                            <div className="card-body">
                                                <h1 className="pricing-card-title">$ {CategoryData.price}
                                                </h1>
                                                <ul className="list-unstyled mt-2 mb-2">
                                                    <li>{CategoryData.description}</li>
                                                </ul>
                                                <div id='paymentmethod' className='d-none'>
                                                    <StripeCheckout
                                                        token={onToken}
                                                        // stripeKey="my_PUBLISHABLE_stripekey"
                                                        stripeKey="pk_test_51LNt6zKhmRit377zkPatzgi9ckH1GU0kWpMkAUNU3BX3VucekD9bkV6QFodRelAmt7vDAgoIdpYUeGtuGWfQlcWr00bTsqA7Dl"
                                                        // stripeKey="pk_test_51LNt6zKhmRit377zkPatzgi9ckH1GU0kWpMkAUNU3BX3VucekD9bkV6QFodRelAmt7vDAgoIdpYUeGtuGWfQlcWr00bTsqA7Dl"
                                                        name='payment'
                                                    />
                                                </div>
                                                <button type="button" className="btn btn-lg btn-block btn-outline-info" onClick={() => paymentStripe(
                                                    // {
                                                    //     uid: CategoryData.id
                                                    //     , name: CategoryData.name
                                                    //     , price: CategoryData.price
                                                    // }
                                                )}  >Buy Package</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* </>
                                            )
                                        })


                                    } */}

                        </div>

                        {/* get packages end */}
                        {/* <div style={{ maxWidth: "100%" }}> */}
                        {/* <MaterialTable
                                icons={tableIcons}
                                columns={[
                                    // render: price => `${price}`  }
                                    { title: "First Name", field: "fname" },
                                    { title: "Last Name", field: "lname" },
                                    { title: "Email", field: "email" },
                                    { title: "Contact", field: "contact" },
                                    { title: "Address", field: "address" },
                                    
                                    {
                                        title: "SubAdmin Status", field: "status", render: rowData =>

                                        // console.log("rowdata of status",rowData.status)
                                            <>

                                                {
                                                    rowData.status == true ? 

                                                    <Button className='btn btn-danger  round btn-glow px-2'  onClick={()=>ActiveDeactive(rowData)}   >Active </Button>
                                                        :
                                                        <Button className='btn btn-danger  round btn-glow px-2'  onClick={()=>ActiveDeactive(rowData)}    >Deactive </Button>

                                                }
                                            </>

                                    },

                                ]}
                                data={
                                    CategoryData
                                }
                                actions={
                                    [
                                        {
                                            icon: Edit,
                                            tooltip: 'Edit Packages',
                                            onClick: (event, rowData) => {
                                                // console.log("edit btn ==>", rowData.SId)
                                                console.log("edit rowData ==>", rowData)
                                                console.log("edit btn id ==>", rowData.tableData.id)
                                                console.log("edit btn name ==>", rowData.fname)
                                                Setfname(rowData.fname)
                                                Setlname(rowData.lname)
                                                Setemail(rowData.email)
                                                Setcontact(rowData.contact)
                                                Setaddress(rowData.address)
                                                // Setduration(rowData.duration)

                                                // setFname2(rowData.Fname)
                                                // setLname2(rowData.Lname)
                                                // setContact2(rowData.ContactNo)
                                                // setId2(rowData.id)
                                                Edited(rowData.id)
                                                // handleShow2()
                                            }
                                        },
                                        {

                                            icon: DeleteIcon,
                                            tooltip: 'Delete User ',
                                            onClick: (event, rowData) => {
                                                console.log("rowdata", rowData)

                                                DeleteService(rowData.id)

                                            }
                                        },

                                    ]

                                }
                                options={{
                                    actionsColumnIndex: -1
                                }}
                                title=""
                            /> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>



            {/* add Packages modal */}
            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Change Password </Modal.Title>

                </Modal.Header> */}
                <Modal.Header >
                    {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
                    <Modal.Title>Add User </Modal.Title>
                    <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                </Modal.Header>
                <Modal.Body>
                    <Form>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                autoFocus
                                onChange={(e) => handleInputChange(e, Setfname)}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                autoFocus
                                onChange={(e) => handleInputChange(e, Setlname)}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                min="0"
                                placeholder="Email"
                                autoFocus
                                onChange={(e) => handleInputChange(e, Setemail)}
                            // onChange={(e) => handleEdited(e, setemail)}
                            // onChange={(e) => Setprice(e.target.value)}
                            // value={price}

                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"

                                placeholder="Password"
                                autoFocus
                                onChange={(e) => handleInputChange(e, Setpassword)}
                            // onChange={(e) => handleEdited(e, setpassword)}
                            // onChange={(e) => Setduration(e.target.value)}
                            // value={price}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Contact"
                                min="0"
                                autoFocus
                                onChange={(e) => handleInputChange(e, Setcontact)}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                min="0"
                                placeholder="Address"
                                autoFocus
                                onChange={(e) => handleInputChange(e, Setaddress)}
                            // onChange={(e) => handleEdited(e, setpassword)}
                            // onChange={(e) => Setduration(e.target.value)}
                            // value={price}
                            />

                        </Form.Group>







                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addCategory} >
                        Add User
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* edit category modal 2 */}
            <Modal show={show2} onHide={handleClose2}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Change Password </Modal.Title>

                </Modal.Header> */}
                <Modal.Header >
                    {/* <i className='fa fa-close'>baloch</i>
                    <AiFillCloseCircle fontSize={20} /> */}
                    <Modal.Title>Edit User </Modal.Title>
                    <AiFillCloseCircle onClick={handleClose2} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                </Modal.Header>
                <Modal.Body>
                    <Form>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                autoFocus
                                value={fname}
                                onChange={(e) => handleInputChange(e, Setfname)}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                autoFocus
                                value={lname}
                                onChange={(e) => handleInputChange(e, Setlname)}
                            />

                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                min="0"
                                placeholder="Email"
                                autoFocus
                                onChange={(e) => handleInputChange(e, Setemail)}
                                value={email}

                            />

                        </Form.Group> */}

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                placeholder="contact"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setcontact)}
                                // onChange={(e) => Setduration(e.target.value)}
                                onChange={(e) => handleInputChange(e, Setcontact)}
                                value={contact}

                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="contact"
                                autoFocus
                                onChange={(e) => handleInputChange(e, Setaddress)}
                                value={address}

                            />

                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>Package Status</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={(e) => handleInputChange(e, SetCoupanStatus)}
                            >
                                <option value="selectcatgory">Select Package</option>


                                <option value="True">Active</option>
                                <option value="False">Deactive</option>

                            </Form.Control>



                        </Form.Group> */}

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={EditCategory} >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>




        </>
    )
}

export default GetPackLink