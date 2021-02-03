import React from 'react'
function Footer() {
    return (
        <div className="footer">
        <div className="row align-items-center justify-content-center" id="foot1">
          <div className="col-sm-4 text-center">
           <img className ="foot-logo" src={process.env.PUBLIC_URL + "/images/3081783.jpg"} alt="imagesss"></img>
          </div>
          <div className="col-sm-2 col1">
          <h1>Aspirants</h1>
               <p>Register Now</p>
               <p>Learn More</p>
               <p>FAQ's</p>
          </div>
          <div className="col-sm-2 col2">
          <h1>Sponsors</h1>
               <p>Sponsor Relations</p>
               <p>Business Enquiry</p>
               <p>Learn More</p>
          </div>
          <div className="col-sm-3 col3">
          <h1>Aspirants</h1>
               <p>Submit a Problem Statement</p>
               <p>Check Status</p>
               <p>Register Your Company</p>
          </div>


        </div>
            
        </div>
    )
}

export default Footer
