import { NavLink } from "react-router-dom";
import logoWebsite from '../../assets/Imager/2481082_github_logo_social_icon.png';
import { Header } from 'antd/es/layout/layout';
import { Space } from 'antd';
import './DefaultLayout.scss'
const HeaderDefault = () => {
    return (
        <>
            <Header className="HeaderDefault_layout " style={{
                headerpadding: 0,
                alignItems: "center",
                display: 'flex',

            }}>
                <Space className="Layout" sezi={0}>
                    <NavLink key={1} to="/">
                        <div className='header__logo'>
                            <img alt="logo" src={logoWebsite}></img>
                            <h2 className='header__setHide'>F11</h2>
                        </div>
                    </NavLink>
                    <li>Trang Chủ</li>
                    <li>Khóa Học</li>
                    <li>Liên Hệ</li>
                </Space>


            </Header >
        </>
    )
}

export default HeaderDefault;