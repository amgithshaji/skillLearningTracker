import React from 'react'
import { Link } from 'react-router-dom'

import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
import logo from '/hyred.png';



function LandinPage() {
  return (
    <>
      <section style={{ minHeight: "100vh", width:"100%",backgroundColor: "#f2f2f2" }}>
        <div style={{ paddingTop: "150px" }} className='text-center mb-1'>
          <h1 style={{ fontFamily: "Libre Baskerville, serif", letterSpacing: "-3px", fontSize: "45px" }} >Track.<span style={{ color: "blue", fontFamily: "Libre Baskerville, serif", }} > Learn.</span> Grow.</h1>
          <h1 style={{ fontSize: "clamp(28px, 8vw, 90px)" }} className='fw-bold' >Track Progress<span style={{ color: "blue", }}> Now</span></h1>
          <div className='fs-5' >
            <>Monitor your skills with clarity and precision.</>
            <p>Stay organized. Stay ahead.</p>
          </div >
          <Link to={'/skillgenerator'}  ><button style={{ backgroundColor: "blue", fontSize: "20px" }} className='btn rounded-5 me-3 fw-light text-white'>Get Started for free</button></Link>
          <Link to={'/viewskill'} ><button style={{ fontSize: "20px" }} className='btn btn border-dark rounded-5 fw-light ' >check skill now</button></Link>
        </div>
        <div className="row text-center mt-4 g-0">
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
          <div className="col-md-2 d-flex justify-content-center ">
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
        <h1 style={{ fontSize: "clamp(18px, 5vw, 90px)" }} className='text-center mt-5 mb-4 fw-bold' >How Progress <span style={{ color: "blue" }}  >Tracker </span>  <br />  <span style={{ color: "blue" }}>Gonna Help</span> Archive Your Goal</h1>

        <div className='text-center '>
          <h6 className=''>Progress Tracker helps you stay organized and consistent by tracking your skills, goals, and daily learning progress.It also gives you <br /> clear insights and motivation so you always know how far you’ve come and what to improve next.</h6>
        </div>
        <div className="container mt-5">
          <div className="row g-4">

            <div className="col-12 col-md-4 ">
              <div style={{ minHeight: "45vh" }} className=' text-black  rounded-4 fs-4'>
                {/* <div className="card rounded-4" style={{ width: "18rem", backgroundColor: "white", boxShadow: "9px 9px 20px rgba(0, 0, 0, 0.3)" }}> */}
                <img style={{ maxHeight: "45vh", objectFit: "cover" }} src="https://i.pinimg.com/736x/4a/51/fe/4a51fe30b0dd75acf5661009e4588e5b.jpg" className="card-img-top rounded-4 " alt="..." />
                {/* <div className="card-body border-5 text-dark">
                <h5 className='fw-bold' >CSS</h5>
                <p className="card-text">Learn CSS fundamentals to style, layout, and animate web pages.</p>
              </div> */}
                {/* </div> */}
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div style={{ minHeight: "45vh" }} className='bg-white text-black shadow p-4 rounded-4 fs-4'>
                <h4><TbCircleNumber1 className='text-primary fs-1 mb-3 ' /></h4>

                <h5 style={{ marginTop: "125px" }} >
                  Track Your Learning Progress
                </h5>
                <h6 className='fw-light' >It lets you monitor how much you have learned in each programming language — HTML, CSS, JavaScript, React, Git, etc.</h6>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div style={{ minHeight: "45vh" }} className='bg-white text-black shadow border-dark p-4 rounded-4 fs-4'>
                <h4 ><   TbCircleNumber2 className=' text-primary fs-1 mb-3 ' /></h4>
                <h5 style={{ marginTop: "120px" }} >
                  Identify Your Strengths & Weaknesses

                </h5>
                <h6 className='fw-light' >It clearly shows which skills you’ve mastered and which ones you need to improve, helping you focus your learning exactly where it matters most.</h6>
              </div>
            </div>

          </div>
        </div>
     <div className='text-center'>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 90px)" }} className=' mt-5 mb-4 fw-bold' >How to<span style={{ color: "blue" }}> Use</span>  <span style={{ color: "blue" }}> <br />Skill</span> Progress Tracker</h1>
          <h6>Start by clicking Get Started, then fill in the skill form — add the programming language, choose the topics, set the status, <br /> write a note, and pick a deadline for when you plan to finish. </h6>
     </div>

        {/* second grid */}
         <div className="container mt-5">
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div style={{ minHeight: "65vh" }} className='text-black text-center p-4 rounded-4 fs-4 d-flex align-items-center justify-content-center flex-column'>
                <h4><TbCircleNumber1 className='text-primary fs-1 ' /></h4>

                <h5 style={{ marginTop: "" }} >
                  Add Your Skill Details
                </h5>
                <h6 className='fw-light' >Choose the programming language you want to learn. Add the topics inside it, set your current status and pick a deadline. This helps you stay organised and track exactly what you're learning.</h6>
              </div>
            </div>
    <div className="col-12 col-md-4 ">
              <div style={{ minHeight: "70vh", backgroundColor: "" }} className='  rounded-4 fs-4'>
         
                <img style={{ maxHeight: "70vh", objectFit: "cover" }} src="https://i.pinimg.com/736x/6a/0f/90/6a0f9003a41b90ac5186b9d2aaa96228.jpg" className="card-img-top rounded-4 " alt="..." />
            
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div style={{ minHeight: "65vh" }} className='text-black text-center p-4 rounded-4 fs-4 d-flex align-items-center justify-content-center flex-column'>
                <h4><TbCircleNumber2 className='text-primary fs-1 ' /></h4>

                <h5 style={{ marginTop: "" }} >
                  Stay on Track & Improve Faster
                </h5>
                <h6 className='fw-light' >Update your progress anytime. Add notes like need more practice or revise this concept again.The tracker helps you stay focused, finish before your deadline, and grow your skills step-by-step.</h6>
              </div>
            </div>

          </div>
        </div>



      </section>

    </>
  )
}

export default LandinPage