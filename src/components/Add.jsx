import React from 'react'
import { NavBar } from './NavBar'

const Add = () => {
  return (
    <div><NavBar/>
      <h1><center><b>ADD</b></center></h1>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-13 col-xl-12 col-xxl-12">
                <div className="row g-4">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">ALBUM ID</label>
<input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">ID</label>
                    <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">TITLE</label>
                    <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">THUMBNAIL URL</label>
                    <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <button className="btn form-control">ADD</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default Add