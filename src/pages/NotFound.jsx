import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="h-screen flex flex-col max-w-xl mx-auto w-full justify-center text-center p-4">
        <h1 className="font-bold text-4xl mb-3">Ooops...</h1>
        <p className="text-slate-700 mb-12">
          The page you are looking for does not exist
        </p>
        <Link
          to="/"
          className="w-full py-3 bg-black hover:bg-stone-800 text-white font-medium text-center"
        >
          Take Me Back
        </Link>
      </div>
    </>
  );
};

export default NotFound;
