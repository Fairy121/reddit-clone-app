import { TextField,Button,Typography} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React,{useState} from 'react'
import { withData } from '../API/withData';
import { useStyles } from './style'

export default function Signup(props) {
    const classes = useStyles();
    const [message,setMessage] = useState(''); // sign up message
    

    async function RegisterUser(e) {
        e.preventDefault();
         let form = e.currentTarget;
         console.log(form);
        let username = form['username'].value;
        let password = form['password'].value;
        let userData = {
           username,
           password
        }
        try {
        let registerUser = await withData('user/register','POST',userData);
        setMessage(registerUser.data);
        } catch(err) {
            console.log(err.message);
        }
    
    }
    

    return (
        <>
          <Typography align='left' variant='h1'>Sign Up</Typography>
            <form type='submit' onSubmit={RegisterUser} className={classes.form}>
                <TextField name='username' className={classes.input} fullWidth size='medium' placeholder='Username' variant='outlined'></TextField>
                <TextField name='password' className={classes.input} fullWidth size='medium' placeholder='Password' variant='outlined'></TextField>
                <Button type='submit' size='large' className={classes.formBtn} disableElevation variant='contained'>
                    <Typography variant='subtitle2'>Sign Up</Typography>
                </Button> 
               <div style={{marginTop:'24px'}}>
                   {console.log(message ? 'true' : 'false')}
 {message ? ( message.success ? <Alert severity='success'>{message.message}</Alert> :  <Alert severity='error'>{message.message}</Alert>):''};                  
                {/* {message.message  && message.success ? <Alert severity='success'>{message.message}</Alert> :  <Alert severity='error'>{message.message}</Alert>} */}
                </div>
            </form>
        </>
    )
}
