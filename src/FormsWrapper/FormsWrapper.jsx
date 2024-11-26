export default function FormsWrapper({ imgUrl, imgAlt, FormItSelf, formFields }) {
  return (
    <div className="flex items-center relative ">
      <img
        className="h-14 w-14 mt-2 absolute left-[-60px]"
        src={imgUrl}
        alt={imgAlt}
      />
      <FormItSelf formFields={formFields} />
    </div>
  );
}