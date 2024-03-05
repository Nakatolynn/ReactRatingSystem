import React, { useLayoutEffect } from 'react'

import AppRoot from '../global/AppRoot'
import AppMain from '../global/AppMain'
import AppWrap from '../global/AppWrap'
import AppContent from '../global/AppContent'

import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import LayoutProvider from './LayoutProvider'
import useTokenExpiryCheck from '../../pages/userMgmt/authsMgmt/widgets/useTokenExpiryCheck'
import { useState } from 'react'
import LoginModal from '../../pages/userMgmt/authsMgmt/widgets/LoginModal'

function Default({title,content,...props}) {
  const [showLogin, setShowLoginModal] = useState(false);
  const [userName, setLoginUserName] = useState("");
  
  useTokenExpiryCheck({ setShowLoginModal,showLogin,setLoginUserName });

  useLayoutEffect(() => {
    document.title = `LIMAS`;
  });

  return (
    <LayoutProvider>
      <AppRoot> 
          <AppMain>
              <Sidebar/>
              <AppWrap>
                  <Header/>
                  <LoginModal show={showLogin} setShowLoginModal={setShowLoginModal} userName={userName} ></LoginModal>
                  <AppContent content={content}>
                      {props.children}
                  </AppContent>
                  <Footer />
              </AppWrap>
          </AppMain>
      </AppRoot>
    </LayoutProvider>
  )
}

export default Default