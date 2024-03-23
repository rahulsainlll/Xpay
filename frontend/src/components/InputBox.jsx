export default function InputBox({ label, placeholder, onchange }) {
  return (
    <div className="">
      <div className="">
        <label className="block text-sm  mt-2 leading-6 text-gray-900 text-left">
          {label}
        </label>
        <div className="mt-1">
          <input
            type="text"
            autoComplete="off"
            placeholder={placeholder}
            onchange={onchange}
            className="block w-full rounded-md border-0 p-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
}
