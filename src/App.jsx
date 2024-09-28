import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './layouts/Layout';
import Home from './Components/Home.jsx'

const App = () => {
	return (
		<BrowserRouter>
	      <Routes>
	        <Route path="/" element={<Layout />}>
	          <Route path="/" element={<Home />} />
	        </Route>
	      </Routes>
	    </BrowserRouter>
	);
}

export default App;