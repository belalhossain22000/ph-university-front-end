
import { Layout, Menu, MenuProps, } from 'antd';


const { Header, Content, Footer, Sider } = Layout;


const items: MenuProps['items'] = [
    {
        key:1,
        label:"Dashboard"
    },
    {
        key:2,
        label:"Profile"
    },
    {
        key:3,
        label:"User Management",
        children:[
            {
                key:"A",
                label:"Create Admin"
            },
            {
                key:"B",
                label:"Create Faculty"
            },
        ]
    },
];

const MainLayout = () => {
  return (
    <Layout style={{height:"100vh"}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{color:"white",height:"65px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px",fontWeight: "bold"}} >PH UNIVERSITY</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            
            }}
          >
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
         PH University ©{new Date().getFullYear()} All right reserve
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout