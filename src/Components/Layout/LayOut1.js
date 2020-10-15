import React from 'react'
import { Layout } from 'antd';
import Navbar from "../navbar"
import Navbar2 from "../navbar2"
import Sider from './Slider'

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
        <Sider>
        <Sider />
        </Sider>


        <Content>
        Content
        </Content>


      </Layout>
      <Footer>Footer</Footer>
    </Layout>
        </div>
    )
}

export default LayOut1
