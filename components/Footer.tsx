import Image from 'next/image';

const footerData = {
  company: {
    name: "Công ty TNHH Selly",
    address: "Tòa nhà HB Building | Số 433 - 435 đường Nguyễn Hữu Thọ, phường Khuê Trung, quận Cẩm Lệ, Thành phố Đà Nẵng",
    hotline: "1900633829",
    email: "cskh@selly.vn",
    businessInfo: "Công ty TNHH Selly được thành lập theo Giấy chứng nhận đăng ký kinh doanh số 0402107056 do Sở KH&ĐT thành phố Đà Nẵng cấp ngày 09/7/2021",
  },
  qrCode: "/images/qrcode.png",
  appLinks: [
    { 
      src: "/images/btn-ggplay.png", 
      alt: "Get it on Google Play", 
      href: "https://play.google.com/store/apps/details?id=vn.selly&referrer=https://selly.vn/" 
    },
    { 
      src: "/images/btn-appstore.png", 
      alt: "Download on the App Store", 
      href: "https://apps.apple.com/vn/app/selly-d%E1%BB%85-d%C3%A0ng-b%C3%A1n-h%C3%A0ng/id1554981586" 
    },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="footer-container mx-auto px-4">
        <div className="grid grid-cols-1 justify-content-center md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="text-white left-column">
            <Image src="/images/Logo-tripc.png" alt="Logo" width={280} height={113} />
            <p className="mb-6">Tải ứng dụng để bắt đầu <strong>Bán Hàng online</strong> ngay hôm nay!</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-32 h-32 bg-white p-1">
                <Image src={footerData.qrCode} alt="QR Code" width={114} height={114} className="w-full h-full" />
              </div>

              {/* App Store Links */}
              <div className="flex flex-col gap-2">
                {footerData.appLinks.map((link, index) => (
                  <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="block w-40">
                    <Image src={link.src} alt={link.alt} width={175} height={52} className="w-full" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="text-white right-column">
            <h1 className="font-bold mb-4">{footerData.company.name}</h1>
            <p className="mb-2">
              <strong>Địa chỉ: </strong>{footerData.company.address}
            </p>
            <p>
              <strong className="mb-2">Hotline: {footerData.company.hotline}</strong><br />
              <strong className="mb-2">Email: {footerData.company.email}</strong>
            </p><br />
            <p>{footerData.company.businessInfo}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
