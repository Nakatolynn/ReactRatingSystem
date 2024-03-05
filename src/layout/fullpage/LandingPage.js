import React, { useLayoutEffect } from 'react'
import classNames from 'classnames'
import { Nav, Navbar, NavbarBrand, Button, Container, NavDropdown } from 'react-bootstrap'
import {
  MDBBtn,
  MDBContainer,

  MDBRow,
  MDBCol,

}
  from 'mdb-react-ui-kit';

function LandingPage({ title, mask, centered, className, ...props }) {
  const compClass = classNames({
    'main-content': true,
    'align-items-center justify-content-center': centered,
    'has-mask': mask,
    [className]: className
  });
  const maskClass = classNames({
    'mask': true,
    [`mask-${mask}`]: mask
  })
  useLayoutEffect(() => {
    document.title = ` LIMAS`;
  });

  const activeKey = window.location.pathname; // Get the current pathname

  return (
    <>

      {props.showTopNav ?
        <><Navbar id="header" className="fixed-top p-0" expand="md">
          <Container className="d-flex align-items-center p-2">
            <img src={require("../../assets/images/home/mmmmmmmmmmmmmm.png")} />
            {/* <img src={require("../../assets/images/home/URA-Tower-and-flag-1200-x-628-1-1024x536.jpg")} /> */}
            <Navbar.Brand href="/"><b>LIMAS</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
              <Nav className="mr-auto" variant="" activeKey={activeKey}>
                <Nav.Link href="/" className="nav-link scrollto">Home</Nav.Link>
                <Nav.Link href='/home/submit-online-document' > Submit Online Document </Nav.Link>
                <Nav.Link href='/home/submit-query' className=''> Submit A Query </Nav.Link>
                <Nav.Link className='' href='/'> Log In </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar></> : <></>}
      {/*  */}

      {/* ======= Place the child component here ======= */}

      <div id="header2" className={compClass}>
        {mask && <div className={maskClass}></div>}
        {props.children}
      </div>

      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="footer-top p-2">
          <MDBContainer className='p-1'>
            <MDBRow>
              <MDBCol lg='6' md='12' className='mb-1 mb-md-0'>
                <h5 className='text-uppercase text-black'>URA LITIGATION</h5>
                <p className='text-white'>
                  MANDATE: To represent and defend the organisation in all courts of law and Tribunals.
                  <br />VISION: "To Become A World Class In-House Tax Litigation Law Firm".
                  <br /><i>Developing uganda Together!</i>
                </p>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-1 mb-md-0'>
                <h5 className='text-uppercase text-black'>contact us</h5>
                <p className='text-white'>
                  URA HeadQuarters,Nakawa
                  <br />Phone: 08001170009 Toll Free
                  <br />Email: info@ura.go.ug
                  <br />Nakawa Industrial Area
                </p>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-1 mb-md-0'>
                <h5 className='text-uppercase text-black mb-0'>useful links</h5>
                <ul className='list-unstyled'>
                  <li>
                    <a href='#!' className='text-white'>
                      URA website: ura.go.ug
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      URA TouchPoint
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      ECCMIS Site
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      eTax
                    </a>
                  </li>
                </ul>
                {/* <Button variant='secondary'> <a href="/FilterPanel" class="alert-link"> Submit Here</a></Button>  */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-white' href='ura.go.ug'>
            LIMAS Devs
          </a>
        </div>

        {/* <div className='text-center p-3 text-yellow' style={{ backgroundColor: 'rgba(8, 255, 255, 0.2)' }} >

          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-white' href='ura.go.ug'>
            LIMAS Devs
          </a>
        </div> */}
      </footer>{/* End Footer */}

    </>
  )
}

export default LandingPage