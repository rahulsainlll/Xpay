export default function BottomWarning({ label, buttonText, to }) {
  return (
    <p className=" mt-2 text-center text-sm text-gray-500">
      {label}{" "}
      <a
        href={to}
        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
      >
        {buttonText}
      </a>
    </p>
  );
}
