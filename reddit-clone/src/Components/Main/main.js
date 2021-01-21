import { Container, Typography,Grid ,Box} from '@material-ui/core'
import React from 'react'
import Contentheader from '../ContentHeader/contentHeader'
import ContentCard from '../ContentCard/contentCard';
import ContentBody from '../ContentBody/contentBody';
import Sidebar from '../Sidebar/sidebar';
import AuthModal from '../Auth/AuthModal';
import CreatePost from '../Post/CreatePost/createPost';
import { Route, useLocation } from 'react-router-dom';
import CreateCommunity from '../Community/CreateCommunity/createCommunity';
import CommunityPage from '../Community/CommunityPage/communityPage';
export default function Main(props) {
    let location = useLocation();
   
    return (
       <Container style={{marginTop:'40px',padding:'24px'}}  maxWidth='lg'>
         
           <AuthModal />
      
           <Route exact path='/submit'component={CreatePost} />
           <Route exact path='/create' component={CreateCommunity} />
           <Route exact path='/'>
            <Grid style={{marginTop:'24px'}} spacing={2} container>
                <Grid item lg={9} sm={8}>
                    <Contentheader />
                    <ContentBody />
                </Grid>
                <Grid item  lg={3} sm={4}>
                <Sidebar />
                </Grid>
            </Grid> 
           </Route>
           <Route exact path='/r/:id' render={(props) => (
                <CommunityPage />
           )}>
             
           </Route>
       </Container>
    )
}
