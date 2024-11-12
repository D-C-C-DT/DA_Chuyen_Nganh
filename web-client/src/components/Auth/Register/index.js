import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import "../Auth.scss";
import Login from "../Login";
import Logo from "../../../assets/Images/logof11.jpg";
import { NavLink } from "react-router-dom";


const Register = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>Đăng ký</Button>
      <Modal
        title=""
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
        className="loginModal"
      >
        <div className="loginModal__header">
          <img className="loginModal__header--logo" src={Logo} alt="Logo" />
          <h2>Đăng ký tài khoản F11</h2>
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
            label={<strong>Tên của bạn?</strong>}
            name="fullname"
            rules={[
              {
                required: true,
                message: 'Trường này không được để trống!',
              },
            ]}
          >
            <Input
              style={{ borderRadius: "50px" }}
              placeholder="Họ và tên của bạn"
            />
          </Form.Item>
          <Form.Item
            label={<strong>Email của bạn?</strong>}
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
            label={<strong>Mật khẩu</strong>}
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

          <Form.Item
            label={<strong>Nhập lại mật khẩu</strong>}
            name="rePassword"
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
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
        <div className="loginModal__footer">
          <div>Bạn chưa có tài khoản? <div onClick={() => setModalOpen(false)}><Login /></div></div>
          <p className="loginModal__footer--question">Quên mật khẩu?</p>
          <em>Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với
            <NavLink to="/terms" onClick={() => setModalOpen(false)}>điều khoản</NavLink> sử dụng của chúng tôi</em>
        </div>

      </Modal>
    </>
  )
};

export default Register;