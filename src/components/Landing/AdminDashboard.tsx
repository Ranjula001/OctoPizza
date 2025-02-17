import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShopOutlined,
  TeamOutlined,
  AppstoreOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Button } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const menuItems: MenuProps["items"] = [
  { key: "1", icon: <ShopOutlined />, label: "Items" },
  { key: "2", icon: <TeamOutlined />, label: "Users" },
  { key: "3", icon: <AppstoreOutlined />, label: "Orders" },
  { key: "4", icon: <LogoutOutlined />, label: "Log out" },
];

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedKey, setSelectedKey] = useState("1");
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === "4") {
      navigate("/");
    } else {
      setSelectedKey(e.key);
    }
  };

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <p>📦 Item List: Manage all items.</p>;
      case "2":
        return <p>👥 User List: Manage users and their information.</p>;
      case "3":
        return <p>🛒 Order List: Track and manage orders.</p>;
      default:
        return <p>Select a tab from the sidebar.</p>;
    }
  };

  return (
    <Layout hasSider>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="md"
        style={{
          height: "100vh",
          position: "sticky",
          insetInlineStart: 0,
          top: 0,
          bottom: 0,
          scrollbarWidth: "thin",
          scrollbarGutter: "stable",
        }}
      >
        <div className="flex items-center justify-center py-4 text-white font-bold">
          {collapsed ? "🔹" : "OctoPizza's By Octopus BI"}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={[selectedKey]}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "0 16px",
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
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
