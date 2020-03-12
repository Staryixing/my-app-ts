import React, { Component } from "react";
import { Button } from "antd";
import styles from './home.less';

class Home extends Component{
  render() {
    return (
      <div className={styles.root}>
        <Button type="primary">点击</Button>
        <div>
          less
        </div>
      </div>
    );
  }
}

export default Home;
