import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const layout = (props) => (
  <Auxiliary>

    <Header></Header>

    <main>{props.children}</main>

    <Footer></Footer>
    
  </Auxiliary>
);

export default layout;