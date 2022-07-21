import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReduxUserDetail } from "../../../../state/redux/actions/userActions";


const UserDetailContainer = () => {
 
    const {userDetail} = useSelector((state) => state.user);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(setReduxUserDetail());
    }, []);
  
    useEffect(() => {}, [userDetail]);
  
    console.log(userDetail)
    
    return (
        <div>
            test
        </div>
    
        
    );
};

export default UserDetailContainer