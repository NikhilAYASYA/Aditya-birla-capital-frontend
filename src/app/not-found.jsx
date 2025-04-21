import Link from "next/link";
// import errorImage from "../../public/errorImage.webp";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-y-3 h-screen text-center justify-center">
      <div>
        <img src="/errorImage.webp" alt="error-image"/>
      </div>
      <h2 className="md:text-3xl text-2xl font-medium">Oops!</h2>
      <p className="md:text-xl">
        We've just received intel that the page you requested cannot be found.
      </p>
      <Link href="/" className="text-primary-100 max-md:text-sm">
        Let us guide you back home
      </Link>
    </div>
  );
}
