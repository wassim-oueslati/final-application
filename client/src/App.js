import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';
import { getAuthUser } from './js/actions/authActions';
import { getAuthRecruiter } from './js/actions/authRecActions';
import AppNavbar from './components/AppNavBar';
import Home from './components/pages/Home';
import DashboardCandidate from './components/pages/DashboardCandidate/Dashboard';
import PrivateRoute from './components/routes/PrivateRoute';
import './App.css';
import ResetPasswordModal from './components/auth/ResetPasswordModal';
import ResetPasswordRecruiter from './components/authRecruiter/ResetPasswordRec';
import PrivateRoute2 from './components/routes/PrivateRoute2';
import DashboardRecruiter from './components/pages/DashboardRecruiter/DashboardRecruiter';
import CandidatesHomePage from './components/pages/candidatesHomePage/CandidatesHomePage';
import RecruitersHomePage from './components/pages/RecruitersHomePage/RecruitersHomePage';


function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authReducer);
  const { isLoadingg } = useSelector((state) => state.authRecReducer);
  const getUser = () => dispatch(getAuthUser());
  const getRecruiter = () => dispatch(getAuthRecruiter());

  useEffect(() => {
    getUser();
    getRecruiter();
  }, []);

  if (isLoading || isLoadingg) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spinner
          style={{ width: '3rem', height: '3rem', color: 'secondary' }}
          type="grow"
        />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AppNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/dashboard" component={DashboardCandidate} />
        <PrivateRoute2 path="/dashboardRecruiter" component={DashboardRecruiter} />
        <Route path="/reset/:token" component={ResetPasswordModal}/>
        <Route path="/resetPass/:token" component={ResetPasswordRecruiter}/>
        <Route path="/register-candidate" component={CandidatesHomePage}/>
        <Route path="/register-recruiter" component={RecruitersHomePage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;