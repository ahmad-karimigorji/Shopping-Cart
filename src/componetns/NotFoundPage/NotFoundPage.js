import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigation = useNavigate()
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="mb-6 font-bold">
        Not Found Page / 404
      </h2>
      <button className="border border-slate-800 py-1 px-5 rounded-lg" onClick={() => navigation('/')}>Go Home</button>
    </div>
  );
};

export default NotFoundPage;
