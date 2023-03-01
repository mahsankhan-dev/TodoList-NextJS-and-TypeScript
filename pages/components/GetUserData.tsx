import React from "react";
import styles from "@/styles/Home.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "./Button";

interface getUserDataType {
  input: string;
  updateInput: (...arg: any) => void;
  addList: () => void;
}

const GetUserData: React.FC<getUserDataType> = ({
  input,
  updateInput,
  addList,
}) => {
  return (
    <>
      <div className={styles.top_bar}>
        <input
          type="text"
          placeholder="Enter Your List..."
          value={input}
          onChange={updateInput}
        />
        <Button onClick={addList} children={<AiOutlinePlus />} />
      </div>
    </>
  );
};

export default GetUserData;
