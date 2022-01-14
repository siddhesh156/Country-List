import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getContactList,updateSearchChanged,revalClick} from '../../Redux'
import { DebounceInput } from "react-debounce-input";
import './style.css'


const EmployList = props => {

    
    const list = useSelector(state => state.accountDetails.contactList)
    const totalContacts = useSelector(state=> state.accountDetails.totalContacts)
    const totalPageCount = useSelector(state => state.accountDetails.totalPageNumber)
    const [searchChanged, setSearchChanged] = useState([])
    const [isFetching, setIsFetching] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const dispatch = useDispatch()

    useEffect(() => {
        // fetching contact list
        dispatch(getContactList())
        // add scroll event listner
        window.addEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = () => {
        if(page+1 !== totalPageCount){
            if (
                Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight ||
                isFetching
            )
                return;
            setIsFetching(true);
           // console.log(isFetching);
        }
		
	};

    const onTextChange = e => {
        e.persist();
        if(e.target.value === ""){
            // dispatch action for search
            dispatch(getContactList())
        }else{
            setLoading(true)
            dispatch(updateSearchChanged(e.target.value));
        }
        
    };

    const revalBtnClick = i => {
        // reval btn click action dispatch
        dispatch(revalClick(i))
    }

    useEffect(() => {
        if (!isFetching) return;
        dispatch(getContactList(page+1))
        setPage(page+1)
        setIsFetching(false);
    }, [isFetching]);


    useEffect(()=>{
        setLoading(false)
    },[list])
   

    // use memo used for unneccessary rendering 
    const ContactList = React.useMemo(() => {
        return list.map((item,i)=><ContactItem key={i} revalBtnClick={()=>revalBtnClick(i)} name={item.name} phoneNumber={item.phoneNumber} position={item.position} profileImage={item.profileImage} position={item.position} Reveal={item.Reveal} />)
        }, [list])
    

    


    return (
        <div>
             <div className="ml-20 ig_details_txt">IG Account Details</div>

             <div className="d-f jc-sb ml-20 mr-20 account_header">
                <div className="account_details_txt">Contacts({totalContacts})</div>
                    <div className="d-f">
                            <DebounceInput
                        className=""
                        type="text"
                        placeholder="Search by Name, job title"
                        value={searchChanged}
                        minLength={0}
                        debounceTimeout={500}
                        onChange={e => onTextChange(e)}
                    />
                        <button className="ml-20 mr-20">Feedback</button>
                    </div>
                </div>

            
            <div className="d-f f-w">
             {loading ?  <div className="d-f as-c">Loading...</div> :   ContactList }   

             {list.length === 0 ? <h2>Data Not Found</h2> :null}
          
           
            </div>

            {isFetching && <h1>Fetching more list items...</h1>}
       </div>
    );
}

export default EmployList