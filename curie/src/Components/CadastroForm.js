import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import useForm from "../../../Hooks/useForm.js";

import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ScreenContainer, InputContainer, StyledLogo, StyledForm } from '../../../Styles/Styled.js';
import { StyledIcon, StyledInputPassword } from './Styled.js';



const CadastroForm = () => {
    const navigate = useNavigate();
  
    const { data } = useContext(GlobalStateContext);
    const { setNameHeader, setButtonBack } = data;
  
    const { form, onChange, cleanField } = useForm({ name: '', email: '', cpf: '', password: '' });
  
    const [isLoading, setIsLoading] = useState(false);
    const [ passwordSnd, setPasswordSnd ] = useState("");
    const [ helper, setHelper ] = useState("");
    const [ error, setError ] = useState(false);
    const [ showPassword, setShowPassword ] = useState(false);
    const [ showPasswordSnd, setShowPasswordSnd ] = useState(false);
  
    useEffect(() => {
      setNameHeader("");
      setButtonBack(true);
    },[]);
  
    const onSubmitForm = (event) => {
      event.preventDefault();
      setError(false);
      setHelper("");
  
      if(form.password === passwordSnd){
        signUp(form, navigate, cleanField, setIsLoading);
      }
      else if(form.password !== passwordSnd){
        setError(true);
        setHelper("Deve ser a mesma que a anterior.");
      }
  
    }; 
  
    return (
      <ScreenContainer>
        <Header/>
        <InputContainer>
          <StyledLogo>
            <p id='main-text'>Informações de Cadastro para Contato</p>
          </StyledLogo>
          <p>Cadastrar</p>
          <StyledForm onSubmit={onSubmitForm}>
            <TextField
              margin='normal'
              fullWidth
              id="outlined-disabled" 
              label="Nome" 
              variant="outlined" 
              InputLabelProps={{ shrink: true }}
              value={form.name}
              name={'name'}
              onChange={onChange}
              placeholder={'Nome'}
              required
            />
            <TextField
              margin='normal'
              fullWidth
              id="outlined-disabled" 
              label="E-mail" 
              variant="outlined" 
              InputLabelProps={{ shrink: true }}
              value={form.email}
              name={'email'}
              onChange={onChange}
              type={'email'}
              placeholder={'E-mail'}
              required
            />
        
            <StyledInputPassword>
              <TextField
                margin='normal'
                fullWidth
                id="outlined-disabled" 
                label="Senha"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                value={form.password}
                onChange={onChange}
                name={'password'}
                type={showPassword ? 'text' : 'password'}
                placeholder={'Mínimo 6 caracteres'}
                required
                pattern={"^.{6,}"}
                title={"Sua senha deve ter no mínimo 6 caracteres."}
              />
              <StyledIcon onClick={(event) => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon/>}
              </StyledIcon>
            </StyledInputPassword>
            <StyledInputPassword>
              <TextField
                margin='normal'
                fullWidth
                id="outlined-disabled" 
                label="Confirmar senha" 
                variant="outlined" 
                InputLabelProps={{ shrink: true }}
                value={passwordSnd}
                name={'passwordSnd'}
                onChange={(event) => setPasswordSnd(event.target.value)}
                type={showPasswordSnd ? 'text' : 'password'}
                placeholder={'Confirmar senha'}
                required
                helperText={helper}
                error={error}  
              />
              <StyledIcon onClick={(event) => setShowPasswordSnd(!showPasswordSnd)}>
                {showPasswordSnd ? <VisibilityIcon/> : <VisibilityOffIcon/>}
              </StyledIcon>
            </StyledInputPassword>
            {isLoading ? <CircularProgress color={"primary"} size={24}/> 
            : 
            <Button
              fullWidth 
              variant={"contained"} 
              color={"secondary"} 
              margin={"normal"}
              type={"submit"}
            >
              Enviar
            </Button>}
          </StyledForm>
        </InputContainer>
      </ScreenContainer>
    )
  }
  
  export default CadastroForm; 