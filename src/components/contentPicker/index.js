import React from "react";
import FullWidthImage from "../contentBlocks/fullWidthImage";
import TwoImage from "../contentBlocks/twoImage";
import Content from "../contentBlocks/content";
import TitleTextColumns from "../contentBlocks/titleTextColumns";
import TextPills from "../contentBlocks/textPills";

const ContentPicker = ({content}) => {

  return content.map((item, index) => {
    if (item.fieldGroupName === "Work_Workitem_WorkItemContent_Content") {
      return <Content content={item} />;
    } else if (item.fieldGroupName === "Work_Workitem_WorkItemContent_FullWidthImage") {
      return <FullWidthImage content={item} />;
    } else if (item.fieldGroupName === "Work_Workitem_WorkItemContent_TitleTextColumns") {
      return <TitleTextColumns content={item} />;
    } else if (item.fieldGroupName === "Work_Workitem_WorkItemContent_TwoImage") {
      return <TwoImage content={item} />;
    } else if (item.fieldGroupName === "Work_Workitem_WorkItemContent_TextPills") {
      return <TextPills content={item} />;
    }
  });

}

export default ContentPicker;


