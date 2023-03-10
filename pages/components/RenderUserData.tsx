import React from "react";
import styles from "@/styles/Home.module.css";
import { TODOTASK } from "../interfaces/interface";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import Button from "./Button";

interface userRenderData {
  todoList: TODOTASK[];
  delList: (...arg: any) => void;
  editList: (...arg: any) => void;
}

const RenderUserData: React.FC<userRenderData> = ({
  todoList,
  delList,
  editList,
}) => {
  return (
    <>
      <div className={styles.list_bar}>
        {todoList.map((item, index) => {
          return (
            <>
              <ul>
                <div className={styles.myList}>
                  <li key={index}>{item.todoTask}</li>
                </div>
                <div className={styles.buttons}>
                  <Button
                    onClick={() => {
                      delList(item.todoTask);
                    }}
                    children={<BsFillTrashFill />}
                  />
                  <Button
                    onClick={() => {
                      editList(item.todoTask, "This is Edited Value");
                    }}
                    children={<AiFillEdit />}
                  />
                </div>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};

export default RenderUserData;
