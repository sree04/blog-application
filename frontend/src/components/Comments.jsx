import { BiEdit } from "react-icons/bi"
import {MdDelete} from "react-icons/md"


const Comments = () => {
    return (
        <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
               <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-600">@sreeparnadev</h3>
                <div className="flex justify-center items-center space-x-4">
                <p className="text-grey-500 text-sm">16/08/2023</p>
                <p className="text-grey-500 text-sm">16:08</p>
                <div className="flex items-center justify-center space-x-2">
                        <p ><BiEdit/></p>
                        <p ><MdDelete/></p>
                    </div>
                    
                </div>
               </div>
               <p className="px-4 mt-2">nice information</p>
    
               </div>
      )
}

export default Comments
