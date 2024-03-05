const role_recievingAuthority = "LIMAS_DOCUMENT_RECEIPT";
const role_allocatingAuthority = "LIMAS_CASE_ALLOCATION";
const role_systemAdministrator = "LIMAS_ADMIN";
const role_detailedDataAuthority = "LIMAS_DETAILED_DATA_CAPTURE";
const role_caseMangementsAuthority = "LIMAS_CASE_HANDLE";
const role_caseSanctioningAuthority = "LIMAS_CASE_SANCTION";
const role_departmentLiaison = "LIMAS_TECH_SUPPORT";
const role_mec = "LIMAS_MEC";

const role_All = [
  "LIMAS_CASE_ALLOCATION",
  "LIMAS_DOCUMENT_RECEIPT",
  "LIMAS_ADMIN",
  "LIMAS_DETAILED_DATA_CAPTURE",
  "LIMAS_CASE_HANDLE",
  "LIMAS_CASE_SANCTION",
  "LIMAS_TECH_SUPPORT",
  "LIMAS_MEC",
];

const route_recievingAuthority = "/ReceivingAuthority";
const route_allocatingAuthority = "/AllocatingAuthority";
const route_systemAdministrator = "/SystemAdmin";
const route_detailedDataAuthority = "/DataEntryAuthority";
const route_caseMangementsAuthority = "/CaseManagement";
const route_caseSanctioningAuthority = "/CaseSanction";
const route_departmentLiaison = "/DepartmentLiaison";
const route_mec = "/Mec";

const UserRoles = {
  role_allocatingAuthority,
  role_recievingAuthority,
  role_systemAdministrator,
  role_detailedDataAuthority,
  role_caseMangementsAuthority,
  role_caseSanctioningAuthority,
  role_departmentLiaison,
  role_mec,
  route_allocatingAuthority,
  route_caseMangementsAuthority,
  route_caseSanctioningAuthority,
  route_departmentLiaison,
  route_detailedDataAuthority,
  route_recievingAuthority,
  route_systemAdministrator,
  route_mec,
  role_All,
};

export default UserRoles;
