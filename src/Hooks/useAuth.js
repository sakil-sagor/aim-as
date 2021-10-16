import { useContext } from "react"
import AuthProvider, { AuthContext } from "../Context/AuthProvider"


const useAuth = () => {
    return useContext(AuthContext)
}
export default useAuth;