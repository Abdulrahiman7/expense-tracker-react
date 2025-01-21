import React from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ResetStatus = () => {

    const query = new URLSearchParams(useLocation().search);

    // Check for confirmation status
    const mode = query.get("mode"); // Should be 'resetPassword'
    const oobCode = query.get("oobCode"); // The verification code
   
  
    // Verify the oobCode with Firebase
    const verifyPasswordReset = async () => {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=AIzaSyBbP7XnwDNnKLFn5TocX9XAiUNhtZVK57c`;
        const response = await axios.post(url, { oobCode });
        console.log("Password reset success:", response.data);
        alert("Password has been successfully reset!");
      } catch (error) {
        console.error("Error verifying password reset:", error.response?.data || error.message);
        alert("Invalid or expired password reset link.");
      }
    };
  
    React.useEffect(() => {
      if (mode === "resetPassword" && oobCode) {
        verifyPasswordReset();
      }
    }, [mode, oobCode]);

  return (
    <div>ResetStatus</div>
  )
}

export default ResetStatus