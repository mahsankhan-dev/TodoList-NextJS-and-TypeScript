import React from "react";
import styles from "@/styles/Home.module.css";
import { TODOTASK } from "../interfaces/interface";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

interface userRenderData {
  todoList: TODOTASK[];
  delList: any;
  editList: any;
}

const RenderUserData: React.FC<userRenderData> = ({
  todoList,
  delList,
  editList,
}) => {
  const id = Math.random().toLocaleString();
  console.log(id);
  return (
    <>
      <div className={styles.list_bar}>
        {todoList.map((item, index) => {
          console.log("index", id);
          return (
            <>
              <ul>
                <div className={styles.myList}>
                  <li key={id}>{item.todoTask}</li>
                </div>
                <div className={styles.buttons}>
                  <button
                    onClick={() => {
                      delList(item.todoTask);
                    }}
                  >
                    <BsFillTrashFill />
                  </button>
                  <button
                    onClick={() => {
                      editList(item.todoTask, "This is Edited Value");
                    }}
                  >
                    <AiFillEdit />
                  </button>
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
