export const FormInput = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="flex items-center gap-4 w-full">
      <label className="w-24 font-medium text-right">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex-1 p-2 border border-gray-300 rounded"
      />
    </div>
  );
};
