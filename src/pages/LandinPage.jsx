import React from 'react'
import { Link } from 'react-router-dom'




function LandinPage() {
  return (
    <>
      <section className='w-100' style={{ height: "350vh", backgroundColor: "#f2f2f2" }}>
        <div style={{ paddingTop: "150px" }} className='text-center mb-1'>
          <h1 style={{ fontFamily: "Libre Baskerville, serif", letterSpacing: "-3px", fontSize: "45px" }} >Track.<span style={{ color: "blue", fontFamily: "Libre Baskerville, serif", }} > Learn.</span> Grow.</h1>
          <h1 style={{ fontSize: "clamp(28px, 8vw, 90px)" }} className='fw-bold' >Track Progress<span style={{ color: "blue", }}> Now</span></h1>
          <div className='fs-5' >
            <>Monitor your skills with clarity and precision.</>
            <p>Stay organized. Stay ahead.</p>
          </div >
          <Link to={'skillgenerator'}  ><button style={{ backgroundColor: "blue", fontSize: "20px" }} className='btn rounded-5 me-3 fw-light text-white'>Get Started for free</button></Link>
          <Link to={'/viewskill'} ><button style={{ fontSize: "20px" }} className='btn btn border-dark rounded-5 fw-light ' >check skill now</button></Link>
        </div>
        <div className="row text-center mt-4">
          {/* card 1 */}
          <div className="col-md-3 d-flex justify-content-center ">
            <div className="card rounded-5" style={{ width: "18rem", backgroundColor: "white", boxShadow: "9px 9px 20px rgba(0, 0, 0, 0.3)" }}>
              <img src="/css.jpg" className="card-img-top rounded-5 p-2" alt="..." />
              <div className="card-body border-5 text-dark">
                <h5 className='fw-bold' >CSS</h5>
                <p className="card-text">Learn CSS fundamentals to style, layout, and animate web pages.</p>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="col-md-2 d-flex justify-content-center ">
            <div className="card rounded-5 " style={{ width: "15rem", boxShadow: "9px 9px 20px rgba(0, 0, 0, 0.3)", backgroundColor: "white", marginTop: "70px" }}>
              <img src="/git.jpg" className="card-img-top rounded-5 p-2" alt="..." />
              <div className="card-body border-5 text-dark">
                <h5 className='fw-bold' >GIT</h5>

                <p className="card-text"> Learn Git commands, manage branches, and collaborate with developers. </p>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="col-md-2 d-flex justify-content-center mx-auto ">
            <div className="card rounded-5 " style={{ width: "15rem", boxShadow: "9px 9px 20px rgba(0, 0, 0, 0.3)", backgroundColor: "white", marginTop: "160px" }}>
              <img src="/figma.jpg" className="card-img-top rounded-5 p-2" alt="..." />
              <div className="card-body border-5 text-dark">
                <h5 className='fw-bold' >FIGMA</h5>

                <p className="card-text">  Create stunning interfaces and prototypes with Figma, and collaborate seamlessly.</p>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="col-md-2 d-flex justify-content-center mb-5 mb-md-0">
            <div className="card rounded-5 " style={{ width: "15rem", boxShadow: "9px 9px 20px rgba(0, 0, 0, 0.3)", backgroundColor: "white", marginTop: "70px" }}>
              <img src="/boostrap.jpg" className="card-img-top rounded-5 p-2" alt="..." />
              <div className="card-body border-5 text-dark">
                <h5 className='fw-bold' >BOOSTRAP</h5>

                <p className="card-text">Learn Bootstrap to build responsive, mobile-first web pages quickly and efficiently.
                </p>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div className="col-md-3 d-flex justify-content-center">  <div className="card rounded-5 " style={{ width: "18rem", backgroundColor: "white", boxShadow: "9px 9px 20px rgba(0, 0, 0, 0.3)" }}>
            <img src="js.jpg" className="card-img-top rounded-5 p-2" alt="..." />
            <div className="card-body border-5 text-dark">
              <h5 className='fw-bold' >JAVASCRIPT</h5>

              <p className="card-text"> Master JavaScript to create dynamic, interactive, and responsive web applications.</p>
            </div>
          </div>
          </div>


        </div>




      </section>
    </>
  )
}

export default LandinPage