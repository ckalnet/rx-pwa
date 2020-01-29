import React from 'react'

import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center clickable-row" style={{background: '#00bae5'}} data-href="patient.html">
          <div className="col-md-4 p-lg-4 mx-auto my-4 text-center">
              <Link to="/newrx" className="btnLink">
            <h1 className="display-4 font-weight-normal">New RX</h1>
            <img src="img/icon-write.svg" className="mx-auto" style={{width: '50%', opacity: '0.7'}} />
            </Link>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="col-6 mx-0 bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden border-right border-bottom clickable-row" data-href="patient.html">
            <div className="my-2 py-2">
              <h2 className="display-5">Pending Rx</h2>
              <img src="img/icon-alert.svg" className="mx-auto" style={{width: '50%'}} />
            </div>
          </div>
          <div className="col-6 mx-0 bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden border-bottom">
            <div className="my-2 p-2">
              <h2 className="display-5">Renewals</h2>
              <img src="img/icon-sync.svg" className="mx-auto" style={{width: '60%'}} />
            </div>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="col-6 mx-0 bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden border-right border-bottom clickable-row" data-href="patient.html">
            <div className="my-2 py-2">
              <h2 className="display-5">Secure Chat</h2>
              <img src="img/icon-chat.svg" className="mx-auto" style={{width: '50%'}} />
            </div>
          </div>
          <div className="col-6 mx-0 bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden border-bottom">
            <div className="my-2 p-2">
              <h2 className="display-5">PDMP</h2>
              <img src="img/icon-check.svg" className="mx-auto" style={{width: '60%'}} />
            </div>
          </div>
        </div>
      </div>
    )
}
