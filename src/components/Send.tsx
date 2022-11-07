import { FunctionalComponent as FC } from 'preact';


type SendProps = number;


const Send: FC = () => {

  return (<>
    <div className={"text-center"}>
      <h1 className={"font-bold"}>Send File</h1>
      <span>Select or drop the file or directory to send</span>
    </div>
    <div className={"flex flex-col justiy-center"}>
      <button className={"bg-sky-500 rounded-lg hover:bg-sky-600"}>Select File</button>
      <button className={"bg-gray-800 rounded-lg hover:bg-gray-900"}>Select Folder</button>
    </div>
  </>)
}

export default Send;

