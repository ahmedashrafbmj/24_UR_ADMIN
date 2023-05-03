import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { Loader } from 'react-overlay-loader';
import Baseurl from '../../Baseurl/Baseurl';
import { toast } from 'react-toastify';
const SelectMultiPrediction = () => {
    const UserToken = localStorage.getItem("UserToken")
    const [loader, setloader] = useState(false)
    const [SelectedData, SetSelectedData] = useState([])

    const [store, setstore] = useState([])

    const [StoreResult, setStoreResult] = useState(null)

    const [PatientStatus, setPatientStatus] = useState('')
    console.log("SelectedData baloch", SelectedData)
    useEffect(() => {

        SelectData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const SelectData = () => {

        var requestOptions = {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + UserToken
            }
        };
        setloader(true)

        fetch(`${Baseurl.UserBaseUrl}/predictdisease`, requestOptions)
            .then(response =>

                response.json())
            .then(result => {

                console.log("my full data===>", result)
                console.log("my result.data===>", result.data)
                SetSelectedData(result.data)
                setloader(false)

            }
            )
            .catch(error => {
                setloader(false)
                console.log('error', error)
            }

            );
    }


    const handleChange = (selected) => {
        // SetSelectedData(selected);
        console.log("select data===>,", selected)
        setstore(selected)
        // ShowSelectData(selected)
    };


    const ShowSelectData = () => {


        let ahmed = [];

        for (let a = 0; a < store.length; a++) {
            console.log("elements", store[a]?.value)

            ahmed.push(store[a]?.value)
        }

        console.log("ahmed===>", ahmed)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer" + UserToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "symptom": ahmed
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        setloader(true)

        fetch(`${Baseurl.UserBaseUrl}/predictdisease`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === true) {
                    setloader(false)
                    console.log("")
                    setStoreResult(result.message)
                    setPatientStatus(result.result)
                    console.log("Final Diseases result===>", result.message)


                    console.log(result)
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

    return (
        <>
            {loader === true ?
                <Loader fullPage loading /> : null
            }
            {/* /user/predictdisease */}

            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row ">
                        <div className="content-header-left col-md-4 col-12 mb-2 breadcrumb-new">
                            <h3 className="content-header-title mb-0 d-inline-block">
                                Select Symptoms
                            </h3>
                        </div>

                        <div className="content-header-right col-md-6 col-12 mb-2">

                            <Select
                                menuPortalTarget={document.body}
                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                isMulti
                                name="colors"
                                placeholder="Select Multiple Symptoms"
                                options={SelectedData}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                onChange={handleChange}
                            />


                        </div>
                        <div className='col-md-2 col-12' >
                            <button
                                className="btn btn-danger  round btn-glow px-2 mb-2 mr-2" id="dropdownBreadcrumbButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => ShowSelectData()}>
                                Predict Diseases
                            </button>
                        </div>
                    </div>



                    <div className="content-body ">




                        <div className="row">
                            <div className="col-md-12">
                                <div className="card diseases_card">
                                    <div className="card-content collpase show">
                                        <div className="card-body">
                                            <div className="col-lg-6">
                                                <div className="mb-1">
                                                    <h1 className='mt-4 mb-2' style={{ fontWeight: "700" }} >Possible Diseases </h1>
                                                    <h2 className="mb-0">Patient Status : {PatientStatus}</h2>
                                                </div>
                                                <div className="card">
                                                    <ul className="list-group" id="basic-list-group">
                                                        {
                                                            StoreResult?.map((data, index) => {
                                                                return (
                                                                    <>
                                                                        <li key={index} className="list-group-item" style={{ fontSize: "25px" }} >{data}</li>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>





                </div>
            </div>
        </>
    )
}

export default SelectMultiPrediction