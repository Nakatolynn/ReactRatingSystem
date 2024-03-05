import React, {useState, useEffect} from 'react'
import classNames from 'classnames'

import SimpleBar from 'simplebar-react'
import { Logo } from '../../../components/'
import Menu from './Menu'
import ToggleCompact from '../Toggle/Compact'
import ToggleSidebar from '../Toggle/Sidebar'
import AuthService from '../../../pages/userMgmt/authsMgmt/widgets/auth.service'

import { useLayout, useLayoutUpdate } from './../LayoutProvider'; 

function Sidebar() {
  const layout = useLayout();
  const layoutUpdate = useLayoutUpdate();

  const [currentUser, setCurrentUser] = useState();
  const [currentUserName, setCurrentUserName] = useState();
  const [currentUserRoles, setCurrentUserRoles] = useState();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    if (currentUser && currentUser.data) {
      setCurrentUserName(
        currentUser.data.userDetails.adSearchModel.accountName
      );
      setCurrentUserRoles(
        currentUser.data.userRoles
      );
    }
  }, [currentUser]);

  const compClass= classNames({
    'nk-sidebar nk-sidebar-fixed':true,
    'is-compact': layout.sidebarCompact,
    'sidebar-active': layout.sidebarActive,
    [`is-${layout.sidebarVariant}`]: layout.sidebarVariant,
  });

  return (
    <>
      {layout.sidebarActive && <div className="sidebar-overlay" onClick={layoutUpdate.sidebarMobile}></div>}
      <div className={compClass}>
          <div className="nk-sidebar-element nk-sidebar-head">
              <div className="nk-sidebar-brand">
                  <Logo currentUserRoles={currentUserRoles} />
                  <ToggleCompact />
                  <ToggleSidebar />
              </div>
          </div>
          <div className="nk-sidebar-element nk-sidebar-body">
              <div className="nk-sidebar-content">
                <SimpleBar className="nk-sidebar-menu">
                  <Menu currentUser={currentUser} currentUserName={currentUserName}/>
                </SimpleBar>
              </div>
          </div>
      </div>
    </>
  )
}

export default Sidebar