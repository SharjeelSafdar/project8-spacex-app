import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { FaHome, FaHistory } from 'react-icons/fa';
import { GoRocket } from 'react-icons/go';
import { AiFillRocket } from 'react-icons/ai';
import { BsInfoCircleFill } from 'react-icons/bs';
// Styles
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme: Theme) => createStyles({
    appBar: {
        backgroundColor: grey[900],
    },
    icon: {
        color: 'white',
        marginRight: theme.spacing(0.5),
        marginLeft: theme.spacing(0.5),
    },
    btnText: {
        marginLeft: theme.spacing(1),
    },
    linksToolBar: {
        marginTop: theme.spacing(-2),
        marginBottom: theme.spacing(-1),
        display: 'flex',
        justifyContent: 'center',
    },
}));

export const Header: React.FC<{}> = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h4">
                    SpaceX <span role="img" aria-label="Rocket Icon">🚀</span>
                </Typography>
            </Toolbar>
            <Toolbar className={classes.linksToolBar}>
                <Button data-testid="home-link" className={classes.icon}>
                    <FaHome /> 
                    <Typography variant="button" className={classes.btnText}>
                        Home
                    </Typography>
                </Button>
                <Button data-testid="launches-link" className={classes.icon}>
                    <GoRocket /> 
                    <Typography variant="button" className={classes.btnText}>
                        Launches
                    </Typography>
                </Button>
                <Button data-testid="rockets-link" className={classes.icon}>
                    <AiFillRocket /> 
                    <Typography variant="button" className={classes.btnText}>
                        Rockets
                    </Typography>
                </Button>
                <Button data-testid="history-link" className={classes.icon}>
                    <FaHistory /> 
                    <Typography variant="button" className={classes.btnText}>
                        History
                    </Typography>
                </Button>
                <Button data-testid="about-link" className={classes.icon}>
                    <BsInfoCircleFill /> 
                    <Typography variant="button" className={classes.btnText}>
                        About
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
}
