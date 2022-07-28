import GlobalStateContext from '../global/GlobalStateContext';
import React, { useContext, useState } from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { Pop } from "../Styled/PCard"

export const Genrer = ({ }) => {
    const { genres, setGenreId, genreId } = useContext(GlobalStateContext)
    const [nameButton, setNameButton] = useState("button");
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const setGenre = (id) => {
        nameButton == "button" ? setNameButton("activeButton") : setNameButton("button")
        let genreBox = [];
        if (genres.length == 0) {
            setGenreId([...genreId, id]);
        }
        else if (genreId.indexOf(id) < 0) {
            setGenreId([...genreId, id]);
        }
        else {
            for (let i = 0; i < genreId.length; i++) {
                if (genreId[i] == id) {
                    genreBox = [...genreId];
                    genreBox.splice(i, 1);
                    setGenreId(genreBox);
                };
            };
        };
        console.log(genreBox)
    };


    const ButtonsOfGenre = genres && genres.map(Genres => {
        return (
            <Button className={nameButton} variant="outlined" key={Genres.id} onClick={() => setGenre(Genres.id)}>{Genres.name}</Button>
        );

    });


    return (
        <div>
            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                filters
            </Button>
            <Pop>
                <Popover
                    id={id}
                    open={open}
                    onClose={handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 100, left: 300 }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                >
                    {ButtonsOfGenre ? ButtonsOfGenre : <p>Gênero não encontrado</p>}
                </Popover>
            </Pop>
        </div>
    );
};

