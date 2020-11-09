import axios from "axios";

export const registration = async (name, email, password) => {
    try {
        const response = await axios.post(
            "http://localhost:5000/api/auth/registration",
            {
                name,
                email,
                password,
            }
        );
        return console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

export const login =  (email, password) => {
    console.log(email, password);
    return async () => {
        try {
            const response = await axios.post( "http://localhost:5000/api/auth/login", {
                email,
                password
            })

            // localStorage.setItem("token", response.data.token);
            return console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
}

