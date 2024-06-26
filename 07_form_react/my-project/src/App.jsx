export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Contoh Penggunaan Form</h1>
      <div class="inline-block relative w-64">
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>
            Really long option that will likely overlap the chevron
          </option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>

      {/* <!-- Two columns --> */}
      <div className="flex mb-4">
        <div className="w-1/2 bg-gray-400 h-12"></div>
        <div className="w-1/2 bg-gray-500 h-12"></div>
      </div>
      {/* <!-- Three columns --> */}
      <div className="flex mb-4">
        <div className="w-1/3 bg-gray-400 h-12"></div>
        <div className="w-1/3 bg-gray-500 h-12"></div>
        <div className="w-1/3 bg-gray-400 h-12"></div>
      </div>
    </>
  );
}
