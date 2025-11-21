import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faSquareLinkedin, faInstagram, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <section className='p-4' style={{ backgroundColor: "#f2f2f2", height: "auto" }}>
      <div className='border-dark rounded-5 shadow   ' style={{ backgroundColor: "#ffffffff", width: "100%", height: "auto" }} >
        <div className='row' >
          <div className="col-md-6 col-12 ">
            <img className='ms-5' style={{ width: "16%" }} src="/hyred.png" alt="" />
            <div className='px-5'>
              <h5 className='ms-2 mt-1 fw-light ' >Subscribe to our news later</h5>
              <div className='d-flex gap-1 '>
                <input style={{ width: "38%" }} type="text" className='form-control rounded-5' placeholder='Enter your email' />
                <button style={{ background: "blue" }} className='btn text-white rounded-5 ' >Subscribe</button>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-12 text-center text-md-start">
            <div className='py-5 lh-1 ' >
              <h5 className='mb-3' >Quick Links</h5>
              <Link to={"/"} className='text-decoration-none' ><p className='fw-light text-dark' >Home Page</p></Link>
              <Link to={"/skillgenerator "} className='text-decoration-none' ><p className='fw-light text-dark' >Skill Generator</p></Link>
              <Link to={"/viewskilll"} className='text-decoration-none' ><p className='fw-light text-dark' >Skill View</p></Link>


            </div>
          </div>
          <div className="col-md-2 col-12 text-center text-md-start">
            <div className='py-5 lh-1 ' >
              <h5 className='mb-3' >Follow Us</h5>
              <Link to={"https://www.linkedin.com/in/amgith-shaji-a47849323/"} className='text-decoration-none' ><p className='fw-light text-dark' >Linkedin</p></Link>
              <Link to={""} className='text-decoration-none' ><p className='fw-light text-dark' >Facebook</p></Link>
              <Link to={""} className='text-decoration-none' ><p className='fw-light text-dark' >Instagram</p></Link>
              <Link to={""} className='text-decoration-none' ><p className='fw-light text-dark' >YouTube</p></Link>



            </div>
          </div>
          <div className="col-md-2 col-12 text-center text-md-start">
            <div className='py-5 lh-1 ' >
              <h5 className='mb-3' >Supports</h5>
              <Link to={""} className='text-decoration-none' ><p className='fw-light text-dark' >Technical Support</p></Link>
              <Link to={""} className='text-decoration-none' ><p className='fw-light text-dark' >Privacy Policy</p></Link>
              <Link to={""} className='text-decoration-none' ><p className='fw-light text-dark' >Terms of Use</p></Link>


            </div>
          </div>

        </div>
        <hr />
        <div className='d-flex justify-content-between px-5'>
          <p className='fw-light' >Made with React — <em>amgith</em></p>
          <p className='fw-light' >©2025 hyred.All Right Reseved</p>
          <p className='' ><FontAwesomeIcon className='fs-3 text-dark' icon={faXTwitter} />
            <Link to={"https://www.linkedin.com/in/amgith-shaji-a47849323/"}>
              <FontAwesomeIcon className='fs-3 text-dark' icon={faSquareLinkedin} /></Link>
            <FontAwesomeIcon className='fs-3 text-dark' icon={faInstagram} />
            <Link to={"https://github.com/amgithshaji"}> <FontAwesomeIcon className='fs-3 text-dark' icon={faGithub} /></Link>


          </p>

        </div>

      </div>
    </section>
  )
}

export default Footer