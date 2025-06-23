import { useCallback, useState } from "react";
import { AppButton } from "../Button";
import { Input } from "../../ui/input";
import { addNews } from "../../../model";

export const AddNewPost = () => {
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [value, setValue] = useState("");
  const cancelHandler = useCallback(() => {
    setIsAddingPost(false);
    setValue("");
  }, []);
  const addHandler = useCallback(() => {
    addNews({ title: value });
  }, [value]);
  if (isAddingPost)
    return (
      <div className="flex justify-between gap-4">
        <Input
          type="text"
          value={value}
          placeholder="New value"
          onChange={(e) => setValue(e.target.value)}
          className="pl-4 pr-10 h-12 bg-[#eee] rounded-xl text-gray-700 placeholder:text-gray-500"
        />
        <div className="flex justify-between gap-2">
          <AppButton
            customSize="lg"
            disabled={!value}
            icon="plus"
            onClick={addHandler}
          >
            Add
          </AppButton>
          <AppButton customSize="lg" onClick={cancelHandler}>
            Cancel
          </AppButton>
        </div>
      </div>
    );
  return (
    <div>
      <AppButton
        icon="plus"
        customSize="lg"
        onClick={() => setIsAddingPost(true)}
      >
        Add new post
      </AppButton>
    </div>
  );
};
