import { Button } from "antd";
import "./LearningPaths.scss";
import LearningPathsFE from "../../assets/Imager/learning-paths-fe.png";
import LearningPathsBE from "../../assets/Imager/learning-paths-ba.png";
import { NavLink } from "react-router-dom";
import 'animate.css';


const LearningPaths = () => {

  return (
    <div className="learningPaths">
      <br></br>
      <div className="learningPaths__header">
        <h1>Lộ trình học</h1>
        <p>Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học.
          Ví dụ: Để đi làm với vị trí "Lập trình viên Front-end" bạn nên tập trung vào lộ trình "Front-end".
        </p>
      </div>
      <div className="learningPaths__content">
        <div className="learningPaths__content--frontend">
          <div>
            <h2>Lộ trình học Front-end</h2>
            <p>Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F11  sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.</p>
            <br></br>
            <NavLink to="/"><Button>XEM CHI TIẾT</Button></NavLink>
          </div>
          <div>
            <img src={LearningPathsFE} alt="Lộ trình học Front-end"></img>
          </div>
        </div>
        <div className="learningPaths__content--backend">
          <div>
            <h2>Lộ trình học Back-end</h2>
            <p>Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé. </p>
            <br></br>
            <NavLink to="/"><Button>XEM CHI TIẾT</Button></NavLink>
          </div>
          <div>
            <img src={LearningPathsBE} alt="Lộ trình học Back-end"></img>
          </div>
        </div>
      </div>
      <div className="learningPaths__footer">
        <h2>Tham gia cộng đồng học viên F8 trên Facebook</h2>
        <span>Hàng nghìn người khác đang học lộ trình giống như bạn.</span>
        <br></br>
        <span>Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.</span>
        <br></br>
        <br></br>
        <br></br>
        <NavLink to="https://www.facebook.com/" target="_blank"><Button>Tham gia nhóm</Button></NavLink>
      </div>
    </div>
  )

}

export default LearningPaths;