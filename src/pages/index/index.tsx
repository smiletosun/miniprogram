import { useState } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { Button,  TextArea, Dialog, Cell, Tabbar } from "@nutui/nutui-react-taro";
import { Cart, Category, Find, Home, User } from "@nutui/icons-react-taro";

function Index() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  return (
    <View className="h-screen">
      <View className="p-5">
        <View className="flex gap-2 flex-row">
          <Button type="info" openType="share">
          share
          </Button>
          <Button type="info" openType="openSetting"  >
          openSetting
          </Button>
          <Button type="primary"  onClick={handleClick}>
          share
          </Button>
          <Button type="primary"  onClick={() => {
            Taro.navigateTo({
              url: "/pages/virtual-list/index",
            });
          }}
          >
          to list
          </Button>
        </View>

        <Cell title="我是标题">
          <TextArea showCount maxLength={20} />
        </Cell>

        <Dialog
          visible={visible}
          onConfirm={() => setVisible(false)}
          onCancel={() => setVisible(false)}
        >
      hello world
        </Dialog>

      </View>
      <Tabbar defaultValue={2} className="fixed bottom-0 pb-[env(safe-area-inset-bottom)]">
        <Tabbar.Item title="首页" icon={<Home size={18} />} />
        <Tabbar.Item title="分类" icon={<Category size={18} />} />
        <Tabbar.Item title="发现" icon={<Find size={18} />} />
      </Tabbar>
    </View>
  );
}

export default Index;
