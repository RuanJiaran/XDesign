import React from 'react';
import { Icon, Space } from 'xdesign-ui';
import { copy } from '../../_utils';
import './index.less';

const IconWrap = (props: { name: string; spin?: boolean }) => {
  const { name, spin = false } = props;

  let icon = '';
  icon = spin ? `<Icon type='${name}' spin=${spin}/>` : `<Icon type='${name}'/>`;

  return (
    <>
      <div className="icon-item" onClick={() => copy(icon)}>
        <Icon type={name} spin={spin} />
        <span>{name}</span>
      </div>
    </>
  );
};

const CategoryIconWrap = (props: { title: string; children: React.ReactNode }) => {
  return (
    <div className="category-wrap">
      <div className="title">{props.title}</div>
      <Space>{props.children}</Space>
    </div>
  );
};

const Index = () => {
  return (
    <Space>
      <CategoryIconWrap title="加载类图标">
        <IconWrap name="loading3" spin={true} />
        <IconWrap name="loading2" spin={true} />
        <IconWrap name="Loading" spin={true} />
        <IconWrap name="loading1" spin={true} />
        <IconWrap name="jiazailoading-A" spin={true} />
        <IconWrap name="loading5" spin={true} />
        <IconWrap name="Loading1" spin={true} />
        <IconWrap name="Loading2" spin={true} />
        <IconWrap name="loading" spin={true} />
      </CategoryIconWrap>

      <CategoryIconWrap title="搜索类">
        <IconWrap name="search" />
        <IconWrap name="search1" />
        <IconWrap name="search_light" />
        <IconWrap name="search_list_light" />
        <IconWrap name="filesearch" />
        <IconWrap name="searchcart" />
      </CategoryIconWrap>

      <CategoryIconWrap title="添加类">
        <IconWrap name="tianjia1" />
        <IconWrap name="tianjia5" />
        <IconWrap name="diannaotianjia" />
        <IconWrap name="tianjiadingyue" />
        <IconWrap name="tianjia7" />
        <IconWrap name="tupiantianjia" />
        <IconWrap name="tianjiawenjian1" />
        <IconWrap name="tianjia8" />
        <IconWrap name="piliangtianjia" />
        <IconWrap name="tianjiawenjian2" />
      </CategoryIconWrap>

      <CategoryIconWrap title="编辑类">
        <IconWrap name="edit1" />
        <IconWrap name="edit" />
        <IconWrap name="edit3" />
        <IconWrap name="edit4" />
        <IconWrap name="edit5" />
        <IconWrap name="edit7" />
        <IconWrap name="edit8" />
      </CategoryIconWrap>

      <CategoryIconWrap title="删除类">
        <IconWrap name="delete" />
        <IconWrap name="delete3" />
        <IconWrap name="deleteteam" />
        <IconWrap name="delete4" />
        <IconWrap name="delete6" />
        <IconWrap name="delete7" />
        <IconWrap name="delete8" />
        <IconWrap name="delete-filling" />
      </CategoryIconWrap>

      <CategoryIconWrap title="提示类">
        <IconWrap name="warning_outlined" />
        <IconWrap name="info" />
        <IconWrap name="wifi" />
        <IconWrap name="warn" />
        <IconWrap name="alarm-check" />
        <IconWrap name="info1" />
        <IconWrap name="question-circle" />
        <IconWrap name="file-exclamation" />
        <IconWrap name="check" />
        <IconWrap name="question" />
        <IconWrap name="cloud-exclamation" />
        <IconWrap name="round_check" />
        <IconWrap name="wifi_exclamationmark" />
        <IconWrap name="rcd-exclamation" />
      </CategoryIconWrap>

      <CategoryIconWrap title="箭头方向类">
        <IconWrap name="list" />
        <IconWrap name="list1" />
        <IconWrap name="fullscreen" />
        <IconWrap name="fullscreen-exit" />
        <IconWrap name="vertical-align-top" />
        <IconWrap name="enter1" />
        <IconWrap name="rollback" />
        <IconWrap name="vertical-align-middl" />
        <IconWrap name="vertical-align-botto" />
        <IconWrap name="verticalright" />
        <IconWrap name="vertical-left" />
        <IconWrap name="swap" />
        <IconWrap name="swap1" />
        <IconWrap name="swap-right" />
        <IconWrap name="swap-left" />
        <IconWrap name="arrow" />
        <IconWrap name="circle-down" />
        <IconWrap name="circle-left" />
        <IconWrap name="circle-right" />
        <IconWrap name="arrow-up" />
        <IconWrap name="arrowright" />
        <IconWrap name="arrowup" />
        <IconWrap name="arrowleft" />
        <IconWrap name="arrowdown" />
        <IconWrap name="arrow1" />
        <IconWrap name="arrow_up_arrow_down_circle" />
        <IconWrap name="arrow_up_arrow_down_circle1" />
        <IconWrap name="arrow-up-circle" />
        <IconWrap name="arrow-right-circle" />
        <IconWrap name="arrow-down" />
        <IconWrap name="arrow-right" />
        <IconWrap name="arrow-double-left" />
        <IconWrap name="arrow-left-circle" />
        <IconWrap name="arrow-double-right" />
        <IconWrap name="arrow-up-filling" />
        <IconWrap name="arrow-down-filling" />
        <IconWrap name="arrow-left-filling" />
        <IconWrap name="arrow-right-filling" />
        <IconWrap name="arrow_up" />
        <IconWrap name="arrow2" />
        <IconWrap name="arrow-down-circle-outline" />
      </CategoryIconWrap>

      <CategoryIconWrap title="其它">
        <IconWrap name="money" />
        <IconWrap name="moneybag" />
        <IconWrap name="meiyuan" />
        <IconWrap name="money1" />
        <IconWrap name="uf_money" />
        <IconWrap name="staroutline" />
        <IconWrap name="cloud-outline" />
        <IconWrap name="home-outline" />
        <IconWrap name="mic-off-outline" />
        <IconWrap name="pin-outline" />
        <IconWrap name="grid-outline" />
        <IconWrap name="eye-outline" />
        <IconWrap name="at-outline" />
        <IconWrap name="link--outline" />
        <IconWrap name="mic-outline" />
        <IconWrap name="moon-outline" />
        <IconWrap name="like-outline" />
        <IconWrap name="cast-outline" />
        <IconWrap name="link-outline" />
        <IconWrap name="phone-outline" />
        <IconWrap name="tv-outline" />
        <IconWrap name="code-outline" />
        <IconWrap name="kaishi-outline" />
        <IconWrap name="zanting-outline" />
        <IconWrap name="fanhui-outline" />
        <IconWrap name="huiyuan-outline" />
        <IconWrap name="qianbao-outline" />
        <IconWrap name="MoneyOutline" />
        <IconWrap name="SoundOutline" />
        <IconWrap name="RouterOutline" />
        <IconWrap name="planet-outline" />
        <IconWrap name="Logout-Outlined" />
      </CategoryIconWrap>
    </Space>
  );
};

export default Index;
