import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
    return (
        <div>
            <BrowserRouter>
                <HeaderComponent />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ListEmployeeComponent />} />
                        <Route path="/employees" element={<ListEmployeeComponent />} />
                        {/*<Route path="/add-employee/:id" component={CreateEmployeeComponent} />*/}
                        <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
                        <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} />
                    </Routes>
                </div>
                <FooterComponent />
            </BrowserRouter>
        </div>
    );
}

export default App;