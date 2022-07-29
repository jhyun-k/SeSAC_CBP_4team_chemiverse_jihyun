import DiaryList from './DiaryList';
import styles from './css/diary.module.css';
import DiaryEditor from './DiaryEditor';
import { useEffect, useRef , useState } from 'react';

function Diary() {
  const [data,setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (arr) =>{
    // const newItem = {
    //   // author:author,
    //   content:content,
    //   // created_date,
    //   id : dataId.current
    // }
    dataId.current +=1;
    setData(...data,arr);
   
  }

  const onEdit=(targetId,newContent)=>{
    setData(
      data.map((it)=>it.id === targetId ? {...it, content:newContent} : it)
    )
  }

  return (
    <div className={styles.App}>
      {data.length >= 1 ? (
                <DiaryList diaryList={data} onEdit={onEdit}  className={styles.list}/>
            ) : (
                <DiaryEditor onCreate={onCreate} className={styles.edit}/>
            )}
    </div>
  );
}


export default Diary;
  
