import React, { useState, useEffect } from "react";
import Pricing from "../Pricing/Pricing";
import Baseurl from "../../Baseurl/Baseurl";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const Dashboardecommerce = ({ Role }) => {
  const PackageId = localStorage.getItem("PackageId");
  // console.log("textToCopy ==>",textToCopy )

  // const Dashboardecommerce = ({ Role ,textToCopy }) => {

  //     console.log("textToCopy ==>",textToCopy )

  const [isHovering, setIsHovering] = useState(false);

  const [CategoryData, SetCategoryData] = useState([]);
  const [CounterData, SetCounterData] = useState();
  const [UserCount, setUserCount] = useState("");
  const Token = localStorage.getItem("AdminToken");
  const SubAdminToken = localStorage.getItem("SubAdminToken");

  const [loader, setloader] = useState(false);

  console.log("role=SuperAdmin", Role);
  const paymentStripe = () => {
    // e.preventDefault()
    // console.log("click")
    let a = document.getElementById("paymentmethod");
    GetRole()
    a.children[0].click();
    // a.children[0].click()
  };

  useEffect(() => {
    GetCategoryData();
    GetRole()
   
    // GetDataCounter()
  }, []);
  useEffect(() => {
    if (PackageId != "undefined") {
        paymentStripe();
      }   
    // GetDataCounter()
  }, []);

  const onToken = (token) => {
    console.log("my stripe token==>", token);
    console.log("id to pas", token.id);
    BuyPackage(token.id, "stripe");
  };
  const BuyPackage = (stripeid) => {
    console.log("stripeid", stripeid);

    // api call
    let formdata = new FormData();
    formdata.append("packageid", PackageId);
    formdata.append("token", stripeid);

    var requestOptions = {
      method: "POST",

      headers: {
        Authorization: "Bearer " + SubAdminToken,
      },
      body: formdata,
      redirect: "follow",
    };
    setloader(true);
    // "https://pyurelyecommerce.pythonanywhere.com/api/categorys"
    fetch(`${Baseurl.BaseUrlVariable}/subscription`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setloader(false);
        if (result.status == true) {
          console.log("stripapi==> ===>", result);

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
        } else {
          setloader(false);
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
      })
      .catch((error) => {
        console.log("error", error);
      });

    //api call end
  };

  // const handleCopyClick = async () => {
  //     try {
  //         await navigator.clipboard.writeText(textToCopy);
  //         console.log('Text copied to clipboard');
  //     } catch (err) {
  //         console.error('Failed to copy text: ', err);
  //     }
  // }

  // const GetDataCounter = () =>{

  //     if(Role == "Admin")
  //     {

  //     var requestOptions = {
  //         method: 'GET',
  //         headers: {
  //             Authorization: "Bearer " + Token
  //         },
  //         redirect: 'follow'
  //     };
  //     setloader(true)

  //     fetch(`${Baseurl.baseUrl}/superadmin/dashboard`, requestOptions)
  //         .then(response => response.json())
  //         .then(result => {
  //             if (result.status == true) {
  //                 setloader(false)
  //                 console.log("counterdata==>",result)
  //                 SetCounterData(result)
  //             }
  //             else {
  //                 // setLoader(true)
  //                 setloader(false)
  //                 console.log("result.message", result.message)
  //                 toast.error(result.message, {
  //                     position: "top-right",
  //                     autoClose: 5000,
  //                     hideProgressBar: false,
  //                     closeOnClick: true,
  //                     pauseOnHover: true,
  //                     draggable: true,
  //                     progress: undefined,
  //                     theme: "light",
  //                 });

  //             }

  //         }
  //             // console.log("result",result)
  //         )
  //         .catch(error => {
  //             setloader(false)
  //             console.log('error', error)
  //         }

  //         );

  //     }

  // }
const GetRole = () =>{
  var formdata = new FormData();
  formdata.append("email", localStorage.getItem("Useremail"));
  var requestOptions = {
    method: 'POST',
    headers: {
        Accept: 'application/json'
    },
    body: formdata,
    redirect: 'follow'
};
  
  setloader(true);

  fetch(`${Baseurl.baseUrl}/subadmin/status`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // alert(result)
      localStorage.setItem('Userstatus', result.sub_status);
      console.log(result.sub_status,"result.sub_status")
      if (result.status == true) {
        setloader(false);

        SetCategoryData(result);
      } else {
        setloader(false);
        console.log("result.message", result.message);
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
    })
    .catch((error) => {
      setloader(false);
      console.log("error", error);
    }); 
}
  const GetCategoryData = () => {
    if (Role == "Admin") {
      var requestOptions = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + Token,
        },
        redirect: "follow",
      };
      setloader(true);

      fetch(`${Baseurl.baseUrl}/superadmin/dashboard`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status == true) {
            setloader(false);
            SetCategoryData(result);
          } else {
            setloader(false);
            console.log("result.message", result.message);
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
        })
        .catch((error) => {
          setloader(false);
          console.log("error", error);
        });
    } else if (Role == "Subadmin") {
      var requestOptions = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + SubAdminToken,
        },
        redirect: "follow",
      };
      setloader(true);

      fetch(`${Baseurl.BaseUrlVariable}/dashboard`, requestOptions)
        .then((response) => response.json())
        .then(
          (result) => {
            if (result.status == true) {
              console.log(" User counter==>", result);
              setloader(false);
              SetCategoryData(result.data);
              setUserCount(result.user);
            } else {
              // setLoader(true)
              setloader(false);
              console.log("result.message", result.message);
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
          // console.log("result",result)
        )
        .catch((error) => {
          setloader(false);
          console.log("error", error);
        });
    }
  };

  return (
    <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-header row"></div>
        <div class="content-body">
          {/* prcing Cards */}

          {Role == "Admin" ? (
            <>
              {/* <button onClick={handleCopyClick}>
                                    Copy to Clipboard
                                </button> */}

              {/* eCommerce statistic */}
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-12">
                  <Link to="/addsubadmin">
                    <div className="card pull-up">
                      <div className="card-content">
                        <div className="card-body" style={{ height: 200 }}>
                          <div className="media d-flex">
                            <div
                              className="media-body text-center "
                              style={{ marginTop: 50 }}
                            >
                              <h2 className="info">
                                Total Hospitals : {CategoryData?.subadmin}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                  <Link to="/adduser">
                    <div className="card pull-up">
                      <div className="card-content">
                        <div className="card-body" style={{ height: 200 }}>
                          <div className="media d-flex">
                            <div
                              className="media-body text-center "
                              style={{ marginTop: 50 }}
                            >
                              <h2 className="info">
                                Total Staffs : {CategoryData?.user}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                  <Link to="/addpackage">
                    <div className="card pull-up">
                      <div className="card-content">
                        <div className="card-body" style={{ height: 200 }}>
                          <div className="media d-flex">
                            <div
                              className="media-body text-center "
                              style={{ marginTop: 50 }}
                            >
                              <h2 className="info">
                                Total Packages : {CategoryData?.packages}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* <div className="col-xl-6 col-lg-6 col-12">
                            <div className="card pull-up">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex">
                                            <div className="media-body text-left">
                                                <h3 className="warning">126 Doctor</h3>
                                                <h6>Available Doctors</h6>
                                            </div>
                                        </div>
                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                            <div className="progress-bar bg-gradient-x-warning" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                {/* <div className="col-xl-3 col-lg-6 col-12">
                            <div className="card pull-up">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex">
                                            <div className="media-body text-left">
                                                <h3 className="success">3,743 Bills</h3>
                                                <h6>Pharmacy Medics</h6>
                                            </div>
                                        </div>
                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                            <div className="progress-bar bg-gradient-x-success" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12">
                            <div className="card pull-up">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex">
                                            <div className="media-body text-left">
                                                <h3 className="danger">36 Ambula</h3>
                                                <h6>All Ambulance Cars</h6>
                                            </div>
                                        </div>
                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                            <div className="progress-bar bg-gradient-x-danger" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
              </div>
              {/*/ eCommerce statistic */}

              {/* get packages start */}

              {/* <div className="row mt-2">


                                    {
                                        CategoryData.map((data, index) => {
                                            return (
                                                <>
                                                    <div className="col-xl-4 col-md-6 col-12">
                                                        <div className="card profile-card-with-cover">
                                                            <div className="card-content card-deck text-center">
                                                                <div className="card box-shadow">
                                                                    <div className="card-header pb-0">
                                                                        <h2 className="my-0 font-weight-bold">{data.name}</h2>
                                                                    </div>
                                                                    <div className="card-body">
                                                                        <h1 className="pricing-card-title">$ {data.price}
                                                                        </h1>
                                                                        <ul className="list-unstyled mt-2 mb-2">
                                                                            <li>{data.description}</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </>
                                            )
                                        })


                                    }

                                </div> */}

              {/* get packages end */}
            </>
          ) : Role == "Subadmin" ? (
            <>
              {/* eCommerce statistic */}
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-12">
                  <Link to="/subadmin/adduser">
                    <div className="card pull-up">
                      <div className="card-content">
                        <div className="card-body" style={{ height: 200 }}>
                          <div className="media d-flex">
                            <div
                              className="media-body text-center "
                              style={{ marginTop: 50 }}
                            >
                              <h2 className="info">Staffs : {UserCount} </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* <div className="col-xl-6 col-lg-6 col-12">
                                    <div className="card pull-up">
                                        <div className="card-content">
                                            <div className="card-body" style={{ height: 200 }}>
                                                <div className="media d-flex">
                                                    <div className="media-body text-center " style={{ marginTop: 50 }}>
                                                        <h2 className="info"> Sub Admin Info</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div> */}
                {/* <div className="col-xl-6 col-lg-6 col-12">
                        <div className="card pull-up">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="media d-flex">
                                        <div className="media-body text-left">
                                            <h3 className="warning">126 Doctor</h3>
                                            <h6>Available Doctors</h6>
                                        </div>
                                    </div>
                                    <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                        <div className="progress-bar bg-gradient-x-warning" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* <div className="col-xl-3 col-lg-6 col-12">
                        <div className="card pull-up">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="media d-flex">
                                        <div className="media-body text-left">
                                            <h3 className="success">3,743 Bills</h3>
                                            <h6>Pharmacy Medics</h6>
                                        </div>
                                    </div>
                                    <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                        <div className="progress-bar bg-gradient-x-success" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12">
                        <div className="card pull-up">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="media d-flex">
                                        <div className="media-body text-left">
                                            <h3 className="danger">36 Ambula</h3>
                                            <h6>All Ambulance Cars</h6>
                                        </div>
                                    </div>
                                    <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                        <div className="progress-bar bg-gradient-x-danger" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
              </div>
              {/*/ eCommerce statistic */}
            </>
          ) : null}

          {/*  */}

          <div id="paymentmethod" className="d-none">
            <StripeCheckout
              token={onToken}
              // stripeKey="my_PUBLISHABLE_stripekey"
              stripeKey="pk_test_51LNt6zKhmRit377zkPatzgi9ckH1GU0kWpMkAUNU3BX3VucekD9bkV6QFodRelAmt7vDAgoIdpYUeGtuGWfQlcWr00bTsqA7Dl"
              // stripeKey="pk_test_51LNt6zKhmRit377zkPatzgi9ckH1GU0kWpMkAUNU3BX3VucekD9bkV6QFodRelAmt7vDAgoIdpYUeGtuGWfQlcWr00bTsqA7Dl"
              name="payment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardecommerce;
