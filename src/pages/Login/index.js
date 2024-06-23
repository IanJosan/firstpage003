import { useEffect, useState } from "react";
import "./index.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
const chinese = "在满地都是六便士的街上，他抬起头看到了月光";
const english =
  "On a street full of sixpence, he looked up and saw the moonlight.";
const Login = () => {
  const [text, setText] = useState("");
  const [isShowing, setIsShowing] = useState(true);
  const [lang, setLang] = useState("chinese");
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      if (isShowing) {
        // 显示文字
        if (lang === "chinese") {
          if (index < 21) {
            setText((prevText) => prevText + chinese.substr(index, 1)); // 假设从A开始
            setIndex((prevIndex) => prevIndex + 1);
          } else {
            // 所有字都显示完了，开始隐藏
            setIsShowing(false);
          }
        } else {
          if (index < 66) {
            setText((prevText) => prevText + english.substr(index, 1)); // 假设从A开始
            setIndex((prevIndex) => prevIndex + 1);
          } else {
            // 所有字都显示完了，开始隐藏
            setIsShowing(false);
          }
        }
      } else {
        // 隐藏文字
        if (index > 0) {
          setText((prevText) => prevText.slice(0, -1));
          setIndex((prevIndex) => prevIndex - 1);
        } else {
          // 所有字都隐藏完了，可以清除定时器
          //   clearInterval(timer);
          setIsShowing(true);
          if (lang === "chinese") {
            setLang("english");
          } else {
            setLang("chinese");
          }
        }
      }
    }, 100);
    // 清除定时器
    return () => clearInterval(timer);
  }, [isShowing, index, lang]); // 当isShowing变化时，清除并重新设置定时器
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        navigate("/layout");
        return newLoadings;
      });
    }, 2500);
  };
  return (
    <div className="pageBox">
      <div className="pageMask">
        <div className="site-card-border-less-wrapper">
          <p className="myName">魔法海螺♠</p>
          <div id="textDOM">{text + " |"}</div>
          <Button
            className="myButton"
            loading={loadings[2]}
            onClick={() => enterLoading(2)}
          >
            Have a look
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Login;
