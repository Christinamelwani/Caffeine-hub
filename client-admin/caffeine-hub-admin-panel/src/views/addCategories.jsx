import ReusableForm from "../components/form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postCategory } from "../actions/post";
export default function AddCategory({ Navigation }) {
  const [newCategory, setNewCategory] = useState({
    name: "",
  });

  const dispatch = useDispatch();
  const submitNewCategory = (category) => {
    dispatch(postCategory(newCategory));
    Navigation("/categories");
  };
  return (
    <div>
      <ReusableForm
        action={submitNewCategory}
        data={newCategory}
        setData={setNewCategory}
        actionName="Add Category"
        type="category"
      />
    </div>
  );
}
