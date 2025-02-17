import React, { useState } from "react";
import { Alert, Avatar, Card, Button, FloatButton } from "antd";
import bgDrop from "../../assets/Landing/CustLanding.jpg";
import Pepperoni from "../../assets/Items/Pepperoni.jpg";
import Chef from "../../assets/Items/chef.jpg";
import Cheesy from "../../assets/Items/Cheesy.jpg";
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Meta } = Card;

const LandingCustomer: React.FC = () => {
  const [visible, setVisible] = useState(true);

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

      <div className="absolute inset-0 md:flex items-center justify-center gap-10">
        <Card
          style={{ width: 300 }}
          hoverable
          cover={<img alt="example" src={Pepperoni} />}
          actions={[
            <Button color="default" variant="solid">
            ORDER NOW
          </Button>
          ]}
        >
          <Meta
            avatar={<Avatar src={Chef} />}
            title="Pepperoni Pizza"
            description="Pepperoni Pizza is usually made from cured pork and beef that has been seasoned with spices like paprika and garlic powder."
          />
        </Card>
        <Card
          style={{ width: 300 }}
          hoverable
          cover={<img alt="example" src={Cheesy} />}
          actions={[
            <Button color="default" variant="solid">
            ORDER NOW
          </Button>
          ]}
        >
          <Meta
            avatar={<Avatar src={Chef} />}
            title="Cheesy Onion Pizza"
            description="Cheesy Onion Pizza usually made from mozaralla cheese and onion with spices like paprika and garlic powder."
          />
        </Card>
      </div>
      <FloatButton icon={<QuestionCircleOutlined />} type="default" style={{ insetInlineEnd: 94 }} />
    </div>
  );
};

export default LandingCustomer;
