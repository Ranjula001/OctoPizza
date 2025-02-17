import React, { useState } from "react";
import { Alert, Avatar, Card, Button, FloatButton, Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import bgDrop from "../../assets/Landing/CustLanding.jpg";
import Pepperoni from "../../assets/Items/Pepperoni.jpg";
import Chef from "../../assets/Items/chef.jpg";
import Cheesy from "../../assets/Items/Cheesy.jpg";
import { QuestionCircleOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";

const { Meta } = Card;

const LandingCustomer: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleOrderNow = (id: number) => {
    navigate(`/pizza/${id}`);
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="relative h-screen">
     
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgDrop}
        alt="backdrop"
      />

      
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-45"></div>

      
      {visible && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 md:w-1/2">
          <Alert
            message="Welcome back ranjula2000 !"
            type="info"
            showIcon
            closable
            onClose={() => setVisible(false)}
          />
        </div>
      )}

      
      <Dropdown overlay={userMenu} trigger={["click"]}>
        <Button
          type="primary"
          shape="circle"
          icon={<UserOutlined />}
          className="absolute top-4 right-4 z-50"
        />
      </Dropdown>

      
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 p-4">
        <Card
          style={{ width: "100%", maxWidth: 300 }}
          hoverable
          cover={<img alt="Pepperoni Pizza" src={Pepperoni} />}
          actions={[
            <Button color="default" variant="solid" onClick={() => handleOrderNow(1)} block>
              ORDER NOW
            </Button>,
          ]}
        >
          <Meta
            avatar={<Avatar src={Chef} />}
            title="Pepperoni Pizza"
            description="Pepperoni Pizza is usually made from cured pork and beef that has been seasoned with spices like paprika and garlic powder."
          />
        </Card>
        <Card
          style={{ width: "100%", maxWidth: 300 }}
          hoverable
          cover={<img alt="Cheesy Onion Pizza" src={Cheesy} />}
          actions={[
            <Button color="default" variant="solid" onClick={() => handleOrderNow(2)} block>
              ORDER NOW
            </Button>,
          ]}
        >
          <Meta
            avatar={<Avatar src={Chef} />}
            title="Cheesy Onion Pizza"
            description="Cheesy Onion Pizza usually made from mozzarella cheese and onion with spices like paprika and garlic powder."
          />
        </Card>
      </div>

      {/* Floating help button */}
      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="default"
        style={{ right: 94 }}
      />
    </div>
  );
};

export default LandingCustomer;