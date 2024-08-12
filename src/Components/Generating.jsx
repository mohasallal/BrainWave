import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`cursor-default flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img
        className="w-5 h-5 mr-4 animate-spinReverse"
        src={loading}
        alt="loading"
      />
      AI is generating
    </div>
  );
};

export default Generating;
