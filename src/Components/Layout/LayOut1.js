import React from 'react'
import { Layout } from 'antd';
import Navbar from "../navbar"

const { Header, Footer, Sider, Content } = Layout;

function LayOut1() {
    return (
        <div>
             <Layout>
      <Header><Navbar /></Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
        </div>
    )
}

export default LayOut1
