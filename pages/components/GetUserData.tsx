import React from "react";
import styles from "@/styles/Home.module.css";
import { AiOutlinePlus } from "react-icons/ai";

interface getUserDataType {
  input: string;
  updateInput: any;
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
        <button onClick={addList}>
          <AiOutlinePlus />
        </button>
      </div>
    </>
  );
};

export default GetUserData;
