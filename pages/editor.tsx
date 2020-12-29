import React from "react";
import { Editor } from "src/component/Editor";
import { JsonToWidget, WidgetToJson } from "src/component/util/Converters";
import { TextWidget, Widget } from "src/component/Widget/Model";

const EditorPage = () => {
  let widget: Widget = new TextWidget("TextWidget");
  widget.thumbUrl = "https://preview.npmjs.com/package/json-typescript-mapper";
  
  // const json = JSON.stringify(widget, (key, value) => {
    
  //   if(key == "_thumbUrl"){
  //     console.log(key);
  //     var replacement = {};
  //     replacement["thumbUrl"] = value;
  //     return {"thumbUrl":"Nikhil"};
  //   }
  //   return value;
  // });

  const data = WidgetToJson(widget);

  console.log(JsonToWidget(data));


  return <Editor/>;
};

export default EditorPage;
