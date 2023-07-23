import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="h-screen overflow-scroll bg-orange-400 font-medium text-white">
        <div className="flex flex-col max-w-4xl mx-auto p-4 h-full">
          <div className="flex flex-1 flex-col items-center space-y-4">
            <h1 className="text-3xl font-bold">Home</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores, eos.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              to="/about"
              className="px-6 py-2 rounded-xl bg-orange-600 text-center"
            >
              Go!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
