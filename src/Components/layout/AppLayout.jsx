import React from 'react'
import Footer from './Footer'

import { Outlet, useNavigation } from 'react-router-dom';
import { Header } from './Header';
import { Loading } from './Loading';

export const AppLayout = () => {

const navigation=useNavigation();
console.log(navigation)
if(navigation.state==="loading")return <Loading/>
  return( 
  <>
  <Header/>
  <Outlet/> 
  <Footer/>
  </>
  );
};

