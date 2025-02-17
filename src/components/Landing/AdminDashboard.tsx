import React, { useState } from "react";
import {
  ShopOutlined,
  TeamOutlined,
  AppstoreOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Button } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const menuItems: MenuProps["items"] = [
  { key: "1", icon: <ShopOutlined />, label: "Items" },
  { key: "2", icon: <TeamOutlined />, label: "Users" },
  { key: "3", icon: <AppstoreOutlined />, label: "Orders" },
  { key: "4", icon: <LogoutOutlined />, label: "Log out" },
];

const Admin: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedKey, setSelectedKey] = useState("1");

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <p>📦 Item List: Manage all items.</p>;
      case "2":
        return <p>👥 User List: Manage users and their information.</p>;
      case "3":
        return <p>🛒 Order List: Track and manage orders.</p>;
      case "4":
        return <Button danger>Log out</Button>;
      default:
        return <p>Select a Tab from the sidebar.</p>;
    }
  };

  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={[selectedKey]}
          items={menuItems}
          onClick={(e) => setSelectedKey(e.key)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent()}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Octopus BI ©{new Date().getFullYear()} All Rights Reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
