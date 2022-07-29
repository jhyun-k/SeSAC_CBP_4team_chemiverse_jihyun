import React from "react";
import styles from "./css/index.module.css";
import Diary from "../Diary/Diary";
import { BsCheckLg } from "react-icons/bs";

const Journal = () => {
  return (
    <div className={styles.JournalGoal}>
      <p className={styles.pin}>
        <BsCheckLg />
      </p>
      <h1 className={styles.title}>성찰저널</h1>
      <h3 className={styles.subTitle}>
        1. 무엇을 어떤 과정을 통해 배웠는가? <br />(지난 2주동안 내가 무엇을 어떻게
        공부하고 나의 것으로 만들었는지에 대해 이야기 합니다.) <br />
        2. 왜 배워야 했는지 성찰한다. (그렇다면 그것을 내가 왜 배워야 했는지를
        생각합니다.) <br />
        3. 이전의 알고 있던 지식이나 경험을 성찰한다. <br />(이전에 내가 알고 있었던
        것과는 어떻게 다른지를 생각해 봅니다.) <br />
        4. 새롭게 습득된 지식을 이전의 지식과 통합/ 발전시킨다. <br />(새롭게 알게 된
        나의 지식과 그리고 이전에 내가 알고 있었던 것들을 합하여 새로운 나의
        생각과 지식을 발전 시켜 봅니다.) <br />
        5. 실제 생활/가정/직장에 어떻게 적용할 것인가? <br />(나의 일상생활에서 어떻게
        적용해야 하는지를 생각합니다.) <br />
        6. 나의 기여도에 대한 기술과 팀 평가에 대해 <br />(이 부분은 공부를 하면서
        팀원들과의 다양한 정보 교환이 있었을텐데요, 일종의 팀원 평가로
        생각하시면 되요. 팀에서 나의 역할과 구성원의 역할을 자세히 기술하시면
        됩니다.)
      </h3>
      <Diary />
    </div>
  );
};

export default Journal;
