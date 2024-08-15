import axios from "axios";

const api = axios.create({
    //baseURL: 'https://api.fonotherapp.com.br',
    baseURL:"https://ideal-space-trout-q4v746r5xgrc4xv-3000.app.github.dev",
    timeout: 10000,
    headers:{
        "ngrok-skip-browser-warning": "69420",
    }
});



api.interceptors.request.use(async (config) => {
    // alert("entrou aqui no request")
    try {
        const userString = localStorage.getItem("usuario");
        if (userString !== null) {
            const recoverUser = JSON.parse(userString);
            if (recoverUser && recoverUser.token) {
                config.headers.Authorization = `Bearer ${recoverUser.token}`;
            }
        }

        return config;  
    } catch (error) {
        console.error("Error getting user from localStorage:", error);
        return config;
    }
});



async function setInterceptors(setUser: any) {
    api.interceptors.response.use(

        (response) => {
            return response;
        },
        async (error) => {

            // Verifique se o erro é um 401
            if (error.response && error.response.status === 401) {
                try {
                    // Limpe o localStorage
                    await localStorage.removeItem("usuario");
                    await localStorage.removeItem("pacientes");
                    setUser(null)
                } catch (localStorageError) {
                    console.error("Error removing user from localStorage:", localStorageError);
                }
            }

            // Rejeite a promessa com o erro original
            return Promise.reject(error);
        }
    );
}


export { api, setInterceptors };
