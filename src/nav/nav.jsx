import logo from '../assets/CMACGM-h57.svg';

export default function Navbar() {
  return (
    <div className="transition-transform  flex items-center justify-between m-8 sm:m-10 md:m-12 lg:m-14 xl:m-8 flex-col sm:flex-row group ">
      {/* Logo */}  
      <img
        src={logo}
        alt="CMA CGM Logo"
        className="duration-700 w-38 h-auto mb-4 sm:mb-2 md:mb-0 hover:scale-105"
      />

      {/* Link */}
      <a
        href="/"
        className="text-xs font-semibold font-roboto text-blue-900 opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visibility-visible transition-opacity duration-500"
      >
        Terra Link
      </a>

      {/* Title */}
      <h3 className="text-lg font-semibold font-roboto text-blue-900 sm:text-center sm:mt-2 md:mt-0">
        Egypt Intermodal Pricing Tool
      </h3>
    </div>
  );
}
