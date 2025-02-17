import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input} from "antd";
import bgDrop from "../../assets/Login/BackgroundLogin.jpg";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isFormValid, setIsFormValid] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleFormChange = () => {
    const values = form.getFieldsValue();
    setIsFormValid(!!values.username && !!values.password);
    setLoginError(null);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const { username, password } = values;

    if (username === "ranjula2000" && password === "Ranjula123#") {
      navigate("/landing");
      console.log("Success:", values);
    } else if (username === "admin@octoshop.com" && password === "Octoshop123#") {
      navigate("/admin");
      console.log("Success:", values);
    } else {
      setLoginError("Invalid credentials.");
      console.log("error", values);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="justify-center items-center flex h-screen">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgDrop}
        alt="backdrop"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={handleFormChange}
          autoComplete="off"
          className="bg-white bg-opacity-30 backdrop-blur-lg shadow-lg rounded-lg p-8 w-96"
          form={form}
        >
          <div className="m-5">
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
              validateStatus={loginError ? "error" : ""}
              help={loginError}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              validateStatus={loginError ? "error" : ""}
              help={loginError}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              label={null}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
              <Button
                type="primary"
                htmlType="submit"
                disabled={!isFormValid}
              >
                Log in
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;