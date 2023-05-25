import React, { useState} from 'react'
import {  toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { AiFillCloseCircle,} from "react-icons/ai";
import Baseurl from '../../Baseurl/Baseurl'
import { Loader } from 'react-overlay-loader';
import { useNavigate } from 'react-router-dom';
const Addsubadmin = ({Role}) => {

    console.log("Role===>",Role)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const UserToken = localStorage.getItem("UserToken")
    const navigate = useNavigate()
    const[FileUpload,setFileUpload]=useState('')
    const[Addsymptoms,setAddsymptoms]=useState('')
    const[ResultMessage,setResultMessage]=useState([])
    const[DataResultMsg,setDataResultMsg]=useState('')
    const [loader, setloader] = useState(false)
    const uploadFileFunct = () => {
        handleClose()

        var formdata = new FormData();
        formdata.append("file", FileUpload);
        formdata.append("input_symptoms",null);
        var requestOptions = {
            method: 'POST',

            headers: {
                Authorization: "Bearer " + UserToken
            },
            body: formdata,
            redirect: 'follow'
        };
        setloader(true)
        fetch(`${Baseurl.UserBaseUrl}/predictdisease`, requestOptions)
            .then(response => response.json())
            .then(result => {

                setloader(false)
                if (result.status === true) {


                    console.log("result ====>", result.message)

                    // let result=

                    // let data=result.message

                    // let formattedData = data.map((item, index) => ({
                    //     id: index + 1,  
                    //     name: item
                    //   }));

                    // setfileMessage(formattedData)

                    setResultMessage(result.message)
                    setDataResultMsg(result.result)

                    
                     
                    

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
                setloader(false)
                console.log('error', error)
            }

            );
    }


    const AddSymptomsfun = () =>{

        console.log("Addsymptoms",Addsymptoms)

        handleClose2()

        var formdata = new FormData();
        formdata.append("input_symptoms",Addsymptoms);
        var requestOptions = {
            method: 'POST',

            headers: {
                Authorization: "Bearer " + UserToken
            },
            body: formdata,
            redirect: 'follow'
        };
        setloader(true)
        fetch(`${Baseurl.UserBaseUrl}/predictdisease`, requestOptions)
            .then(response => response.json())
            .then(result => {

                setloader(false)
                if (result.status === true) {
                    console.log("result ====>", result.message)
                    setResultMessage(result.message)
                    setDataResultMsg(result.result)
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
                setloader(false)
                console.log('error', error)
            });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    }

    const handleInputChange = (event, func) => {
        func(event.target.files[0]);
        console.log('dis',event.target.files)
    }

    // const Edited = (e) => {
    //     console.log("i am running")
    //     console.log("value of rowdata id is ===>", e)
    //     SetTabelId(e)
    //     handleShow2()
    // }


    // const EditCategory = () => {

       
            
    //     var formdata = new FormData();
    //     formdata.append("id", TabelId);
    //     formdata.append("fname", fname);
    //     formdata.append("lname", lname);
    //     formdata.append("contact", contact);
    //     formdata.append("password", password);
    //     formdata.append("address", address);


    //     var requestOptions = {
    //         method: 'PUT',

    //         headers: {
    //             Authorization: "Bearer " + AdminToken
    //         },
    //         body: formdata,
    //         redirect: 'follow'
    //     };

    //     fetch(`${Baseurl.baseUrl}/superadmin/subadminedit`, requestOptions)
    //         .then(response => response.json())
    //         .then(result => {

    //             if (result.status === true) {


    //                 console.log("getcustomerapi ====>", result)

    //                 toast.success(result.message, {
    //                     position: "top-right",
    //                     autoClose: 5000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "light",
    //                     });
    //                     GetSubadmin()
    //                 setShow2(false)

    //             }
    //             else {
    //                 toast.error(result.message, {
    //                     position: "top-right",
    //                     autoClose: 5000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "light",
    //                     });


    //             }



    //         }
    //         )
    //         .catch(error => {
    //             console.log('error', error)
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Oops...',
    //                 text: error,
    //                 confirmButtonColor: "#03bafe",
    //             })

    //         }

    //         );

        
    // }


    // const DeleteService = (e) => {

    //     console.log("value of delete id ===>", e)
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#29BF12',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {

    //             ConfirmDelete(e)

    //         }
    //     })

    // }


    // const ConfirmDelete = (a) => {


        

            
    //     console.log("id in delete===>", a)
    //     var formdata = new FormData();
    //     formdata.append("id",a);

    //     var requestOptions = {
    //         method: 'DELETE',
    //         body: formdata,
    //         headers: {
    //             Authorization: "Bearer " + AdminToken
    //         },
    //         redirect: 'follow'
    //     };

     

    //     fetch(`${Baseurl.baseUrl}/superadmin/subadmindelete`, requestOptions)
    //         .then(response => response.json())
    //         .then(result =>
    //         {
    //             if (result.status === true) {
    //                 console.log(result)

    //                 toast.success(result.message, {
    //                     position: "top-right",
    //                     autoClose: 5000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "light",
    //                     });
    //                 GetSubadmin()
    //             }
    //             else {
    //                 toast.error(result.message, {
    //                     position: "top-right",
    //                     autoClose: 5000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "light",
    //                     });
    //             }


    //         }
    //         )
    //         .catch(error => console.log('error', error));

       




    // }

    // const ActiveDeactive = (a) =>{

    //     console.log("status===>",a.status)
    //     var formdata = new FormData();
    //     formdata.append("id",a.id);
    //     formdata.append("status",!a.status);

    //     var requestOptions = {
    //         method: 'PATCH',
    //         body: formdata,
    //         headers: {
    //             Authorization: "Bearer " + AdminToken
    //         },
    //         redirect: 'follow'
    //     };

     

    //     fetch(`${Baseurl.baseUrl}/superadmin/subadminstatus`, requestOptions)
    //         .then(response => response.json())
    //         .then(result =>
    //         {
    //             if (result.status === true) {
    //                 console.log(result)
    //                 toast.success(result.message, {
    //                     position: "top-right",
    //                     autoClose: 5000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "light",
    //                     });
    //                 GetSubadmin()
    //             }
    //             else {
    //                 toast.error(result.message, {
    //                     position: "top-right",
    //                     autoClose: 5000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "light",
    //                     });
    //             }


    //         }
    //         )
    //         .catch(error => console.log('error', error));

    // }


    return (
        <>
            {loader === true ?
                <Loader fullPage loading /> : null
            }

            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                            <h3 className="content-header-title mb-0 d-inline-block">
                                {/* {Role === "Superadmin" ? "Edit User" : "Add User"} */}
                            Upload File
                                
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
                            <button
                             onClick={handleShow2}
                             className="btn btn-danger  round btn-glow px-2 mb-2 mr-2" id="dropdownBreadcrumbButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Add Symptoms
                         
                         </button>
                            <button
                             onClick={()=>navigate('/staff/predictform')}
                             className="btn btn-danger  round btn-glow px-2 mb-2 mr-2" id="dropdownBreadcrumbButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Add PredictionForm
                         
                         </button>
                            <button
                             onClick={handleShow}
                             className="btn btn-danger  round btn-glow px-2 mb-2 mr-2" id="dropdownBreadcrumbButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             Upload File
                         
                         </button>
                            {/* {Role === "Subadmin" ? 
                             <button
                             onClick={handleShow}
                             className="btn btn-danger  round btn-glow px-2 mb-2 mr-2" id="dropdownBreadcrumbButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             Add User
                         
                         </button>
                         : null

                        } */}
                            </div>
                        </div>
                    </div>
                    <div className="content-body">

                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="card diseases_card">
                                                <div className="card-content collpase show">
                                                    <div className="card-body">
                                                      {/* <h1>Selected</h1> */}
                                                        {/* <h1>Possible Diseases </h1> */}
                                                        <div className="col-lg-6">
                                                   <div className="mb-1">
                                                      <h1 className='mt-4 mb-2' style={{fontWeight:"700"}} >Possible Diseases </h1>
                                                       {/* <h2 className="mb-0"> <b>Result</b> </h2> */}
                                                       <h2 className="mb-0"> <b>Result</b>  : {DataResultMsg} </h2>
                                                       {/* <small className="text-muted">The most basic list group is simply an unordered list with list items,
                                                           and the proper classes.</small> */}
                                                   </div>
                                                   {/* <div className="card">
                                                       <ul className="list-group" id="basic-list-group">
                                                       {
                                                        ResultMessage?.map((data,index)=>{
                                                            return(
                                                                <>
                                                                <li key={index} className="list-group-item" style={{fontSize:"25px"}} >{data}</li>
                                                                </>
                                                            )
                                                        })
                                                       }

                                                       </ul>
                                                   </div> */}
                                               </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                    </div>
                </div>
            </div>



            {/* add Packages modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                  
                    <Modal.Title>Upload File </Modal.Title>
                    <AiFillCloseCircle onClick={handleClose} style={{ marginLeft: "160", cursor: "pointer" }} fontSize={40} />

                </Modal.Header>
                <Modal.Body>
                    <Form>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Upload File</Form.Label>
                            <Form.Control
                                type="file"
                                placeholder="First Name"
                                autoFocus
                                onChange={(e) => handleInputChange(e, setFileUpload)}
                                style={{background:"#ffffff47",color:"white"}}

                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>uploadFileFunct()} >
                        Submit File
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* modal 2 add symptoms */}

            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header >
                  
                    <Modal.Title>Add Symptoms </Modal.Title>
                    <AiFillCloseCircle onClick={handleClose2} style={{ marginLeft: "160", cursor: "pointer",color:"black", }} fontSize={40} />

                </Modal.Header>
                <Modal.Body>
                    <Form>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Add Symptoms</Form.Label>

                              <Form.Control 
                                 type="text"
                                 placeholder="Symptom"
                                 autoFocus
                                 onChange={(e)=>setAddsymptoms(e.target.value)}
                                 style={{background:"#ffffff47",color:"white"}}
                              as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    <Button variant="primary" style={{background:"black"}} onClick={()=>AddSymptomsfun()} >
                        Submit 
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* edit category modal 2 */}
            {/* <Modal show={show2} onHide={handleClose2}>
                <Modal.Header >
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

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                placeholder="contact"
                                autoFocus
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

                        </Form.Group> */}

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

                    {/* </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={EditCategory} >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal> */}




        </>
    )
}

export default Addsubadmin