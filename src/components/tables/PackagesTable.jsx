import React, { useState, useEffect } from 'react'
import MaterialTable from "material-table";

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
import { useNavigate } from 'react-router-dom';

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

const PackagesTable = () => {

    const [CategoryData, SetCategoryData] = useState([])
    const [SubadminData, SetSubadminData] = useState([])
    const [name, Setname] = useState('')
    const [description, Setdescription] = useState('')
    const [price, Setprice] = useState('')
    const [duration, Setduration] = useState('')
    const [CoupanStatus, SetCoupanStatus] = useState('')
    const [Subadmin, SetSubadmin] = useState('')




    const [TabelId, SetTabelId] = useState('')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const Token = localStorage.getItem("AdminToken")

    const [loader, setloader] = useState(false)

    const navigate = useNavigate()


    useEffect(() => {

        GetPackageData("false")
        GetSubadminData()

    }, [])

    const GetSubadminData = () => {
        var requestOptions = {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + Token
            },
            redirect: 'follow'
        };
        setloader(true)

        fetch(`${Baseurl.baseUrl}/superadmin/subadmindata`, requestOptions)

            .then(response => response.json())
            .then(result => {
                if (result.status == true) {
                    setloader(false)
                    console.log("Subadmin==>", result.data)
                    SetSubadminData(result.data)
                }
                else {
                    // setLoader(true)
                    setloader(false)
                    console.log("result.message", result.message)
                    // Swal.fire({
                    //     title: "Oops",
                    //     text: result.message,
                    //     icon: "error",
                    //     confirmButtonColor: "#29BF12",
                    // });

                }

            }
                // console.log("result",result)
            )
            .catch(error => {
                setloader(false)
                console.log('error', error)
            }

            );
    }



    const GetPackageData = (a) => {

        console.log("getpackagedata==>", a)

        // var formdata = new FormData();
        // formdata.append("private", a);

        var requestOptions = {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + Token
            },
            // body: formdata,
            redirect: 'follow'
        };
        setloader(true)

        fetch(`${Baseurl.baseUrl}/superadmin/package?private=${a}`, requestOptions)

            .then(response => response.json())
            .then(result => {
                if (result.status == true) {
                    console.log("Private GetPackageData", result.data)
                    setloader(false)
                    SetCategoryData(result.data)
                }
                else {
                    // setLoader(true)
                    setloader(false)
                    // console.log("result.message", result.message)
                    // Swal.fire({
                    //     title: "Oops",
                    //     text: result.message,
                    //     icon: "error",
                    //     confirmButtonColor: "#29BF12",
                    // });

                }

            }
                // console.log("result",result)
            )
            .catch(error => {
                setloader(false)
                console.log('error', error)

            }

            );
    }

    const addCategory = () => {
        handleClose()

        var formdata = new FormData();
        formdata.append("name", name);
        formdata.append("description", description);
        formdata.append("price", price);
        formdata.append("duration", duration);
        formdata.append("private", isChecked);
        formdata.append("subadmin_email", isChecked ? Subadmin : null);

        var requestOptions = {
            method: 'POST',

            headers: {
                Authorization: "Bearer " + Token
            },
            body: formdata,
            redirect: 'follow'
        };
        setloader(true)
        fetch(`${Baseurl.baseUrl}/pacakge/add`, requestOptions)
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
                    Setname('')
                    Setdescription('')
                    Setprice('')
                    Setduration('')
                    setShow(false)
                    GetPackageData(isChecked2)
                    // setIsChecked2('')

                    // Navigate('/addcustomer')


                }
                else {
                    setloader(false)
                    // Swal.fire({
                    //     title: "Oops",
                    //     text: result.message,
                    //     icon: "error",
                    //     confirmButtonColor: "#29BF12",
                    // });
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
                setloader(false)
                console.log('error', error)
            }
             );
    }

    const handleInputChange = (event, func) => {
        func(event.target.value);
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
        formdata.append("name", name);
        formdata.append("description", description);
        formdata.append("price", price);
        formdata.append("duration", duration);
        formdata.append("status", CoupanStatus);


        var requestOptions = {
            method: 'PUT',

            headers: {
                Authorization: "Bearer " + Token
            },
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${Baseurl.baseUrl}/pacakge/update`, requestOptions)
            .then(response => response.json())
            .then(result => {

                // setloader(false)
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
                    setShow2(false)
                    GetPackageData(isChecked2)

                    // Navigate('/addcustomer')


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
            .catch(error =>{
                setloader(false)
                console.log('error', error)
            }
             );

    }


    const DeleteService = (e) => {

        console.log("value of delete id ==>", e)
        // setId(e)
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

        console.log("value of a==>", a)
        var formdata = new FormData();
        formdata.append("id", a);

        var requestOptions = {
            method: 'DELETE',
            body: formdata,
            headers: {
                Authorization: "Bearer " + Token
            },
            redirect: 'follow'
        };



        fetch(`${Baseurl.baseUrl}/pacakge/delete`, requestOptions)
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
                    GetPackageData(isChecked2)
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
            .catch(error =>{
                setloader(false)
                console.log('error', error)
            }
             );



    }




    const [isChecked, setIsChecked] = useState(false);

    // checkbox true or false
    const handleCheckboxChange = (event) => {
        console.log("baloch checked==>", event.target.checked)
        // GetPackageData(event.target.checked)
        setIsChecked(event.target.checked);
    };

    // second checkbox

    const [isChecked2, setIsChecked2] = useState(false);

    const handleCheckboxChange2 = (event) => {
        console.log("checkbox 2==>", event.target.checked)
        setIsChecked2(event.target.checked);
        // GetSubadminData()
        GetPackageData(event.target.checked)
    };


    const ActiveDeactive = (a) => {

        console.log("status==>", a.status)
        var formdata = new FormData();
        formdata.append("id", a.id);
        formdata.append("status", !a.status);

        var requestOptions = {
            method: 'PATCH',
            body: formdata,
            headers: {
                Authorization: "Bearer " + Token
            },
            redirect: 'follow'
        };



        fetch(`${Baseurl.baseUrl}/superadmin/pacakge/status`, requestOptions)
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
                    // GetCategoryData()
                    GetPackageData(isChecked2)
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
            .catch(error =>{
                setloader(false)
                console.log('error', error)
            }
             );

    }


    // function CopyToClipboardButton({ textToCopy }) {
        const handleCopyClick = async (textToCopy) => {
            try {
                await navigator.clipboard.writeText(textToCopy);
                console.log('Text copied to clipboard');
                toast.success("Link copied to clipboard", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        };

    //     return (
    //         <button onClick={handleCopyClick}>
    //             Copy to Clipboard
    //         </button>
    //     );
    // }

    // export default CopyToClipboardButton;

    const LinkGenerator = (data) => {
        console.log("LinkData data ==>", data)
        console.log("LinkData Packageid ==>", data.id)
        console.log("LinkData subadminid ==>", data.subadminid)

        // let text = `${firstName}${lastName}`;
        let text1 = data.id.concat('/')
        let text2 = data.subadminid
        let result = text1.concat(text2);
        
        let fulladdress= window.location.origin;
        let dash = "/";
        let  fulllocation=fulladdress+dash+"getpacklink/"
        let ahmed=fulllocation.concat(result)       

        console.log("ahmed==>",ahmed)

        handleCopyClick(ahmed)
        // console.log("shakeeb==>",result)
        // www.yoursite.com?myparam1={id1}&myparam2={id2}
        // navigate(`/getpacklink/${data.id}/${data.subadminid}`)
        // navigate(`/getpacklink/?SubAdmiId=${data.id}/?PackageAdmiId=${data.subadminid}`)

        // /?SubAdmiId={id1}&PackageAdmiId={id2}


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
                                {/* {Role == "addcustomer" ? "Add Customer" : "Upload File"} */}
                                Add Packages
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
                            <div className="dropdown float-md-right " >
                                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select Private Package</Form.Label>
                            <Form.Control
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                placeholder="Private Package"
                                autoFocus
                            />
                        </Form.Group> */}
                                {/* <div className='' > */}
                                <label>
                                    Private Package :
                                    <input
                                        type="checkbox"
                                        className='ml-1'
                                        checked={isChecked2}
                                        onChange={handleCheckboxChange2}
                                    />

                                </label>
                                {/* </div> */}



                                <button
                                    onClick={handleShow}
                                    className="btn btn-danger  round btn-glow px-2 mb-2 mr-2 ml-2" id="dropdownBreadcrumbButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {/* {Role == "addcustomer" ? "Add Customer" : "Bulk Upload"} */}Add Packages
                                </button>


                                {/* <div className="dropdown-menu" aria-labelledby="dropdownBreadcrumbButton"><a className="dropdown-item" href="#"><i className="la la-calendar-check-o" /> Calender</a>
                                    <a className="dropdown-item" href="#"><i className="la la-cart-plus" /> Cart</a>
                                    <a className="dropdown-item" href="#"><i className="la la-life-ring" /> Support</a>
                                    <div className="dropdown-divider" /><a className="dropdown-item" href="#"><i className="la la-cog" /> Settings</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="content-body">
                        <div style={{ maxWidth: "100%" }}>
                            <MaterialTable
                                icons={tableIcons}
                                columns={
                                    isChecked2 ?
                                        [
                                            // render: price => `${price}`  }
                                            { title: "Name", field: "name" },
                                            // isChecked !=="false" ?
                                            { title: "Hospital Email", field: "subadmin" },
                                            { title: "Description", field: "description" },
                                            {
                                                title: "Price", field: 'price', render: rowData =>

                                                    // this for multiple contenation
                                                    //  ` $ ${rowData.price} ${rowData.name}`
                                                    ` $ ${rowData.price}`

                                            },
                                            {
                                                title: "Duration", field: 'duration', render: rowData =>



                                                    // this for multiple contenation
                                                    //  ` $ ${rowData.price} ${rowData.name}`
                                                    ` ${rowData.duration}  mon`

                                            },

                                            {
                                                title: "Package Status", field: "status", render: rowData =>
                                                    <>

                                                        {
                                                            // console.log("rowdata of status",rowData.status)
                                                            rowData.status == true ?
                                                                // <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ActiveServices(rowData)}   >Active </Button>
                                                                <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ActiveDeactive(rowData)}    >Active </Button>
                                                                :
                                                                // <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ActiveServices(rowData)}   >Deactive </Button>
                                                                <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ActiveDeactive(rowData)}    >Deactive </Button>

                                                        }
                                                    </>

                                            },
                                            {
                                                title: "Generate Link", render: rowData =>
                                                    <>

                                                        {
                                                            // console.log("rowdata of status",rowData.status)
                                                            // <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ActiveServices(rowData)}   >Active </Button>
                                                            <Button className='btn btn-danger  round btn-glow px-2' onClick={() => LinkGenerator(rowData)}    >Get Link </Button>


                                                        }
                                                    </>
                                            },

                                        ]
                                        :
                                        [
                                            { title: "Name", field: "name" },
                                            // {  title: "Subadmin", field: "subadmin" , render:rowData =>

                                            //    rowData.subadmin ? subadmin : "not"

                                            //  },
                                            { title: "Description", field: "description" },
                                            {
                                                title: "Price", field: 'price', render: rowData =>

                                                    // this for multiple contenation
                                                    //  ` $ ${rowData.price} ${rowData.name}`
                                                    ` $ ${rowData.price}`

                                            },
                                            {
                                                title: "Duration", field: 'duration', render: rowData =>



                                                    // this for multiple contenation
                                                    //  ` $ ${rowData.price} ${rowData.name}`
                                                    ` ${rowData.duration}  mon`

                                            },

                                            {
                                                title: "Package Status", field: "status", render: rowData =>
                                                    <>

                                                        {
                                                            // console.log("rowdata of status",rowData.status)
                                                            rowData.status == true ?
                                                                // <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ActiveServices(rowData)}   >Active </Button>
                                                                <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ActiveDeactive(rowData)}    >Active </Button>
                                                                :
                                                                // <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ActiveServices(rowData)}   >Deactive </Button>
                                                                <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ActiveDeactive(rowData)}    >Deactive </Button>

                                                        }
                                                    </>

                                            },
                                            // {
                                            //     title: "Generate Link", render: rowData =>
                                            //         <>

                                            //             {
                                            //                 // console.log("rowdata of status",rowData.status)
                                            //                     // <Button className='btn btn-danger  round btn-glow px-2' onClick={() => ActiveServices(rowData)}   >Active </Button>
                                            //                     <Button className='btn btn-danger  round btn-glow px-2' onClick={() => LinkGenerator(rowData)}    >Get Link </Button>


                                            //             }
                                            //         </>
                                            // },

                                        ]

                                }
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
                                                console.log("edit btn id ==>", rowData.uid)
                                                console.log("edit btn name ==>", rowData.name)
                                                Setname(rowData.name)
                                                Setdescription(rowData.description)
                                                Setprice(rowData.price)
                                                Setduration(rowData.duration)
                                                SetCoupanStatus(rowData.status)
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
                                title={isChecked2 ? "Private Packages " : "Public Packages"}
                            // title={isChecked2 == "true" || "True" ? "Private Packages " : "Public Packages"}


                            />
                        </div>
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
                    <Modal.Title>Add Packages </Modal.Title>
                    <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                </Modal.Header>
                <Modal.Body>
                    <Form>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                autoFocus
                                onChange={(e) => handleInputChange(e, Setname)}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                autoFocus
                                onChange={(e) => handleInputChange(e, Setdescription)}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                placeholder="Price"
                                autoFocus
                                onChange={(e) => Setprice(e.target.value)}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Duration (in months)</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                placeholder="Duration"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => Setduration(e.target.value)}
                            // value={price}

                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleCheckbox">
                            <Form.Check
                                label="Select Private Package"
                                type="checkbox"
                                inline
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select Private Package</Form.Label>
                            <Form.Control
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                placeholder="Private Package"
                                autoFocus
                            />
                        </Form.Group> */}


                        {
                            isChecked ? <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                <Form.Label>Select Hospital Email </Form.Label>
                                <Form.Control
                                    as="select"
                                    // value={Subadmin}
                                    onChange={(e) => handleInputChange(e, SetSubadmin)}
                                // value={categoryid}
                                >
                                    <option value="selectcatgory">Select Hospital Email</option>

                                    {
                                        SubadminData.map((data, index) => {
                                            console.log("select subadmin==>", data.email)
                                            return (
                                                <>
                                                    <option key={index} value={data?.email} >{data.email}</option>

                                                </>
                                            )
                                        })



                                    }

                                    {/* <option value="True">Active</option>
                            <option value="False">Deactive</option> */}

                                </Form.Control>



                            </Form.Group>
                                :
                                null
                        }






                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addCategory} >
                        Add Packages
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
                    <Modal.Title>Edit Packages </Modal.Title>
                    <AiFillCloseCircle onClick={handleClose2} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                </Modal.Header>
                <Modal.Body>
                    <Form>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                autoFocus
                                value={name}
                                onChange={(e) => handleInputChange(e, Setname)}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                autoFocus
                                value={description}
                                onChange={(e) => handleInputChange(e, Setdescription)}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                placeholder="Price"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => Setprice(e.target.value)}
                                value={price}

                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Duration (in months)</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                placeholder="Duration"
                                autoFocus
                                // onChange={(e) => handleEdited(e, setLname2)}
                                onChange={(e) => Setduration(e.target.value)}
                                value={duration}

                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>Package Status</Form.Label>
                            <Form.Control
                                as="select"
                                // value={type}
                                onChange={(e) => handleInputChange(e, SetCoupanStatus)}
                            // value={categoryid}
                            >
                                <option  value="True">{CoupanStatus ? "Active" : "Deactive"}</option>


                                <option value="True">Active</option>
                                <option value="False">Deactive</option>

                            </Form.Control>



                        </Form.Group>

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

export default PackagesTable