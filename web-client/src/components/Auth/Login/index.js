import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import "../Auth.scss";
import Register from "../Register";

const Login = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>Đăng nhập</Button>
      <Modal
        title=""
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
        className="loginModal"
      >
        <div className="loginModal__header">
          <p>log</p>
          <h2>Đăng nhập vào F11</h2>
          <p>Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người
            sử dụng chung sẽ bị khóa.</p>
        </div>
        <br></br>
        <Form
          layout="vertical"
          name="formLogin"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          size="large"
          width="100%"
        >
          <Form.Item
            label={<strong>Tên đăng nhập</strong>}
            name="username"
            rules={[
              {
                required: true,
                message: 'Trường này không được để trống!',
              },
            ]}
          >
            <Input
              style={{ borderRadius: "50px" }}
              placeholder="Email hoặc Username"
            />
          </Form.Item>

          <Form.Item
            label=""
            name="password"
            rules={[
              {
                required: true,
                message: 'Trường này không được để trống!',
              },
            ]}
          >
            <Input.Password
              style={{ borderRadius: "50px" }}
              placeholder="Mật Khẩu" />
          </Form.Item>
          <br></br>
          <Form.Item>
            <Button htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
        <div className="loginModal__footer">
          <div>Bạn chưa có tài khoản?  <div onClick={() => setModalOpen(false)}><Register /></div></div>
          <p className="loginModal__footer--question">Quên mật khẩu?</p>
          <em>Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với điều khoản sử dụng của chúng tôi</em>
        </div>
      </Modal>
    </>
  )
};

export default Login;