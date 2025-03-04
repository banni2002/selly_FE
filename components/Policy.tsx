import Image from "next/image"
import Link from "next/link"

export default function PolicyNavigation() {
  return (
    <nav className="max-w-7xl mx-auto px-4 py-6 policy">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:flex-row gap-4 lg:gap-4 text-sm">
          <Link href="/quy-che-hoat-dong" className="text-[#384059] hover:underline">
            QUY CHẾ HOẠT ĐỘNG SÀN GDTMĐT
          </Link>
          <Link href="/chinh-sach-doi-tra" className="text-[#384059] hover:underline">
            CHÍNH SÁCH ĐỔI TRẢ
          </Link>
          <Link href="/chinh-sach-bao-mat" className="text-[#384059] hover:underline">
            CHÍNH SÁCH BẢO MẬT
          </Link>
          <Link href="/chinh-sach-giao-hang" className="text-[#384059] hover:underline">
            CHÍNH SÁCH GIAO HÀNG VÀ THANH TOÁN
          </Link>
          <Link href="/chinh-sach-khieu-nai" className="text-[#384059] hover:underline">
            CHÍNH SÁCH GIẢI QUYẾT KHIẾU NẠI
          </Link>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/logo_gov.png"
            alt="Đã đăng ký Bộ Công Thương"
            width={118}
            height={44}
            className="h-auto w-auto"
          />
        </div>
      </div>
    </nav>
  )
}

