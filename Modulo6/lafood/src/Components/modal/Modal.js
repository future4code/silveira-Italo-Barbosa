import Modal from '@mui/material/Modal';
import { Select, MenuItem, Button} from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import React from 'react'
import { useGlobal } from '../../Global/GlobalStateContext';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
const ShowModal = (props) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const {data} = useGlobal();
    const {cartProducts, setCartProducts} = data

    const onChangeSelect = (event) => {
        props.setQuantity(event.target.value)
    }

    const addToCart = () => {
        props.addToCartOrder(props.product.id, props.quantity)
        setCartProducts([...cartProducts, props && props.product])
        props.handleClose()
    }

    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Selecione a quantidade desejada:</h2>
        <Select onChange={onChangeSelect} value={props.quantity} fullWidth>
            <MenuItem value={1}> 1 </MenuItem>
            <MenuItem value={2}> 2 </MenuItem>
            <MenuItem value={3}> 3 </MenuItem>
            <MenuItem value={4}> 4 </MenuItem>
            <MenuItem value={5}> 5 </MenuItem>
            <MenuItem value={6}> 6 </MenuItem>
            <MenuItem value={7}> 7 </MenuItem>
        </Select>
        <Button onClick={addToCart}> Adicionar ao carrinho </Button>
      </div>
    );

    return (
      <div>
        <Modal
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
}

export default ShowModal;