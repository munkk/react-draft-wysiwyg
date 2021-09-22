/* @flow */

import React from "react";
import { Editor } from "../../src";

const ImageAlignment = () => (
  <div className="rdw-storybook-root">
    <h3>Image Alignment</h3>
    <Editor
      toolbarClassName="rdw-storybook-toolbar"
      wrapperClassName="rdw-storybook-wrapper"
      editorClassName="rdw-storybook-editor"
      toolbar={{
        image: {
          previewImage: true,
          imageAlignment: "left",
        },
      }}
    />
  </div>
);

export default ImageAlignment;
