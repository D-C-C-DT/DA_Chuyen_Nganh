import { NavLink, Outlet } from "react-router-dom";
import { Button, Layout, Space } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import "./DefaultLayout.scss";
import facebook from '../../assets/Imager/logoFacebook.jpg'
import youtube from '../../assets/Imager/logoYoutube.jpg'
import tiktok from '../../assets/Imager/logoTiktok.jpg'
import Login from "../../components/Auth/Login";
import Register from "../../components/Auth/Register";
import SearchContent from "../../components/SearchContent";

const DefaultLayout = () => {
  return (
    <>
      <Layout className="layoutDefault">
        <Header className="layoutDefault__header">
          <div className="layoutDefault__header--logo">Logo</div>
          <div><SearchContent></SearchContent></div>
          <div className="layoutDefault__header--control">
            <NavLink to="#">Home</NavLink>
            <NavLink to="#">About</NavLink>
            <NavLink to="#">Service</NavLink>
            <NavLink to="#">Contact US</NavLink>
            <div className="layoutDefault__header--control--login"><Login /></div>
            <div className="layoutDefault__header--control--signUp"><Register /></div>
          </div>
        </Header>
        <Content>
          <Outlet></Outlet>
        </Content>
        <Footer className="layoutDefault__footer">
          <table>
            <thead>
              <tr>
                <th>Học Lập Trình Để Đi Làm</th>
                <th>Về Chúng tôi</th>
                <th>CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC</th>
                <th>Kết nối với chúng tôi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Email: <a href="mailto:contact@fullstack.edu.vn">contact@fullstack.edu.vn</a></td>
                <td><NavLink to={"/#"}>Giới thiệu</NavLink></td>
                <td>Mã số thuế: 0109922901</td>
                <td rowSpan="2">
                  <Space>
                    <a target="_blank" href="https://www.facebook.com"><img src={facebook} alt="facebook" /></a>
                    <a target="_blank" href="https://www.tiktok.com"><img src={tiktok} alt="tiktok" /></a>
                    <a target="_blank" href="https://www.youtube.com"><img src={youtube} alt="youtube" /></a>
                  </Space>
                </td>
              </tr>
              <tr>
                <td>Địa chỉ: Số 1, ngõ 41, Trần Duy Hưng, Cầu Giấy, Hà Nội</td>
                <td><NavLink to={"/#"}>Liên hệ</NavLink></td>
                <td>Ngày thành lập: 04/03/2022</td>
                <td></td>
              </tr>
              <tr>
                <td>Điện thoại: <a href="tel:0819198989">08 1919 8989</a></td>
                <td><NavLink to={"/#"}>Điều khoản</NavLink></td>
                <td>Mã số thuế: 0109922901</td>
              </tr>
              <tr>
                <td></td>
                <td><NavLink to={"/#"}>Bảo mật</NavLink></td>
                <td>Lĩnh vực hoạt động: Giáo dục, công nghệ - lập trình. Chúng tôi tập trung xây dựng và phát triển các sản phẩm mang lại giá trị cho cộng đồng lập trình viên Việt Nam.</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <br></br>
          <em>© 2018 - 2024 F8. Nền tảng học lập trình hàng đầu Việt Nam</em>
        </Footer>
      </Layout>
    </>
  )
};

export default DefaultLayout;