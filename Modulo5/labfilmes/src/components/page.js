import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import GlobalStateContext from '../global/GlobalStateContext';




export const Page = () => {
    const { page } = useContext(GlobalStateContext)
    const { setPage } = useContext(GlobalStateContext)
    

    const changePage = (nPage) => setPage(nPage);
    

    return (
      <div>
        {page === 1 ? <></> : <Button variant="outlined" color="error" onClick={() => changePage((page - 1))}>{page - 1}</Button>}
            <Button variant="contained" onClick={() => changePage((page + 1))}>{page + 1}</Button>
            <Button variant="contained" onClick={() => changePage((page + 2))}>{page + 2}</Button>
            <Button variant="contained" onClick={() => changePage((page + 3))}>{page + 3}</Button>
            <Button variant="contained" onClick={() => changePage((page + 4))}>{page + 4}</Button>
            <Button variant="contained" onClick={() => changePage((page + 5))}>{page + 5}</Button>
      </div>
    )

}

