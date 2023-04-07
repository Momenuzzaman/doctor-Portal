import { useState } from "react";
import { useEffect } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(response => response.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('access_token', data.accessToken);
                        setToken(data.accessToken)
                    }
                })
        }
    }, [email]);
    return [token]
};
export default useToken;