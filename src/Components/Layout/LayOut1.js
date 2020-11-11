import React from 'react'
import { Layout } from 'antd';
import Navbar from "../navbar"
import Navbar2 from "../navbar2"
import Menulist from './Slider'
import Graph from '../chart'
import Cards from '../cards';

const { Header, Footer, Content } = Layout;

function LayOut1() {
    return (
        <div>
             <Layout>
      <Header>
      <Navbar />
      <Navbar2 />

      </Header>
      <Layout>




        <Content>
        <Cards />
        <Graph />
        </Content>


      </Layout>
      <Footer>Footer</Footer>
    </Layout>
        </div>
    )
}

export default LayOut1
