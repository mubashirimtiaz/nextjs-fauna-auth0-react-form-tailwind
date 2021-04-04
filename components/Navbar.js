import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
const Navbar = () => {
  const { user, isLoading } = useUser();
  return (
    <nav>
      <Link href="/">
        <a className="text-2xl mb-2 block text-center text-red-200 uppercase">
          Errday Snippets
        </a>
      </Link>
      <div className="flex  space-x-2 md:space-x-3 justify-center items-center text-center mb-6 mx-auto">
        <Link href="/snippets/html">
          <a className="text-red-100 text-xs md:text-lg hover:underline">
            HTML5
          </a>
        </Link>
        <Link href="/snippets/css">
          <a className="text-red-100 text-xs md:text-lg hover:underline">
            CSS3
          </a>
        </Link>
        <Link href="/snippets/javascript">
          <a className="text-red-100 text-xs md:text-lg hover:underline">
            JAVASCRIPT
          </a>
        </Link>
        {!isLoading && !user && (
          <Link href="/api/auth/login">
            <a className="text-red-100 text-xs md:text-lg hover:underline">
              LOGIN
            </a>
          </Link>
        )}
        {!isLoading && user && (
          <>
            <Link href="/snippets">
              <a className="text-red-100 text-xs md:text-lg hover:underline">
                SNIPPETS
              </a>
            </Link>
            <Link href="/api/auth/logout">
              <a className="text-red-100 text-xs md:text-lg hover:underline">
                LOGOUT
              </a>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
