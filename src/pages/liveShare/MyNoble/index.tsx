import React from "react";
import "./index.less";
import { Button, Cell } from "zarm";
import { useState } from "react";
import { Tabs } from "zarm";
let Tabs2: any = Tabs;
const { Panel } = Tabs;

const MyNoble = (props: any) => {
  const [value, setValue] = useState(0);
  console.log("vlaue", value)
  return (
    <div className="$_my_noble">
    <Tabs2 scrollable value={value} onChange={setValue}>
      <Panel title="选项卡1">
        <div className="content">选项卡1内容</div>
      </Panel>
      <Panel title="选项卡2">
        <div className="content">选项卡2内容</div>
      </Panel>
      <Panel title="选项卡3">
        <div className="content">选项卡3内容</div>
      </Panel>
      <Panel title="选项卡4">
        <div className="content">选项卡4内容</div>
      </Panel>
      <Panel title="选项卡5">
        <div className="content">选项卡5内容</div>
      </Panel>
      <Panel title="选项卡6">
        <div className="content">选项卡6内容</div>
      </Panel>
      <Panel title="选项卡7">
        <div className="content">选项卡7内容</div>
      </Panel>
    </Tabs2>
    </div>
  );
};
export default MyNoble;
