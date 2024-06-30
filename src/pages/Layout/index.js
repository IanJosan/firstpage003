import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
const { Header, Content, Sider } = Layout;
const items = [
  {
    label: "学习notes",
    key: "studyNotes",
    icon: <MailOutlined />,
  },
  {
    label: "拓展notes",
    key: "otherNotes",
    icon: <AppstoreOutlined />,
  },
  {
    label: "其他",
    key: "other",
    icon: <SettingOutlined />,
  },
  {
    label: "test",
    key: "test",
    icon: <SettingOutlined />,
  },
];
const studyNotes = [
  {
    label: "vue",
    key: "vuePage",
    icon: <MailOutlined />,
    children: [
      {
        key: "vueBasePage",
        label: "vue基础",
      },
      {
        key: "vuexPage",
        label: "vuex",
      },
      {
        key: "vueChapterPage",
        label: "章节三",
      },
      {
        key: "vueTheoryPage",
        label: "vue原理",
      },
      {
        key: "vueThreePage",
        label: "vue3",
      },
    ],
  },
  {
    label: "react",
    key: "reactPage",
    icon: <AppstoreOutlined />,
  },
  {
    label: "CSS",
    key: "CSSPage",
    icon: <SettingOutlined />,
  },
  {
    label: "JS",
    key: "JSPage",
    icon: <SettingOutlined />,
  },
];
const otherNotes = [
  {
    label: "webpack",
    key: "webpackPage",
    icon: <MailOutlined />,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "11",
        label: "Option 11",
      },
      {
        key: "12",
        label: "Option 12",
      },
    ],
  },
  {
    label: "node.js",
    key: "nodePage",
    icon: <AppstoreOutlined />,
  },
  {
    label: "three.js",
    key: "threePage",
    icon: <SettingOutlined />,
  },
];
const LayoutComponent = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const [nowTopShow, setNowTopShow] = useState(studyNotes);
  const [origin, setorigin] = useState(studyNotes);

  const topMenuClick = ({ item, key, keyPath, domEvent }) => {
    // console.log(item, key, keyPath);
    if (key === "otherNotes") {
      setorigin(otherNotes);
    } else if (key === "studyNotes") {
      setorigin(studyNotes);
    } else {
      setorigin(studyNotes);
    }
    setNowTopShow(otherNotes);
  };
  const sideMenuClick = ({ item, key, keyPath, domEvent }) => {
    console.log(item, key, keyPath);
    navigate(`/layout/${key}`);
  };
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
          onClick={topMenuClick}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={origin}
            onClick={sideMenuClick}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default LayoutComponent;
