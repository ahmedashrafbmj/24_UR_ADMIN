import React from 'react'

const Pricing = () => {
    return (
        <>
            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                            <h3 className="content-header-title mb-0 d-inline-block">Pricing</h3>
                            <div className="row breadcrumbs-top d-inline-block">
                                <div className="breadcrumb-wrapper col-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item"><a href="#">Page Layouts</a>
                                        </li>
                                        <li className="breadcrumb-item active">Pricing
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="content-header-right col-md-6 col-12">
                            <div className="dropdown float-md-right">
                                <button className="btn btn-danger dropdown-toggle round btn-glow px-2" id="dropdownBreadcrumbButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Actions</button>
                                <div className="dropdown-menu" aria-labelledby="dropdownBreadcrumbButton"><a className="dropdown-item" href="#"><i className="la la-calendar-check-o" /> Calender</a>
                                    <a className="dropdown-item" href="#"><i className="la la-cart-plus" /> Cart</a>
                                    <a className="dropdown-item" href="#"><i className="la la-life-ring" /> Support</a>
                                    <div className="dropdown-divider" /><a className="dropdown-item" href="#"><i className="la la-cog" /> Settings</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-body">
                        {/* Bootstrap pricing */}
                        <section id="social-cards">
                            <div className="row">
                                <div className="col-12 mt-3 mb-1">
                                    <h4 className="text-uppercase">Bootstrap Pricing</h4>
                                    <p>Quickly build an effective pricing table for your potential customers
                                        with this Bootstrap example. It's built with default Bootstrap components
                                        and utilities with little customization.</p>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card profile-card-with-cover">
                                        <div className="card-content card-deck text-center">
                                            <div className="card box-shadow">
                                                <div className="card-header pb-0">
                                                    <h2 className="my-0 font-weight-bold">Free</h2>
                                                </div>
                                                <div className="card-body">
                                                    <h1 className="pricing-card-title">$0
                                                        <small className="text-muted">/ mo</small>
                                                    </h1>
                                                    <ul className="list-unstyled mt-2 mb-2">
                                                        <li>10 users included</li>
                                                        <li>2 GB of storage</li>
                                                        <li>Email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <button type="button" className="btn btn-lg btn-block btn-outline-info">Sign up for free</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card profile-card-with-cover">
                                        <div className="card-content card-deck text-center">
                                            <div className="card box-shadow">
                                                <div className="card-header pb-0">
                                                    <h2 className="my-0 font-weight-bold">Pro</h2>
                                                </div>
                                                <div className="card-body">
                                                    <h1 className="pricing-card-title">$15
                                                        <small className="text-muted">/ mo</small>
                                                    </h1>
                                                    <ul className="list-unstyled mt-2 mb-2">
                                                        <li>20 users included</li>
                                                        <li>10 GB of storage</li>
                                                        <li>Email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <button type="button" className="btn btn-lg btn-block btn-info">Get started</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card profile-card-with-cover">
                                        <div className="card-content card-deck text-center">
                                            <div className="card box-shadow">
                                                <div className="card-header pb-0">
                                                    <h2 className="my-0 font-weight-bold">Enterprise</h2>
                                                </div>
                                                <div className="card-body">
                                                    <h1 className="pricing-card-title">$29
                                                        <small className="text-muted">/ mo</small>
                                                    </h1>
                                                    <ul className="list-unstyled mt-2 mb-2">
                                                        <li>30 users included</li>
                                                        <li>15 GB of storage</li>
                                                        <li>Email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <button type="button" className="btn btn-lg btn-block btn-info">Contact us</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* // Bootstrap pricing section end */}
                        {/* Bootstrap pricing Out Line Button */}
                        <section id="social-cards">
                            <div className="row">
                                <div className="col-12 mt-3 mb-1">
                                    <h4 className="text-uppercase">Bootstrap Pricing With Warning Out Line Button</h4>
                                    <p>For outline button add class <code>btn-outline-warning</code></p>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card profile-card-with-cover">
                                        <div className="card-content card-deck text-center">
                                            <div className="card box-shadow">
                                                <div className="card-header pb-0">
                                                    <h2 className="my-0 font-weight-bold">Free</h2>
                                                </div>
                                                <div className="card-body">
                                                    <h1 className="pricing-card-title">$0
                                                        <small className="text-muted">/ mo</small>
                                                    </h1>
                                                    <ul className="list-unstyled mt-2 mb-2">
                                                        <li>10 users included</li>
                                                        <li>2 GB of storage</li>
                                                        <li>Email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <button type="button" className="btn btn-lg btn-block btn-outline-warning">Sign up for free</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card profile-card-with-cover">
                                        <div className="card-content card-deck text-center">
                                            <div className="card box-shadow">
                                                <div className="card-header pb-0">
                                                    <h2 className="my-0 font-weight-bold">Pro</h2>
                                                </div>
                                                <div className="card-body">
                                                    <h1 className="pricing-card-title">$15
                                                        <small className="text-muted">/ mo</small>
                                                    </h1>
                                                    <ul className="list-unstyled mt-2 mb-2">
                                                        <li>20 users included</li>
                                                        <li>10 GB of storage</li>
                                                        <li>Email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <button type="button" className="btn btn-lg btn-block btn-outline-warning">Get started</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card profile-card-with-cover">
                                        <div className="card-content card-deck text-center">
                                            <div className="card box-shadow">
                                                <div className="card-header pb-0">
                                                    <h2 className="my-0 font-weight-bold">Enterprise</h2>
                                                </div>
                                                <div className="card-body">
                                                    <h1 className="pricing-card-title">$29
                                                        <small className="text-muted">/ mo</small>
                                                    </h1>
                                                    <ul className="list-unstyled mt-2 mb-2">
                                                        <li>30 users included</li>
                                                        <li>15 GB of storage</li>
                                                        <li>Email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <button type="button" className="btn btn-lg btn-block btn-outline-warning">Contact us</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* // Bootstrap pricing Outline Button section end */}
                        {/* Bootstrap pricing With Text And Button Success Color */}
                        <section id="social-cards">
                            <div className="row">
                                <div className="col-12 mt-3 mb-1">
                                    <h4 className="text-uppercase">Bootstrap Pricing With Text And Button Success Color</h4>
                                    <p>for text color chnage add class <code>.success</code> and for button
                                        color chnage add class in button <code>.btn-success</code></p>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card profile-card-with-cover">
                                        <div className="card-content card-deck text-center">
                                            <div className="card box-shadow">
                                                <div className="card-header pb-0">
                                                    <h2 className="my-0 font-weight-bold success">Free</h2>
                                                </div>
                                                <div className="card-body">
                                                    <h1 className="pricing-card-title">$0
                                                        <small className="text-muted">/ mo</small>
                                                    </h1>
                                                    <ul className="list-unstyled mt-2 mb-2">
                                                        <li>10 users included</li>
                                                        <li>2 GB of storage</li>
                                                        <li>Email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <button type="button" className="btn btn-lg btn-block btn-success">Sign up for free</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card profile-card-with-cover">
                                        <div className="card-content card-deck text-center">
                                            <div className="card box-shadow">
                                                <div className="card-header pb-0">
                                                    <h2 className="my-0 font-weight-bold success">Pro</h2>
                                                </div>
                                                <div className="card-body">
                                                    <h1 className="pricing-card-title">$15
                                                        <small className="text-muted">/ mo</small>
                                                    </h1>
                                                    <ul className="list-unstyled mt-2 mb-2">
                                                        <li>20 users included</li>
                                                        <li>10 GB of storage</li>
                                                        <li>Email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <button type="button" className="btn btn-lg btn-block btn-success">Get started</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card profile-card-with-cover">
                                        <div className="card-content card-deck text-center">
                                            <div className="card box-shadow">
                                                <div className="card-header pb-0">
                                                    <h2 className="my-0 font-weight-bold success">Enterprise</h2>
                                                </div>
                                                <div className="card-body">
                                                    <h1 className="pricing-card-title">$29
                                                        <small className="text-muted">/ mo</small>
                                                    </h1>
                                                    <ul className="list-unstyled mt-2 mb-2">
                                                        <li>30 users included</li>
                                                        <li>15 GB of storage</li>
                                                        <li>Email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <button type="button" className="btn btn-lg btn-block btn-success">Contact us</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* // Bootstrap pricing With Text And Button Success Color section end */}
                        {/* Bootstrap pricing with glow button */}
                        <section id="social-cards">
                            <div className="row">
                                <div className="col-12 mt-3 mb-1">
                                    <h4 className="text-uppercase">Bootstrap Pricing With Glow Button</h4>
                                    <p>For glow button add class in button <code>.btn-glow</code></p>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card profile-card-with-cover">
                                        <div className="card-content card-deck text-center">
                                            <div className="card box-shadow">
                                                <div className="card-header pb-0">
                                                    <h2 className="my-0 font-weight-bold danger">Free</h2>
                                                </div>
                                                <div className="card-body">
                                                    <h1 className="pricing-card-title">$0
                                                        <small className="text-muted">/ mo</small>
                                                    </h1>
                                                    <ul className="list-unstyled mt-2 mb-2">
                                                        <li>10 users included</li>
                                                        <li>2 GB of storage</li>
                                                        <li>Email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <button type="button" className="btn btn-lg btn-block btn-danger btn-glow">Sign up for free</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card profile-card-with-cover">
                                        <div className="card-content card-deck text-center">
                                            <div className="card box-shadow">
                                                <div className="card-header pb-0">
                                                    <h2 className="my-0 font-weight-bold danger">Pro</h2>
                                                </div>
                                                <div className="card-body">
                                                    <h1 className="pricing-card-title">$15
                                                        <small className="text-muted">/ mo</small>
                                                    </h1>
                                                    <ul className="list-unstyled mt-2 mb-2">
                                                        <li>20 users included</li>
                                                        <li>10 GB of storage</li>
                                                        <li>Email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <button type="button" className="btn btn-lg btn-block btn-danger btn-glow">Get started</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card profile-card-with-cover">
                                        <div className="card-content card-deck text-center">
                                            <div className="card box-shadow">
                                                <div className="card-header pb-0">
                                                    <h2 className="my-0 font-weight-bold danger">Enterprise</h2>
                                                </div>
                                                <div className="card-body">
                                                    <h1 className="pricing-card-title">$29
                                                        <small className="text-muted">/ mo</small>
                                                    </h1>
                                                    <ul className="list-unstyled mt-2 mb-2">
                                                        <li>30 users included</li>
                                                        <li>15 GB of storage</li>
                                                        <li>Email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <button type="button" className="btn btn-lg btn-block btn-danger btn-glow">Contact us</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* // Bootstrap pricing with glow button section end */}
                        {/* Bootstrap pricing with full with button */}
                        <section id="social-cards">
                            <div className="row">
                                <div className="col-12 mt-3 mb-1">
                                    <h4 className="text-uppercase">Bootstrap Pricing With Full Button</h4>
                                    <p>Cards has no padding Add <code>.p-0</code> for button aquare just Add<code>.square</code></p>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card box-shadow">
                                        <div className="card-body text-center rounded p-0 pt-2">
                                            <div className="card-header pb-0">
                                                <h2 className="my-0 font-weight-bold">Free</h2>
                                            </div>
                                            <div className="card-body">
                                                <h1 className="pricing-card-title">$0
                                                    <small className="text-muted">/ mo</small>
                                                </h1>
                                                <ul className="list-unstyled mt-2 mb-2">
                                                    <li>10 users included</li>
                                                    <li>2 GB of storage</li>
                                                    <li>Email support</li>
                                                    <li>Help center access</li>
                                                </ul>
                                            </div>
                                            <button type="button" className="btn btn-primary btn-block text-uppercase p-1 square">Sign up for free</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card box-shadow">
                                        <div className="card-body text-center rounded p-0 pt-2">
                                            <div className="card-header pb-0">
                                                <h2 className="my-0 font-weight-bold">Pro</h2>
                                            </div>
                                            <div className="card-body">
                                                <h1 className="pricing-card-title">$15
                                                    <small className="text-muted">/ mo</small>
                                                </h1>
                                                <ul className="list-unstyled mt-2 mb-2">
                                                    <li>20 users included</li>
                                                    <li>10 GB of storage</li>
                                                    <li>Email support</li>
                                                    <li>Help center access</li>
                                                </ul>
                                            </div>
                                            <button type="button" className="btn btn-primary btn-block text-uppercase p-1 square">Get started</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card box-shadow">
                                        <div className="card-body text-center rounded p-0 pt-2">
                                            <div className="card-header pb-0">
                                                <h2 className="my-0 font-weight-bold">Enterprise</h2>
                                            </div>
                                            <div className="card-body">
                                                <h1 className="pricing-card-title">$29
                                                    <small className="text-muted">/ mo</small>
                                                </h1>
                                                <ul className="list-unstyled mt-2 mb-2">
                                                    <li>30 users included</li>
                                                    <li>15 GB of storage</li>
                                                    <li>Email support</li>
                                                    <li>Help center access</li>
                                                </ul>
                                            </div>
                                            <button type="button" className="btn btn-primary btn-block text-uppercase p-1 square">Contect us</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* // Bootstrap pricing with full width button */}
                        {/* Bootstrap pricing */}
                        <section id="social-cards">
                            <div className="row">
                                <div className="col-12 mt-3 mb-1">
                                    <h4 className="text-uppercase">Bootstrap Pricing With Heading Background Color</h4>
                                    <p>For header backgound color Add class in card-header<code>.bg-info, .bg-amber, .bg-danger</code>                and for button just add class in button <code>.square</code></p>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card profile-card-with-cover">
                                        <div className="card-content card-deck text-center">
                                            <div className="card box-shadow">
                                                <div className="card-header bg-info">
                                                    <h3 className="my-0 font-weight-bold text-white">Free</h3>
                                                </div>
                                                <div className="card-body">
                                                    <h1 className="pricing-card-title">$0
                                                        <small className="text-muted">/ mo</small>
                                                    </h1>
                                                    <ul className="list-unstyled mt-2 mb-2">
                                                        <li>10 users included</li>
                                                        <li>2 GB of storage</li>
                                                        <li>Email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <button type="button" className="btn btn-lg btn-block btn-info btn-glow">Sign up for free</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card profile-card-with-cover">
                                        <div className="card-content card-deck text-center">
                                            <div className="card box-shadow">
                                                <div className="card-header bg-warning">
                                                    <h3 className="my-0 font-weight-bold text-white">Pro</h3>
                                                </div>
                                                <div className="card-body">
                                                    <h1 className="pricing-card-title">$15
                                                        <small className="text-muted">/ mo</small>
                                                    </h1>
                                                    <ul className="list-unstyled mt-2 mb-2">
                                                        <li>20 users included</li>
                                                        <li>10 GB of storage</li>
                                                        <li>Email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <button type="button" className="btn btn-lg btn-block btn-warning btn-glow">Get started</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="card profile-card-with-cover">
                                        <div className="card-content card-deck text-center">
                                            <div className="card box-shadow">
                                                <div className="card-header bg-danger">
                                                    <h3 className="my-0 font-weight-bold text-white">Enterprise</h3>
                                                </div>
                                                <div className="card-body">
                                                    <h1 className="pricing-card-title">$29
                                                        <small className="text-muted">/ mo</small>
                                                    </h1>
                                                    <ul className="list-unstyled mt-2 mb-2">
                                                        <li>30 users included</li>
                                                        <li>15 GB of storage</li>
                                                        <li>Email support</li>
                                                        <li>Help center access</li>
                                                    </ul>
                                                    <button type="button" className="btn btn-lg btn-block btn-danger btn-glow">Contact us</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* // Bootstrap pricing section end */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Pricing