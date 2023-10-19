import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main1 from './Main1';
import Main2 from './Main2';
import Main3 from './Main3';
import Main4 from './Main4';
import Main5 from './Main5';
import Main6 from './Main6';
import Main7 from './Main7';
import Main8 from './Main8';
import Main9 from './Main9';
import Main10 from './Main10';
import Main11 from './Main11';
import Main12 from './Main12';
import Main13 from './Main13';
import Main14 from './Main14'

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className='row'>
          <Header name="HDFC" branch="Marathalli" />
          <div className='col-lg-2' style={{ backgroundColor: 'silver' }}>
            <div className='row'>
              <div>
                <Link to="/main1">Main1</Link>
                <br />
                <Link to="/main2">Main2</Link>
              </div>
              <div>
                <Link to="/main3">Main3</Link>
                <br />
                <Link to="/main4">Main4</Link>
              </div>
              <div>
                <Link to="/main5">Main5</Link>
                <br />
                <Link to="/main6">Main6</Link>
              </div>
              <div>
                <Link to="/main7">Main7</Link>
                <br />
                <Link to="/main8">Main8</Link>
              </div>
              <div>
                <Link to="/main9">Main9</Link>
                <br />
                <Link to="/main10">Main10</Link>
                <br />
                <Link to="/main11">Main11</Link>
                <br />
                <Link to="/main12">Main12</Link>
                <br />
                <Link to="/main13">Main13</Link>
                <br />
                <Link to="/main14">Main14</Link>
              </div>
              
              <br />
              
                
              </div>
            </div>
          </div>
          <div className='col-lg-10'>
            <Routes>
              <Route index element={<Main1 />} />
              <Route path="/main1" element={<Main1 />} />
              <Route path="/main2" element={<Main2 />} />
              <Route path="/main3" element={<Main3 />} />
              <Route path="/main4" element={<Main4 />} />
              <Route path="/main5" element={<Main5 />} />
              <Route path="/main6" element={<Main6 />} />
              <Route path="/main7" element={<Main7 />} />
              <Route path="/main8" element={<Main8 />} />
              <Route path="/main9" element={<Main9 />} />
              <Route path="/main10" element={<Main10 />} />
              
              <Route path="/main11" element={<Main11 />} />
              <Route path="/main12" element={<Main12 />} />
              <Route path="/main13" element={<Main13 />} />
              <Route path="/main14" element={<Main14 />} />
           
            </Routes>
          </div>
          <Footer />
        </div>

    </BrowserRouter>
  );
}

export default App;