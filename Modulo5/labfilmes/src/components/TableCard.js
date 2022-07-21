import styled from "styled-components";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { goToTv } from "../routes/coordinator"
import { goToHome } from "../routes/coordinator"
import { useNavigate } from 'react-router-dom';

export const ExCard = styled.div`
display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 70%;
        height: 100%;
        justify-content: center;
        margin: 0;
`

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);
  const Navigate = useNavigate()

  const onClickTv = () => {
    goToTv(Navigate);
  };
  const onClickHome = () => {
    goToHome(Navigate);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Home" onClick={() => onClickHome(goToHome)} />
        <Tab label="TV" onClick={() => onClickTv(goToTv)} />
      </Tabs>
    </Box>
  );
}