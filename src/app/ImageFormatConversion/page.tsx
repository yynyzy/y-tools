"use client"

import { Button } from "antd";
import type { UploadFile } from 'antd';
import UploadImg from "./components/uploadImg";
import { useState } from "react";

const i18n = {
  tip: '请上传你要修改格式的图片'
}
export default function ImageFormatConversion() {
  const [files, setFiles] = useState<UploadFile[]>([]);

  return (
    <main className="p-20">
      <header className="text-center mb-8">
        <h1 className="text-4xl">{i18n.tip}</h1>
      </header>
      <UploadImg fileList={files} setFiles={setFiles} />
      <div className="text-center mt-10">
        <Button type="primary" size="large" className="bg-cyan-400">
          转化
        </Button>
      </div>
    </main>
  )
}
