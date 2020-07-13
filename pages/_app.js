import React from 'react'
import '../css/styles.css'
import '../components/Layouts'
import Layout from '../components/Layouts'


const MyApp = ({Component, pageProps}) =>{
    return(
        <Layout>
          <Component {...pageProps}/>
        </Layout>
    ) 
    
}

export default MyApp