
import React, {useState, useEffect} from 'react';
import { useForm } from '../../../Hooks/useForm';
import { MainContainer, Form, Input, Button } from '../../../Styles/style';

export const changeAddress = props => {

    const { form, onChange, cleanField } = useForm({name:'',email:'',cpf:0})

    const doCheckIn = e => {
        
        e.preventDefault()
        //colocar a api

        cleanField();
       

    }


    return (
        <MainContainer>
            <Form onSubmit={doCheckIn} >
                
                <Input/>
                
                <Input 
                    name="email"
                    value={form.email} 
                    onChange={ onChange }
                    placeholder={'digite o seu email'}
                    forHtml="email"
                    required

                />

                <Input/>

                <Button>Salvar</Button>
                
            </Form>
        </MainContainer>
    );
}