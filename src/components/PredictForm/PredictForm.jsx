import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PredictForm = () => {
    return (
        <>
            {/* {loader == true ?
                <Loader fullPage loading /> : null
            } */}

            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                            <h3 className="content-header-title mb-0 d-inline-block">
                                {/* {Role == "Superadmin" ? "Edit User" : "Add User"} */}
                                Prediction Form

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
                                {/* <button
                                    className="btn btn-danger  round btn-glow px-2 mb-2 mr-2" id="dropdownBreadcrumbButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Add User

                                </button> */}
                            </div>
                        </div>
                    </div>
                    <div className="content-body">
                        {/* Basic form layout section start */}
                        <section id="horizontal-form-layouts">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        {/* <div className="card-header">
                                            <h4 className="card-title" id="horz-layout-colored-controls"> Edit Profile</h4>
                                            <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                            
                                        </div> */}
                                        <div className="card-content collpase show">
                                            <div className="card-body">
                                                <Form>

                                                    <Row>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>Pneumonio</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Pneumonio" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>Bowl Obstruction</Form.Label>
                                                                <Form.Control type="text" placeholder="Bowl Obstruction" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>STEMI ST Elevation</Form.Label>
                                                                <Form.Control type="text" placeholder="STEMI ST Elavation" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>NONSTEMI non Elevation </Form.Label>
                                                                <Form.Control type="text" placeholder="Enter NONSTEMI non Elevation" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>Osteomyelitis</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Osteomyelitis" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>Sepsis</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Sepsis" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>Endocarditis</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Endocarditis" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>Hip Fractures</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Hip Fractures" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>Stroke</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Hip Fractures" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>Trauma</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Hip Fractures" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>COPD</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Hip Fractures" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>Sickle Cell</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Hip Fractures" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>Rhabdomyolysis</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Rhabdomyolysis" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>DVT Deep</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter DVT Deep" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>PE Pulmonary</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter PE Pulmonary" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>CHF Congestive</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter CHF Congestive" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>Labor And Deliver</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Labor And Deliver" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>Preterm Labor</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Preterm Labor" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>RSV Respiratory</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter RSV Respiratory" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>Pancreatitis</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Pancreatitis" />
                                                                
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Button variant="primary mb-2 " type="button">
                                                        Submit
                                                    </Button>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </section>
                        {/* // Basic form layout section end */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PredictForm

// khizar
// khizar
// khizar
// khizar
// khizar
// khizar
// khizar
// khizar