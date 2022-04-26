import { useNavigate } from "react-router-dom"
import { goToAdminPage } from "../pipe/line"

export const PagesUnp = () => {
    const Navigate = useNavigate()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToAdminPage(Navigate)
        }
    }, [Navigate])

}