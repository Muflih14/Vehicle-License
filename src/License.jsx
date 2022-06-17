import React from "react";
import { useState} from "react";
import GenerateLicense from "./GenerateLicense";
import LicenseDetails from "./LicenseDetails";

function License (props){
  const [licenseDetails, setLicenseDetails] = useState([]);
  const createLicense = (log) => {
    let logs = [...licenseDetails, log];
    setLicenseDetails(logs);
  };
  
  return (
    <section>
      <h5 className="licenseInfo">
      </h5>
      <GenerateLicense createLicense={createLicense} />
      <LicenseDetails license={licenseDetails} />
    </section>
  );
};

export default License;