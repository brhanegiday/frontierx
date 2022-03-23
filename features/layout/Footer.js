import Link from "next/link";
function Footer() {
  return (
    <div className="py-12 flex items-center justify-center bg-black">
      <Link href="/">
        <a className="font-semi-bold cursor-pointer">
          <img
            src="/home/footer-logo.png"
            alt="frontierX Logo"
            width="150px"
            height="15px"
          />
        </a>
      </Link>
    </div>
  );
}

export default Footer;
