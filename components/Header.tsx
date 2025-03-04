import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-[#fff] w-full py-[2px] fixed z-10">
      <div className="container mx-1240 px-4 h-16 flex items-center justify-between">
        <Image src="/images/Logo-tripc.png" alt="Logo TripC" width={155} height={50}/>
        <div className="flex items-center sign-up">
            <Link href="https://selly.vn/home" className="flex items-center gap-2 text-[#0365FA] font-bold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 15H9C5.686 15 3 17.686 3 21V22C3 22 6.125 23 12 23C17.875 23 21 22 21 22V21C21 17.686 18.314 15 15 15Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
              <path d="M7 6C7 3.239 9.239 1 12 1C14.761 1 17 3.239 17 6C17 8.761 14.761 12 12 12C9.239 12 7 8.761 7 6Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
            </svg>
            Đăng ký / Đăng nhập
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
