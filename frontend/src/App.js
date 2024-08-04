import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import SignupForm from './components/forms/SignupForm';
import LoginForm from './components/forms/LoginForm';
import Dashboard from './components/forms/Dashboard';
import AddStore from './components/forms/AddStore';
import AddUser from './components/forms/AddUser';
import UserList from './components/forms/AllUsers';
import Home from './components/forms/Home';
import EditProfile from './components/forms/Profile';


function App() {
  return (
    <BrowserRouter>
      <Routes  >
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-store" element={<AddStore />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/all-users" element={<UserList />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        {/* <ProtectedRoute path="/dashboard" component={DashboardPage} /> */}
        {/* <ProtectedRoute path="/stores" component={StoreListPage} /> */}
        {/* <Route path="/" component={LoginPage} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
