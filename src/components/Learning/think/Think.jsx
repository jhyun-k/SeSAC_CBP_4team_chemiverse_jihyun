import ThinkList from "./ThinkList";
import styles from "../css/think.module.css";
import ThinkEditor from "./ThinkEditor";
import { useRef, useState } from "react";

function Think() {
    const [data, setData] = useState([]);
    const dataId = useRef(0);
    const onCreate = (author, content, emotion) => {
        const created_date = new Date().getTime();

        const newItem = {
            author,
            content,
            emotion,
            created_date,
            id: dataId.current,
        };
        dataId.current += 1;
        setData([newItem, ...data]);
    };

    const onEdit = (targetId, newContent) => {
        setData(
            data.map((it) =>
                it.id === targetId ? { ...it, content: newContent } : it
            )
        );
    };

    return (
        <div className="App">
            {data.length >= 1 ? (
                <ThinkList thinkList={data} onEdit={onEdit} />
            ) : (
                <ThinkEditor onCreate={onCreate} />
            )}
        </div>
    );
}

export default Think;
