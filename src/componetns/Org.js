import { Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Button from './Button'

function Org() {
    return (
        <div className="card">
            <Container>
                <Card>
                    <Typography typeface="Gilory-Hevy" align="left" lLine Spacing="29px">Select organizaton</Typography>
                    <Typography align="left" className="G2" line Spacing="19px" fontWeight="medium">To continue using trames account</Typography>
                </Card>
            </Container>
        </div>
    )
}

export default Org
