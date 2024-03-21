import { context } from "../CityContext";

const Form = () => {
  const { fetchWeatherData, city, setCity } = context();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
    setCity("");
  };
  return (
    <div className="flex justify-center w-full mb-5 p-5">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Search for city..."
          className="rounded-l-md px-4 py-2 outline-none bg-sky-100 w-96"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button
          type="submit"
          className="bg-sky-700 text-white rounded-r-md px-4 py-2 ml-1
           hover:bg-sky-900"
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default Form;
