import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import Comments from "../components/Comments";

const PostDetails = () => {

  const postId=useParams().id
  const [post,setPost]=useState({})
  const {user}=useContext(UserContext)
  const [comments,setComments]=useState([])
  const [comment,setComment]=useState("")
  const [loader,setLoader]=useState(false)
  const navigate=useNavigate()



  const fetchPost=async()=>{
    try{
      const res= await axios.get(URL+"/api/posts/"+postId)
      // console.log(res.data)
      setPost(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

  const handleDeletePost=async ()=>{

    try{
      const res=await axios.delete(URL+"/api/posts/"+postId,{withCredentials:true})
      console.log(res.data)
      navigate("/")

    }
    catch(err){
      console.log(err)
    }

  }

  useEffect(()=>{
    fetchPost()

  },[postId])

  
  return (
    <div>
      <Navbar />
      <div className="h-[80vh] flex justify-center items-center w-full">
        {/* <Loader/> */}
      </div>
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            10 uses of Artificial Intelligence in Day to Day Life
          </h1>
          <div className="flex items-center justify-between mt-2 md:mt-4">
            <p><BiEdit /></p>
            <p><MdDelete /></p> 
          </div>
        </div>
    <div className="flex items-center ju mt-2 md:mt-4">
        <p>@sreeparnadev</p>
        <div className="flex space-x-2">
            <p>13/10/2024</p>
                <p>16:04</p>
        </div>
        
    </div>

    <img src="data:image/jpeg;base64,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" className="w-full mx-auto mt-8" alt=""/>
    <p className="mx-auto mt-8">

It is a long established fac fontt that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
</p>

<div className="flex items-center mt-8 space-x-4 font-semibold"></div>
<p>Categories:</p>
<div className="flex justify-center items-center space-x-2">
    
</div>
<div className="bg-grey-300 rounded-lg px-3 py-1">Tech</div>
<div className="w-full flex flex-col mt-4">
  <h3 className="mt-6 mb-4 font-semibold">Comments</h3>
  <Comments/>

</div>

      </div>
      <Footer />
    </div>
  );
}

export default PostDetails;
