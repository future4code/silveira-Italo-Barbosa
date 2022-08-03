
import React, {useState, useEffect} from 'react';
import { useForm } from '../../../Hooks/useForm';
import { MainContainer, Form, Input, Button } from '../../../Styles/style';

export const changeAddress = props => {

    const { form, onChange, cleanField } = useForm ( { logradouro:'', numero:0, complemento:'', bairro:'', cidade:'', estado:'' } )
    
    const doCheckIn = e => {
        
        e.preventDefault()
        //colocar a api

        cleanField();
       

    }
    return (
        <MainContainer>
            <Form onSubmit={doCheckIn}  >
                <Input/>
                <Input/>
                <Input/>
                <Button>Salvar</Button>
            </Form>
        </MainContainer>
    );
}