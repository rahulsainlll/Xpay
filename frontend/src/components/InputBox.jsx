export default function InputBox({ label, placeholder, onChange }) {
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
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
