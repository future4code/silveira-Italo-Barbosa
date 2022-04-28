import { useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../pipe/line"




const PagesPro = () => {
    const Navigate = useNavigate()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            goToLogin(Navigate)
        }
    }, [Navigate])

}

export default PagesPro