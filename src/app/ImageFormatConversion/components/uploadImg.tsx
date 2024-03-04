import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import type { UploadFile } from 'antd';
import { UploadChangeParam } from 'antd/es/upload';

export default function UploadImg({fileList, setFiles}: {fileList: UploadFile[], setFiles: (files: UploadFile[]) => any }) {

  const onUploadImg = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'done') {
      console.log(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      console.log(`${info.file.name} file upload failed.`);
    }
    // 更新文件列表
    setFiles(info.fileList);
    console.log('fileList', fileList);
  };
  return (
    <>
       <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture"
        className="upload-list-inline"
        defaultFileList={ fileList }
        onChange={ onUploadImg }
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    </>
  )
}
