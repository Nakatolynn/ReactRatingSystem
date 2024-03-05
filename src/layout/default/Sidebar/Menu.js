import React from "react";
import classNames from "classnames";

// import getParents from '../../../utilities/getParents';
import slideUp from "../../../utilities/slideUp";
import slideDown from "../../../utilities/slideDown";
import getParents from "../../../utilities/getParents";

// import { RiTeamLine } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";

// import AuthService from "../../../pages/userMgmt/authsMgmt/widgets/auth.service";
import UserRoles from "../Constants/userRoles";

// function MenuHeading({ className, text, ...props }) {
//   const compClass = classNames({
//     "nk-menu-heading": true,
//     [className]: className,
//   });
//   return (
//     <li className={compClass}>
//       <h6 className="overline-title">{text || props.children}</h6>
//     </li>
//   );
// }

function MenuItemTemplate({ text, icon }) {
  return (
    <>
      {icon && (
        <span className="nk-menu-icon">
          <em className={`icon ni ni-${icon}`}></em>
        </span>
      )}
      {text && <span className="nk-menu-text">{text}</span>}
    </>
  );
}

function MenuItemLink({ text, icon, sub, to, blank, onClick }) {
  return (
    <>
      {!blank && !sub && (
        <NavLink className="nk-menu-link" to={to}>
          <MenuItemTemplate icon={icon} text={text} />
        </NavLink>
      )}
      {blank && (
        <Link className="nk-menu-link" to={to} target="_blank">
          <MenuItemTemplate icon={icon} text={text} />
        </Link>
      )}
      {sub && (
        <a
          className="nk-menu-link nk-menu-toggle"
          onClick={onClick}
          href="#expand"
        >
          <MenuItemTemplate icon={icon} text={text} />
        </a>
      )}
    </>
  );
}

function MenuItem({ sub, className, ...props }) {
  const compClass = classNames({
    "nk-menu-item": true,
    "has-sub": sub,
    [className]: className,
  });
  return <li className={compClass}>{props.children}</li>;
}

function MenuSub({ mega, className, ...props }) {
  const compClass = classNames({
    "nk-menu-sub": true,
    [className]: className,
  });
  return <ul className={compClass}>{props.children}</ul>;
}

function MenuList({ className, ...props }) {
  const compClass = classNames({
    "nk-menu": true,
    [className]: className,
  });
  return <ul className={compClass}>{props.children}</ul>;
}

