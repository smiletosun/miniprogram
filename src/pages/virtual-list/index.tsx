import { useEffect, useRef, useState } from "react";
import {  VirtualList } from "@nutui/nutui-react-taro";


export default function Demo() {
  const [list, setList] = useState<string[]>([]);
  const [pageNo, setPageNo] = useState(1);
  const isLoading = useRef(false);
  const getData = () => {
    const data: string[] = [];
    const pageSize = 20;
    for (let i = (pageNo - 1) * pageSize; i < pageNo * pageSize; i++) {
      const num = i > 9 ? i : `0${i}`;
      data.push(`list${num}`);
    }
    setList((newList: string[]) => {
      return [...newList, ...data];
    });
    setTimeout(() => {
      isLoading.current = false;
    }, 30);
  };
  const itemRender = (data ) => {
    return <view>{data}</view>;
  };

  const onScroll = () => {
    if (pageNo > 25 || isLoading.current) return;
    isLoading.current = true;
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    if(pageNo) {
      getData();
    }
  }, [pageNo]);

  return (
    <VirtualList
      itemHeight={50}
      list={list}
      itemRender={itemRender}
      onScroll={onScroll}
    />
  );
}
