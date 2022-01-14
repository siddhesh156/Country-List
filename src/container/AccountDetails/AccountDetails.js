import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './style.css'

const AccountDetails = props => {

    //all dummy data stored in state

    const dispatch = useDispatch()
    const [companyName, setCompanyName] = useState("ABB Ltd");
    const [powerIndustry, setPowerIndustry] = useState("Electrical Equipment, Appliance and Component Manufacturing");
    const [Address, setAddress] = useState("Affolternstrasse 44, 8050 Zürich, Switzerland");
    const [revenue, setRevenue] = useState("$1B+");
    const [Phone, setPhone] = useState("+41 433177111");
    const [employSize, setEmploySize] = useState("10,001+");
    const [website, setWebsite] = useState("Social.abb");
    const [SBC, setSBC] = useState("36 - Electronic, Electrical Equipment & components Except Computer Equipment");
    const [ownership, setOwnership] = useState("Corporation");
    const [NAICS, setNAICS] = useState("35 - Electrical Equipment, Appliance and Component Manufacturing");
    const [linkdinUrl, setLinkdinUrl] = useState("https://www.linkedin.com/company/abb");
    const [allIndustry, setallIndustry] = useState("Manufacture Electrical Equipment, Appliance and Component Manufacturing");
    const [parentCompany, setparentCompany] = useState("ABB Ltd");
    const [allSBC, setallSBC] = useState("36 - Electrical Equipment, Appliance and Component Manufacturing");

    return (
       <div>
           <div className="ml-20 ig_details_txt">IG Account Details</div>
           <div>
                <div className="d-f jc-sb ml-20 mr-20 account_header">
                    <div className="account_details_txt">Account Details</div>
                    <div className="d-f">
                        <button>Update</button>
                        <button className="ml-20 mr-20">Feedback</button>
                        <button onClick={()=>props.history.push('/list')}>Employ List</button>
                    </div>
                </div>

                <div className="d-f ml-20 mr-20 company_header_container">
                <img
                    className="as-c"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/640px-ABB_logo.svg.png" 
                    height={20}
                    width={40}
                    alt=""
                    />
                    <div className="ml-20 mr-20 company_name_container">
                        <div className="company_name_header">ABB LTD</div>
                        <div className="address_header">Affolternstrasse 44, 8050 Zürich, Switzerland</div>
                    </div>
                    <div className="ml-20">
                        <div className="website_header">Social.abb</div>
                        <div className="phoneNumber_header">+4373937747347</div>
                    </div>
                </div>

                <div className="d-f mobile_row">
                    <div className="w-f ml-20 mr-20 mt-10">
                        <div className="company_name">Company Name</div>
                        {/* use inputtype text beacuse we can update text */}
                        <input id="text_input" type="text" readOnly={true} value={companyName}/>
                    </div>

                    <div className="w-f ml-20 mr-20 mt-10">
                        <div className="company_name">Power Industry</div>
                        <input id="text_input"  type="text" readOnly={true} value={powerIndustry}/>
                    </div>

                </div>  

                 <div className="d-f mobile_row">  
                    <div className="w-f ml-20 mr-20 mt-10">
                        <div className="company_name">Address </div>
                        <input id="text_input" type="text" readOnly={true} value={Address}/>
                    </div>

                    <div className="w-f ml-20 mr-20 mt-10">
                        <div className="company_name">Revenue</div>
                        <input id="text_input"  type="text" readOnly={true} value={revenue}/>
                    </div>
                    </div>
                    <div className="d-f mobile_row">
                    <div className="w-f ml-20 mr-20 mt-10">
                        <div className="company_name">Phone</div>
                        <input id="text_input"  id="text_input" type="text" readOnly={true} value={Phone}/>
                    </div>

                    <div className="w-f ml-20 mr-20 mt-10">
                        <div className="company_name">Employ Size</div>
                        <input id="text_input"  type="text" readOnly={true} value={employSize}/>
                    </div>
                </div>

                <div className="d-f mobile_row">

                    <div className="w-f ml-20 mr-20 mt-10">
                        <div className="company_name">Website </div>
                        <input id="text_input"  id="text_input" type="text" readOnly={true} value={website}/>
                    </div>

                    <div className="w-f ml-20 mr-20 mt-10">
                        <div className="company_name">SBC</div>
                        <input id="text_input"  type="text" readOnly={true} value={SBC}/>
                    </div>
                </div>

                <div className="d-f mobile_row">
                    <div className="w-f ml-20 mr-20 mt-10">
                        <div className="company_name">Ownership</div>
                        <input id="text_input" id="text_input" type="text" readOnly={true} value={ownership}/>
                    </div>

                    <div className="w-f ml-20 mr-20 mt-10">
                        <div className="company_name">NAICS</div>
                        <input id="text_input"  type="text" readOnly={true} value={NAICS}/>
                    </div>
                </div>

                <div className="d-f mobile_row">
                    <div className="w-f ml-20 mr-20 mt-10">
                        <div className="company_name">Linkdin Url </div>
                      <a href={linkdinUrl} > <input id="text_input" style={{color:"blue"}} type="text" readOnly={true} value={linkdinUrl}/> </a>
                    </div>

                    <div className="w-f ml-20 mr-20 mt-10">
                        <div className="company_name">All Industry</div>
                        <input id="text_input"  type="text" readOnly={true} value={allIndustry}/>
                    </div>
                </div>

                <div className="d-f mobile_row">    
                    <div className="w-f ml-20 mr-20 mt-10">
                        <div className="company_name">Parent Company </div>
                        <input id="text_input" type="text" readOnly={true} value={parentCompany}/>
                    </div>

                    <div className="w-f ml-20 mr-20 mt-10">
                        <div className="company_name">All SBC</div>
                        <input id="text_input"  type="text" readOnly={true} value={allSBC}/>
                    </div>

                </div>

           </div>


       </div>
    );
}

export default AccountDetails