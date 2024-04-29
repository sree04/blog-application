import Navbar from "../components/Navbar"
import ProfilePosts from "../components/ProfilePosts"
import Footer from "../components/Footer"
import HomePost from "../components/HomePost"
const Profile = () => {
  return (
    <div>
      <Navbar/>
      <div className="min-h-[80vh] px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start ">
        <div className="flex flex-col md:w-[70%] w-full mt-8 md:mt-0">
        <h1 className="text-xl font-bold mb-4">Your posts:</h1>
    <ProfilePosts/>
    <ProfilePosts/>
    <ProfilePosts/>
    </div>
        <div className=" flex flex-col space-y-4 md:w-[30%] w-full md:items-end ">
        <h1 className="text-xl font-bold mb-4">Profile</h1>
        <input className="outline-none px-4 py-2 text-gray-500" placeholder="Your username" type="text"></input>
        <input className="outline-none px-4 py-2 text-gray-500" placeholder="Your email" type="email"/>
        <input className="outline-none px-4 py-2 text-gray-500" placeholder="Your password" type="password"/>
        <div className="flex item-center space-x-4 mt-8">
            <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-grey-400">Update</button>
            <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-grey-400">Delete</button>
        </div>
        </div>
  
    </div>
    </div>
  )
}

export default Profile
