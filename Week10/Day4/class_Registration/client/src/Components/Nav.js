import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'


const Nav = (props) => {
    return(
        <div>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" component={Link} to='/'>Home</Button>
                <Button variant="contained" component={Link} to='/about'>About</Button>
                <Button variant="contained" component={Link} to='/register'>Register</Button>
                <Button variant="contained" component={Link} to='/login'>Login</Button>

            </Stack>
        </div>
    )
}

export default Nav