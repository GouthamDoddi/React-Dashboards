import React from 'react'
import { Layout } from 'antd';
import Navbar from '../navbar'
import Slide from "./Slider"
import "./Dashboard.css"

const { Header, Footer, Sider, Content } = Layout;


function Dashboard() {
    return (
        <>
        
        <Layout>
          <Header>
              <Navbar />
          </Header>

          <Layout>
          
          <Sider>
<Slide />
          </Sider>
     
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </>
    )
}

export default Dashboard
