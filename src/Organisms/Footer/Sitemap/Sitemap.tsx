import {  Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import React from "react"

const useStyles=makeStyles({

    textstyle:
    {
        position: 'static',
        width: '546px',
        height: '22px',
        left: '244px',
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '22px',
        color: '#6D787E',
        flex: 'none',
        
    }

});

export const Sitemap:React.FunctionComponent = ()=>
{
    const classes=useStyles();

    return(

        <React.Fragment>

            <Typography className={classes.textstyle} variant="caption" >
            © Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies
            </Typography>

            </React.Fragment>

    );
}
