import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import lazy loader
import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
import { lazy, Suspense } from 'react';

// toastContainer
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// dashboard pages
// import Dashboard from './pages/AdminPanel/dashboardpages/Dashboard';
// import DashboardEcommerce from './pages/AdminPanel/dashboardpages/DashboardEcommerce';
// import Dashboardcrypto from './pages/AdminPanel/dashboardpages/Dashboardcrypto';
// import DashboardSales from './pages/AdminPanel/dashboardpages/DashboardSales';
import Customer from './pages/AdminPanel/addcustomer/Customer';

const SimpleLogin = lazy(() => import('./pages/AdminPanel/auth/simplelogin'));
const SimpleRegister = lazy(() => import('./pages/AdminPanel/auth/simpleregister'));
const ForgetPassword = lazy(() => import('./pages/AdminPanel/auth/ForgetPassword'));
const VerifyCode = lazy(() => import('./pages/AdminPanel/auth/VerifyCode'));
const NewPassword = lazy(() => import('./pages/AdminPanel/auth/NewPassword'));
const Profile = lazy(() => import('./pages/AdminPanel/Profile/Profile'));
const AddProduct = lazy(() => import('./pages/AdminPanel/addproduct/AddProduct'));
const Order = lazy(() => import('./pages/AdminPanel/addorder/Order'));
const AddPackages = lazy(() => import('./pages/AdminPanel/addpackages/AddPackages'));
const AddCoupen = lazy(() => import('./pages/AdminPanel/addcoupen/AddCoupen'));
const Dashboard = lazy(() => import('./pages/AdminPanel/dashboardpages/Dashboard'));
const AdminUser = lazy(() => import('./pages/AdminPanel/AddUser/AddUser'));
const Addsubadmin = lazy(() => import('./pages/AdminPanel/Addsubadmin/Addsubadmin'));

// import Dashboard from './pages/AdminPanel/dashboardpages/Dashboard';


// client-panel or Sub admin

const ClientLogin = lazy(() => import('./pages/SubadminPanel/auth/simplelogin'));
const ClientDashboard = lazy(() => import('./pages/SubadminPanel/Dashboard/Dashboard'));
const ClientAddUser = lazy(() => import('./pages/SubadminPanel/AddUser/AddUser'));
const ClientProfile = lazy(() => import('./pages/SubadminPanel/Profile/Profile'));

const ClientForgetPassword = lazy(() => import('./pages/SubadminPanel/auth/ForgetPassword'));
const ClientVerifyCode = lazy(() => import('./pages/SubadminPanel/auth/VerifyCode'));
const ClientNewPassword = lazy(() => import('./pages/SubadminPanel/auth/NewPassword'));
const ClientRegister = lazy(() => import('./pages/SubadminPanel/auth/simpleregister'));
const GetPackLink = lazy(() => import('./pages/SubadminPanel/GetPackLink/GetPackLink'));


// user Login
const UserLogin = lazy(() => import('./pages/UserPanel/auth/simplelogin'));
const UserProfile = lazy(() => import('./pages/UserPanel/Profile/Profile'));
// const UserDashboard = lazy(() => import('./pages/UserPanel/Dashboard/Dashboard'));
const UserForgetPassword = lazy(() => import('./pages/UserPanel/auth/ForgetPassword'));
const UserVerifyCode = lazy(() => import('./pages/UserPanel/auth/VerifyCode'));
const UserNewPassword = lazy(() => import('./pages/UserPanel/auth/NewPassword'));
const UserUploadFile = lazy(() => import('./pages/UserPanel/UploadFile/Uploadfile'));
const PredictionForm = lazy(() => import('./pages/UserPanel/PredictionForm/PredictionForm'));
const SelectMultiPrediction = lazy(() => import('./pages/UserPanel/SelectMultiPrediction/SelectPrediction'));
// import RegisterBg from './pages/auth/registerbg';

// import LoginBg from './pages/auth/loginbg';



// const ForgetPassword = lazy ( () => import('./pages/auth/ForgetPassword'));


// import Profile from './pages/Profile/Profile';
// import AddProduct from './pages/addproduct/AddProduct';

