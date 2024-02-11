import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const Editor = ({ handleOnChangeText, defaultValue, height }) => {
  return (
    <SunEditor
      height={height}
      placeholder="Write your post content here"
      autoFocus={true}
      setDefaultStyle="font-family: jetBrains Mono; font-size: 16px;"
      setOptions={{
        buttonList: [
          [
            "bold",
            "italic",
            "link",
            "list",
            "blockquote",
            "paragraphStyle",
            "image",
          ],
        ],
        resizingBar: false,
      }}
      onChange={handleOnChangeText}
      defaultValue={defaultValue}
    />
  );
};

export default Editor;
