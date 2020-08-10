//REACT
import React from 'react';
//MUI COMPONENTS
import {Box, Button, Typography} from '@material-ui/core/';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <Box textAlign="center">
            <Typography variant="h2">Page not found 404</Typography>
            <Link style={{textDecoration: 'none'}} to="/">
                <Button color="primary" variant="contained" size="large">Go to
                    homepage</Button>
            </Link>
        </Box>
    );
};

export default NotFound;