// import Order from './pages/addorder/Order';

// import AddPackages from './pages/addPackAddPackages/AddPackages';
// import ForgetPassword from './pages/auth/ForgetPassword';


// const UploadData = lazy ( () => import('./pages/superadmin/uploaddata/UploadData'));



function App() {
  return (

    <Suspense fallback={<Loader fullPage loading />} >
      <div>
        <ToastContainer />
        <Router>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/' element={<SimpleLogin />} />
            <Route path='/register' element={<SimpleRegister />} />
            <Route path='/forgetpassword' element={<ForgetPassword />} />
            <Route path='/verifycode' element={<VerifyCode />} />
            <Route path='/newpassword' element={<NewPassword />} />
            <Route path='/addpackage' element={<AddPackages />} />
            <Route path='/addcustomer' element={<Customer />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/orders' element={<Order />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/addcoupen' element={<AddCoupen />} />
            <Route path='/adduser' element={<AdminUser />} />
            <Route path='/addsubadmin' element={<Addsubadmin />} />
            
            {/* <Route path='/getpacklink/?SubAdmiId={id1}&PackageAdmiId={id2}' element={<GetPackLink />} /> */}
{/* Sub Admin or Hospital login */}


            <Route path='/hospital/login' element={<ClientLogin />} />
            <Route path='/hospital/login/:PackageId' element={<ClientLogin />} />
            <Route path='/hospital/dashboard' element={<ClientDashboard />} />
            <Route path='/hospital/adduser' element={<ClientAddUser />} />
            <Route path='/hospital/profile' element={<ClientProfile />} />

            <Route path='/hospital/forgetpassword' element={<ClientForgetPassword />} />
            <Route path='/hospital/verifycode' element={<ClientVerifyCode />} />
            <Route path='/hospital/newpassword' element={<ClientNewPassword />} />
            <Route path='/hospital/register' element={<ClientRegister />} />
            <Route path='/getpacklink/:SubAdmiId/:PackageAdmiId' element={<GetPackLink />} />
            {/* User or Staff  Login */}

            <Route path='/staff/login' element={<UserLogin />} />
            {/* <Route path='/staff/dashboard' element={<UserDashboard />} /> */}
            <Route path='/staff/profile' element={<UserProfile />} />
            <Route path='/staff/forgetpassword' element={<UserForgetPassword />} />
            <Route path='/staff/verifycode' element={<UserVerifyCode />} />            
            <Route path='/staff/newpassword' element={<UserNewPassword />} />
            <Route path='/staff/uploadfile' element={<UserUploadFile />} />
            <Route path='/staff/predictform' element={<PredictionForm />} />
            <Route path='/staff/dashboard' element={<SelectMultiPrediction />} />

            

            {/* 


          
          
          */}

            {/* <Route path='/dashboardecommerce' element={<DashboardEcommerce />} />
          <Route path='/dashboardcrypto' element={<Dashboardcrypto />} />
          <Route path='/dashboardsales' element={<DashboardSales />} />
          <Route path='/basicform' element={<BasicForm />} />
          <Route path='/horizontalform' element={<HorizontalForm />} />
          <Route path='/hiddenlabelform' element={<HiddenLabels />} />
          <Route path='/formaction' element={<FormAction />} />
          <Route path='/rowseparatorform' element={<RowSeparator />} />
          <Route path='/borderedform' element={<BorderedForm />} />
          <Route path='/commingsoon' element={<CommingSoon />} />
          <Route path='/card/ecommerce' element={<EcommerceCard />} />
          <Route path='/card/statistics' element={<StatisticsCard />} />
          <Route path='/card/social' element={<SocialCard />} />
          <Route path='/card' element={<Bootstarpcard />} />
          <Route path='/error/404' element={<Error404 />} />
          <Route path='/error/500' element={<Error500 />} /> */}


            {/* <Route path='/registerbg' element={<RegisterBg />} />

          <Route path='/loginbg' element={<LoginBg/>} /> */}


            {/* <Route path='/addPackAddPackages' element={<AddPackages />} /> */}


            {/* <Route path='/forgetpassword' element={<ForgetPassword />} /> */}







          </Routes>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
