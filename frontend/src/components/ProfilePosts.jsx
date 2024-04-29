

const ProfilePosts = () => {
    return (
        <div className="w-full flex mt-8 space-x-4">
          {/* Left side */}
          <div className="w-[35%] h-[200px] flex justify-center items-center">
            <img src="https://t4.ftcdn.net/jpg/05/79/83/69/360_F_579836914_yo2WTNUIDANJPGGvhXSGMRc6bfCmUGM7.jpg" alt="Artificial Intelligence" className="w-auto h-48" />
          </div>
          {/* Right side */}
          <div className="flex flex-col w-[65%]">
            <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl"> 10 uses of Artificial Intelligence in Day to Day Life
            </h1>
            <div className="flex mb-2 text-sm font-semibold text-grey-500 items-center justify-between md:mb-4">
              <p>@sreeparnadev</p>
              <div className="flex space-x-2"></div>
              <p>16/04/2024 14:09</p>
            </div>
            <p className="text-sm md:text-lg">Artificial Intelligence (AI) represents a frontier in computational technology, where machines are designed to mimic human intelligence and perform tasks such as recognizing speech, making decisions, translating languages, and identifying patterns. This field combines computer science with robust datasets to enable problem-solving and decision-making without human intervention. AI systems range from simple algorithms capable of basic tasks to complex neural networks that learn and adapt over time. The implications of AI are vast and varied, impacting industries from healthcare, where it assists in diagnosing diseases, to finance, where it automates trading strategies. </p>
          </div>
        </div>
      );
}

export default ProfilePosts
