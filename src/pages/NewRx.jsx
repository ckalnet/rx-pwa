import React from 'react'

import { Link } from "react-router-dom";

export default function NewRx() {
    return (
        <div>
            <header>
            <nav className="navbar navbar-expand-md fixed-top bg-dark">
          <form className="w-100 pt-2 pb-0">
            <div className="form-group row d-flex align-items-center">
              <div className="col-3">
                <Link to="/" >⇦</Link>
              </div>
              <div className="col-6">
                <h1 className="mb-0 text-center" style={{fontSize: '1.25rem', color: '#fff'}}>Daniel Casey</h1>
              </div>
              <div className="col-3 text-right">
                <span className="oi oi-ellipses" style={{fontSize: '1.25rem', color: '#fff'}} />
              </div>
            </div>
          </form>
        </nav>
      </header>
            

            <div className="container">
            <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Example select</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
          <select multiple className="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
        </div>

        <div className="form-group">
          <button className="btn btn-primary">Submit Rx</button>
        </div>
      </form>
            </div>

        </div>
    )
}
