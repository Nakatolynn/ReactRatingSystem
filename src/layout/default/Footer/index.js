import React from 'react'
import Nav from 'react-bootstrap/nav'

function Footer() {
  return (
    <div className="nk-footer">
        <div className="container-fluid">
            <div className="nk-footer-wrap">
                <div className="nk-footer-copyright"> 
                    &copy; 2023 LIMAS
                </div>
                {/* <div className="nk-footer-links">
                  <Nav as="ul" className="nav-sm">
                      <Nav.Item as="li">
                          <Nav.Link href="#link">Link 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                          <Nav.Link href="#link">Link 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                          <Nav.Link href="#link">Link 3</Nav.Link>
                      </Nav.Item>
                  </Nav>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Footer