import React from 'react'

function Subscribe() {
    return (
        <div className="subscribe">
     <div className="row" id="#sub-box1">
      <div className="col text-center">
          <p className="sub-head">Subscribe to Notifications & Announcements!</p>
      </div>
     </div>
    <div className="row" id="sub-box2">
  <div className="col-sm-auto">
    <input type="text" className="form-control" placeholder="Name" aria-label="Name" id="sub-input"/>
  </div>
  <div className="col-sm-auto">
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last Name" id="sub-input1"/>
  </div>
  <div className="col-sm-auto">
    <input type="email" className="form-control" placeholder="Email" aria-label="Email" id="sub-input2"/>
  </div>
  <div className="col-sm-auto">
  <button type="submit" className="btn btn-primary" id="subbtn">Subscribe</button> 
  </div> 
</div>

<div className="row" >
    <div className="col text-center" id="sub-box3">
    <input class="form-check-input" type="checkbox" id="autoSizingCheck2" />
      <label class="form-check-label" for="autoSizingCheck2">
      By continuing you agree to our
Terms of services and privacy Policy
      </label>
    </div>
</div>
            
        </div>
    )
}

export default Subscribe;
