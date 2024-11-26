export default function FormSection({ formFields, className = "" }) {
  // Separate the textarea field from the rest
  const nonTextareaFields = formFields.filter(field => field.type !== 'textarea');
  const textareaField = formFields.find(field => field.type === 'textarea');

  return (
    <form className={`flex flex-wrap m-10 gap-16 sm:flex justify-between  ${className}`}>
      {/* Render non-textarea fields first */}
      {nonTextareaFields.map((field, index) => {
        switch (field.type) {
          case "select":
            return (
              <div key={index} className="flex flex-col w-full md:w-auto">
                <label className="text-gray-700 font-medium mb-1">{field.label}</label>
                <select
                  name={field.name}
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
                >
                  {field.options.map((option, i) => (
                    <option key={i} value={option === "Select..." ? "" : option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            );
          case "button":
            return (
              <div key={index} className="flex flex-coll mt-4">
                {field.name === "quotation" ? (
                  <button className=" bg-custom-blue text-white p-2 sm:w-[12vw]">{field.label}</button>
                ) : (
                  <button className=" bg-custom-red text-white p-2 sm:w-[12vw]">{field.label}</button>
                )}
              </div>
            );
          default:
            return (
              <div key={index} className="flex flex-col w-full sm:w-auto">
                <label className="text-gray-700 font-medium mb-1">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder || ""}
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
            );
        }
      })}

      {/* Render the textarea field last if it exists */}
      {textareaField && (
        <div key="textarea" className="flex flex-col w-full sm:w-auto">
          <label className="text-gray-700 font-medium mb-1">{textareaField.label}</label>
          <textarea
            name={textareaField.name}
            className="h-[41px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
          ></textarea>
        </div>
      )}
    </form>
  );
}
