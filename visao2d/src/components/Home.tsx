import { Box, Container, styled } from "@mui/material";
import React from "react";

const BoxImage = styled(Box)(() => ({
    height: '500px', width: '500px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
    borderRadius: '30px',
}));

export default function Home () {
    return (
        <Container>
            
            <BoxImage>

            </BoxImage>

        </Container>
    )
}