function Menu({ currentUser, currentUserName }) {
  //setting currentUser
  // const [currentUser, setCurrentUser] = useState();
  // const [currentUserName, setCurrentUserName] = useState();

  // variables for Sidebar
  let menu = {
    classes: {
      main: "nk-menu",
      item: "nk-menu-item",
      link: "nk-menu-link",
      toggle: "nk-menu-toggle",
      sub: "nk-menu-sub",
      subparent: "has-sub",
      active: "active",
      current: "current-page",
    },
  };

  let currentLink = function (selector) {
    let elm = document.querySelectorAll(selector);
    elm.forEach(function (item) {
      var activeRouterLink = item.classList.contains("active");
      if (activeRouterLink) {
        let parents = getParents(
          item,
          `.${menu.classes.main}`,
          menu.classes.item
        );
        parents.forEach((parentElemets) => {
          parentElemets.classList.add(
            menu.classes.active,
            menu.classes.current
          );
          let subItem = parentElemets.querySelector(`.${menu.classes.sub}`);
          subItem !== null && (subItem.style.display = "block");
        });
      } else {
        item.parentElement.classList.remove(
          menu.classes.active,
          menu.classes.current
        );
      }
    });
  };

  // dropdown toggle
  let dropdownToggle = function (elm) {
    let parent = elm.parentElement;
    let nextelm = elm.nextElementSibling;
    let speed =
      nextelm.children.length > 5 ? 400 + nextelm.children.length * 10 : 400;
    if (!parent.classList.contains(menu.classes.active)) {
      parent.classList.add(menu.classes.active);
      slideDown(nextelm, speed);
    } else {
      parent.classList.remove(menu.classes.active);
      slideUp(nextelm, speed);
    }
  };

  // dropdown close siblings
  let closeSiblings = function (elm) {
    let parent = elm.parentElement;
    let siblings = parent.parentElement.children;
    Array.from(siblings).forEach((item) => {
      if (item !== parent) {
        item.classList.remove(menu.classes.active);
        if (item.classList.contains(menu.classes.subparent)) {
          let subitem = item.querySelectorAll(`.${menu.classes.sub}`);
          subitem.forEach((child) => {
            child.parentElement.classList.remove(menu.classes.active);
            slideUp(child, 400);
          });
        }
      }
    });
  };

  let menuToggle = function (e) {
    e.preventDefault();
    let item = e.target.closest(`.${menu.classes.toggle}`);
    dropdownToggle(item);
    closeSiblings(item);
  };

  // useEffect(() => {
  //   currentLink(`.${menu.classes.link}`);
  //   const user = AuthService.getCurrentUser();
  //   if (user) {
  //     setCurrentUser(user);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (currentUser && currentUser.data) {

  //     console.log(currentUser);
  //     setCurrentUserName(
  //       currentUser.data.userDetails.adSearchModel.accountName
  //     );
  //   }
  // }, [currentUser]);

  return (
    <MenuList>
      {currentUser ? (
        <>
          {/* Dashboards    */}
          <MenuItem sub>
            <MenuItemLink
              icon="dashboard"
              text="Dashboard"
              onClick={menuToggle}
              sub
            />
            <MenuSub>
              {currentUser.data.userRoles.includes(
                UserRoles.role_recievingAuthority
              ) && (
                <MenuItem>
                  <MenuItemLink
                    text="Receiving Authority"
                    to="/ReceivingAuthority"
                  />
                </MenuItem>
              )}

              {currentUser.data.userRoles.includes(
                UserRoles.role_detailedDataAuthority
              ) && (
                <MenuItem>
                  <MenuItemLink
                    text="Data Entry Authority"
                    to="/DataEntryAuthority"
                  />
                </MenuItem>
              )}

              {currentUser.data.userRoles.includes(
                UserRoles.role_allocatingAuthority
              ) && (
                <MenuItem>
                  <MenuItemLink
                    text="Allocating Authority"
                    to="/AllocatingAuthority"
                  />
                </MenuItem>
              )}

              {currentUser.data.userRoles.includes(
                UserRoles.role_caseMangementsAuthority
              ) && (
                <MenuItem>
                  <MenuItemLink text="Case Management" to="/CaseManagement" />
                </MenuItem>
              )}

              {currentUser.data.userRoles.includes(
                UserRoles.role_caseSanctioningAuthority
              ) && (
                <MenuItem>
                  <MenuItemLink text="Case Sanction" to="/CaseSanction" />
                </MenuItem>
              )}

              {currentUser.data.userRoles.includes(
                UserRoles.role_departmentLiaison
              ) && (
                <MenuItem>
                  <MenuItemLink
                    text="Department Liason"
                    to="/DepartmentLiaison"
                  />
                </MenuItem>
              )}

              {currentUser.data.userRoles.includes(UserRoles.role_mec) && (
                <MenuItem>
                  <MenuItem>
                    <MenuItemLink text="MEC" to="/Mec" />
                  </MenuItem>
                </MenuItem>
              )}

              {currentUser.data.userRoles.includes(
                UserRoles.role_systemAdministrator
              ) && (
                <>
                  <MenuItem>
                    <MenuItemLink
                      text="System Administrator"
                      to="/SystemAdmin"
                    />
                  </MenuItem>
                </>
              )}
            </MenuSub>
          </MenuItem>

          {/* Documents menu*/}
          {currentUser.data.userRoles.includes(
            UserRoles.role_recievingAuthority
          ) && (
            <MenuItem sub>
              <MenuItemLink
                icon="folders"
                text="Documents"
                onClick={menuToggle}
                sub
              />
              <MenuSub>
                <MenuItem>
                  <MenuItemLink
                    text="Receive Manual Document"
                    to="/documents/manual-doc-receipt"
                  />
                </MenuItem>
                <MenuItem>
                  <MenuItemLink
                    text="New Online Documents"
                    to="/documents/new-online-docs"
                  />
                </MenuItem>
                <MenuItem>
                  <MenuItemLink
                    text="Received Documents"
                    to="/documents/received"
                  />
                </MenuItem>
                {/* <MenuItem>
              <MenuItemLink
                text="Document Search"
                to="/documents/docSearch"
              />
            </MenuItem> */}
              </MenuSub>
            </MenuItem>
          )}

          {/* Team management menu*/}
          {/* {currentUser.data.userRoles.includes(
            UserRoles.role_allocatingAuthority
          ) && (
              <MenuItem sub>
                <MenuItemLink
                  icon="users"
                  text="Team Management"
                  onClick={menuToggle}
                  sub
                />
                <MenuSub>
                  <MenuItem>
                    <MenuItemLink text="View Teams" to="/teamMgmt/team-list" />
                  </MenuItem>
                  <MenuItem>
                    <MenuItemLink text="Create Team" to="/teamMgmt/team-Create" />
                  </MenuItem>
                </MenuSub>
              </MenuItem>
            )}

          {/* Case Closure management menu*/}
          {(currentUser.data.userRoles.includes(
            UserRoles.role_allocatingAuthority
          ) ||
            currentUser.data.userRoles.includes(
              UserRoles.role_caseMangementsAuthority
            )) && (
            <MenuItem sub>
              <MenuItemLink
                icon="briefcase"
                text="Case Management"
                onClick={menuToggle}
                sub
              />
              <MenuSub>
                {/* <MenuItem>
                  <MenuItemLink
                    text="My Teams"
                    to={`/teamMgmt/my-teams/${currentUserName}`}
                  />
                </MenuItem> */}
                <MenuItem>
                  <MenuItemLink text="Cases List" to="/case-list" />
                </MenuItem>
              </MenuSub>
            </MenuItem>
          )}

          {/* Query MAnagement */}
          <MenuItem sub>
            <MenuItemLink
              icon="question"
              text="Query Management"
              onClick={menuToggle}
              sub
            />
            <MenuSub>
              <MenuItem>
                <MenuItemLink text="All Queries" to="/query" />
              </MenuItem>
            </MenuSub>
          </MenuItem>

          {/* Reports Management Menu */}
          {/* {currentUser.data.userRoles.includes(
            UserRoles.role_systemAdministrator
          ) && ( */}
            <MenuItem sub>
              <MenuItemLink
                icon="reports"
                text="Reports"
                onClick={menuToggle}
                sub
              />
              <MenuSub>
              <MenuItem>
                  <MenuItemLink
                    text="View Reports"
                    to="/reports/reports-home"
                  />
                </MenuItem>
                {/* <MenuItem>
                  <MenuItemLink
                    text="Case Category"
                    to="/reports/case-category-count"
                  />
                </MenuItem>
                <MenuItem>
                  <MenuItemLink
                    text="Risk Profile"
                    to="/reports/risk-profile-count"
                  />
                </MenuItem>
                <MenuItem>
                  <MenuItemLink
                    text="Amount In Dispute"
                    to="/reports/amount-in-dispute"
                  />
                </MenuItem>
                <MenuItem>
                    <MenuItemLink
                      text="Duration of Cases"
                      to="/reports/duration-of-cases"
                    />
                  </MenuItem>
                <MenuItem>
                  <MenuItemLink text="Case Status" to="/reports/case-status" />
                </MenuItem>
                <MenuItem>
                  <MenuItemLink
                    text="Case Duration"
                    to="/reports/case-duration"
                  />
                </MenuItem>
                <MenuItem>
                  <MenuItemLink
                    text="Success Rate"
                    to="/reports/success-rate"
                  />
                </MenuItem>
                <MenuItem>
                  <MenuItemLink
                    text="Consent Status"
                    to="/reports/consent-status"
                  />
                </MenuItem> 
               <MenuItem>
                  <MenuItemLink
                    text="Case Subcategory"
                    to="/reports/case-subcategory-count"
                  />
                </MenuItem>
                <MenuItem>
                  <MenuItemLink text="Tax Cases" to="/reports/tax-case-count" />
                </MenuItem>
                <MenuItem>
                  <MenuItemLink
                    text="Non-Tax cases"
                    to="/reports/nontax-case-count"
                  />
                </MenuItem> 
                <MenuItem>
                  <MenuItemLink
                    text="Document Status"
                    to="/reports/document-status-count"
                  />
                </MenuItem> */}
              </MenuSub>
            </MenuItem>
          {/* )} */}

          {/* Calendar Management Menu */}
          <MenuItem sub>
            <MenuItemLink
              icon="calender-date"
              text="Calendar"
              onClick={menuToggle}
              sub
            />
            <MenuSub>
              <MenuItem>
                <MenuItemLink text="Schedule" to="/CalendarFunction" />
              </MenuItem>
            </MenuSub>
          </MenuItem>

          {/* User Management Menu */}
          {currentUser.data.userRoles.includes(
            UserRoles.role_systemAdministrator
          ) && (
            <MenuItem sub>
              <MenuItemLink
                icon="user"
                text="User Management"
                onClick={menuToggle}
                sub
              />
              <MenuSub>
                <MenuItem>
                  <MenuItemLink
                    text="Register User"
                    to="/authsMgmt/auth-register"
                  />
                </MenuItem>
                <MenuItem>
                  <MenuItemLink text="Users List" to="/userMgmt/user-list" />
                </MenuItem>
              </MenuSub>
            </MenuItem>
          )}
        </>
      ) : null}
    </MenuList>
  );
}

export default Menu;
