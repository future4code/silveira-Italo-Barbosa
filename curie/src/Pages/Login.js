// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { CadastroPage, goToHomePage } from "../Routes/Coordinator";
// import useForm from "../Hooks/Form";
// import { CadastroContainer } from "../Styles/LoginStyle";
// import { InputContainer, ScreenContainer, StyledForm, StyledLogo } from "../Styles/HomeStyle";
// import TextField from '@mui/material/TextField';
// import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';
// import { StyledIcon, StyledInputPassword } from "../Styles/CadastroStyle";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { GlobalStateContext } from "../Global/GlobalStateContext";
// import axios from "axios";
// import { Url } from "../Constant/Url";



// const LoginPage = () => {
//     const navigate = useNavigate()
  
//     const { form, onChange, cleanField } = useForm({ email: "", password: "" });
//     const [isLoading, setIsLoading] = useContext(GlobalStateContext)
//     const [ showPassword, setShowPassword ] = useState(false);
   


//     const login = (event) => {
//       event.preventDefault();
//       setIsLoading(true);
//       axios
//         .post(`${Url}/login`, form)
//         .then((response) => {
//           localStorage.setItem("token", response.data.token);
//           goToHomePage(navigate);
//           cleanField();
//           setIsLoading(false)
//         })
//         .catch((error) => {
//           alert(error);
//           setIsLoading(false)
//         });
//     };


// return (
//     <ScreenContainer>
//       <InputContainer>
//         <StyledLogo>
//           <p id='main-text'>Login</p>
//         </StyledLogo>
//         <p>Entrar</p>
//         <StyledForm onSubmit={login}>
//           <TextField
//             fullWidth
//             id="outlined-disabled" 
//             InputLabelProps={{ shrink: true }}
//             label="E-mail" 
//             placeholder="email@email.com"
//             name="email"
//             type={"email"}
//             value={form.email}
//             onChange={onChange}
//             margin={"normal"}
//             variant={"outlined"}
//             required
//           />

//           <StyledInputPassword>
//             <TextField
//               fullWidth
//               id="outlined-disabled" 
//               InputLabelProps={{ shrink: true }}
//               label="Senha" 
//               placeholder="Mínimo 6 caracteres"
//               name="password"
//               type={showPassword ? 'text' : 'password'}
//               value={form.password}
//               onChange={onChange}
//               pattern={"^.{6,}"}
//               margin={"normal"}
//               variant={"outlined"}
//               title={"Sua senha deve ter no mínimo 6 caracteres"}
//               required
//             />
//             <StyledIcon onClick={(event) => setShowPassword(!showPassword)}>
//               {showPassword ? <Visibility /> : <VisibilityOff />}
//             </StyledIcon>
//           </StyledInputPassword>

//           {isLoading ? <CircularProgress color={"primary"} size={24}/> 
//           : 
//           <Button
//             fullWidth 
//             variant={"contained"} 
//             color={"secondary"} 
//             margin={"normal"}
//             type={"submit"}
//           >
//             Entrar
//           </Button>}

//           <CadastroContainer>
//             <p> Ainda não tem cadastro ? <span onClick={() => CadastroPage(navigate)}> Clique aqui.</span></p>
//           </CadastroContainer>

//         </StyledForm>
//       </InputContainer>
//     </ScreenContainer>
//   );
// };

// export default LoginPage;
