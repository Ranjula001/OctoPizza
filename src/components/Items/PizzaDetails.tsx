import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Avatar, Button, InputNumber } from "antd";

interface Pizza {
  id: number;
  name: string;
  image: string;
  avatar: string;
  description: string;
  price: number;
}

const PizzaDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [pizza, setPizza] = useState<Pizza | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch("/pizzas.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedPizza = data.find((p: Pizza) => p.id === parseInt(id ?? '0'));
        setPizza(selectedPizza);
      });
  }, [id]);

  if (!pizza) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card
        style={{ width: "100%", maxWidth: 400 }}
        cover={<img alt={pizza.name} src={pizza.image} />}
      >
        <Card.Meta
          avatar={<Avatar src={pizza.avatar} />}
          title={pizza.name}
          description={pizza.description}
        />
        <p className="mt-4 font-bold text-lg">Price: Rs.{pizza.price.toFixed(2)}</p>

        <div className="mt-4 flex items-center gap-4">
          <span>Quantity:</span>
          <InputNumber min={1} max={10} value={quantity} onChange={(value) => setQuantity(value ?? 1)} />
        </div>

        <Button type="primary" block className="mt-4">
          Add to Cart
        </Button>
      </Card>
    </div>
  );
};

export default PizzaDetails;
