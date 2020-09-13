import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
    heroImage: {
        backgroundImage: 'url("https://farm8.staticflickr.com/7617/16855338881_69542a2fa9_o.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '85vh'
    },
    shade: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        width: '100%',
        height: '100%',
    },
}));

export const Home: React.FC<{}> = () => {
    const classes = useStyles();
    return (
        <div className={classes.heroImage} data-testid="heroImage">
            <div className={classes.shade}></div>
        </div>
    );
}
