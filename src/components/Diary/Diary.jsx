import DiaryList from './DiaryList';
import styles from './css/diary.module.css';
import DiaryEditor from './DiaryEditor';
import { useEffect, useRef , useState } from 'react';

function Diary() {
  const [data,setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (author, content, emotion) =>{
    const created_date = new Date().getTime();

    const newItem = {
      content,
      created_date,
      id : dataId.current
    }
    dataId.current +=1;
    setData([newItem, ...data]);
  }

  const onRemove = (targetId)=>{
    const newDataList = data.filter((it)=>it.id !==targetId);
    setData(newDataList);
  }

  const onEdit=(targetId,newContent)=>{
    setData(
      data.map((it)=>it.id === targetId ? {...it, content:newContent} : it)
    )
  }

  return (
    <div className={styles.App}>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit}/>
    </div>
  );
}


export default Diary;
  
