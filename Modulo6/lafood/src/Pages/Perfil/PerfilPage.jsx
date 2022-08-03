import React, { useContext, useEffect, useLayoutEffect } from 'react'
import {GlobalStateContext} from '../../Context/GlobalStateContext';
import { useNavigate } from 'react-router-dom';
import { getProfile, getOrdersHistory } from '../../services/ProfilePage';
// import { useForm } from '../../Hooks/useForm';
import {AddressUser, Historic, HistoricContainer, Header, Container} from './style'

export default function Perfil() {
    const navigate = useNavigate()
    const params = useContext(GlobalStateContext)
  
    useLayoutEffect(() => {
      getProfile(params.setUser)
      getOrdersHistory(params.setHistory)
    }, []);

    return (
        <div>
            
            <Header>
                <p>Meu Perfil</p>
            </Header>

            <Container>

                <div >
                    {/* O Container InfoUser tem que permitir um click mandando para a alteracao da informacoes do usuario */}
                    <p>{params.user.name}</p>
                    <p>{params.user.email}</p>
                    <p>{params.user.cpf}</p>
                </div>

                <AddressUser>
                    {/* O Container AddressUser tem que permitir a um click para alteracao da informacao de endereco do usuario, pois o usuario pode mudar de casa um dia */}
                    <p>Endereço cadastrado</p>
                    <p>Endereço: {params.user.address}</p>
                </AddressUser>

                <Historic>
                    {/* 
                        Esse Container sera para mostrar o historico de pedidos que o perfil tem , mostrando o  RESTAURANTE , A DATA DO PEDIDO, E O VALOR;
                        A ideia e a de colocar o historico de pedidos em uma variavel no globalState e depois fazer um map do array aqui nesse container
                    */}
                        <p>Histórico de pedidos</p>
                </Historic>

                {(params.user && params.history) && params.history.map(res => (
          <HistoricContainer key={res.createdAt}>
            <p style={{ color: "#5cb646" }}>{res.restaurantName}</p>
            <p style={{ fontSize: "12px" }} >{new Date(res.createdAt).toISOString().split("T")[0].split('-').reverse().join('/')}</p>
            <p style={{ fontSize: "12px" }} >Pedido: {new Date(res.createdAt).toISOString().split("T")[1].slice(0, 5)}</p>
            <p style={{ fontSize: "12px" }} >Entrega: {new Date(res.expiresAt).toISOString().split("T")[1].slice(0, 5)}</p>
            <b>SUBTOTAL R${res.totalPrice.toFixed(2).replace('.', ',')}</b>

          </HistoricContainer>
        ))}

            </Container>

        </div>
    );
}









/*
    
    const {form,onChange,cleanField} = useForm({username:'', email:'', password:''})

    const doCheckIn = e => {
        
        e.preventDefault()
        request.postCheckIn(form,navigate,'/feed')

        cleanField();
                   <Form onSubmit={doCheckIn}  >
                <Input 
                    name="email"
                    value={form.email} 
                    onChange={ onChange }
                    placeholder={'digite o seu email'}
                    forHtml="email"
                    required

                /><Input 
                    name="username"
                    value={form.username} 
                    onChange={ onChange }
                    placeholder={'digite o seu nickname'}
                    
                    required

                />
                <Input
                    name="password"
                    value={form.password} 
                    onChange={ onChange }
                    placeholder={'digite o sua Senha'}
                    type="password"
                    required
                />
                <Button> cadastrar</Button>
            </Form>

    }



*/