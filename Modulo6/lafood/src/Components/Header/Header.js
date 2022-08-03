import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../Context/GlobalStateContext";
import { goBack } from "../../Routes/coordinator";
import { StyledArrow, StyledButton, StyledEmpty, StyledHeader } from "./Styled";

const Header = () => {
    const navigate = useNavigate();

    const { data } = useContext(GlobalStateContext);
    const { nameHeader, buttonBack } = data;

    return (
        <StyledHeader>
            <div className="central">            
                <div>
                    { buttonBack ? <StyledButton onClick={ () => goBack(navigate) }><StyledArrow></StyledArrow></StyledButton> : <></>}
                </div>
                <div>
                    <p>{nameHeader}</p>
                </div>
                <div>
                    <StyledEmpty></StyledEmpty>
                </div>
            </div>
        </StyledHeader>
    );
}

export default Header;