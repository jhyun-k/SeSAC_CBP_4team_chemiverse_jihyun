import React from "react";
import ThinkItem from "./ThinkItem";
import styles from "../css/think.module.css";

const ThinkList = ({ thinkList, onRemove, onEdit }) => {
    return (
        <div className={styles.ThinkList}>
            <div>
                {thinkList.map((it) => (
                    <ThinkItem
                        key={it.id}
                        {...it}
                        onRemove={onRemove}
                        onEdit={onEdit}
                    />
                ))}
            </div>
        </div>
    );
};

ThinkList.defaultProps = {
    thinkList: [],
};

export default ThinkList;
