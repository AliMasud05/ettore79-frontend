import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Ensure this is imported
import { ChevronDown, Heart, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div>
      <header className="border-b border-gray-200 px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={1000}
              height={1000}
              className="h-auto w-36"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/buy" className="text-gray-700 hover:text-gray-900">
              Buy
            </Link>
            <Link href="/rent" className="text-gray-700 hover:text-gray-900">
              Rent
            </Link>
            <Link href="/agent" className="text-gray-700 hover:text-gray-900">
              Agents
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900">
              Blog
            </Link>
            <Link
              href="/mortgages"
              className="text-gray-700 hover:text-gray-900"
            >
              Mortgages
            </Link>
            <Link
              href="/pricing-plan"
              className="text-gray-700 hover:text-gray-900"
            >
              Pricing Plan
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Heart className="w-5 h-5 text-gray-600 cursor-pointer" />
            <Link href="/signin">
              <Button variant="ghost" className="justify-start w-full">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                Sign Up
              </Button>
            </Link>
            <div className="flex items-center space-x-1 text-gray-700">
              <span>English</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          {/* Mobile Menu Button (Sheet Trigger) */}
          <div className="flex md:hidden items-center space-x-4">
            <Heart className="w-5 h-5 text-gray-600" />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85%] sm:w-[400px] flex flex-col justify-center items-center h-full"
              >
                <div className="flex flex-col space-y-6 w-full max-w-md">
                  {/* Mobile Logo */}
                  <Link
                    href="/"
                    className="flex items-center space-x-2 justify-center"
                  >
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={1000}
                      height={1000}
                      className="h-auto w-32"
                    />
                  </Link>

                  {/* Mobile Nav Links */}
                  <nav className="flex flex-col space-y-4">
                    <Link
                      href="/buy"
                      className="text-gray-700 hover:text-gray-900 text-lg text-center"
                    >
                      Buy
                    </Link>
                    <Link
                      href="/rent"
                      className="text-gray-700 hover:text-gray-900 text-lg text-center"
                    >
                      Rent
                    </Link>
                    <Link
                      href="/agent"
                      className="text-gray-700 hover:text-gray-900 text-lg text-center"
                    >
                      Agents
                    </Link>
                    <Link
                      href="/blog"
                      className="text-gray-700 hover:text-gray-900 text-lg text-center"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/mortgages"
                      className="text-gray-700 hover:text-gray-900 text-lg text-center"
                    >
                      Mortgages
                    </Link>
                    <Link
                      href="/pricing-plan"
                      className="text-gray-700 hover:text-gray-900 text-lg text-center"
                    >
                      Pricing Plan
                    </Link>
                    <Link
                      href="/contact"
                      className="text-gray-700 hover:text-gray-900 text-lg text-center"
                    >
                      Contact
                    </Link>
                  </nav>

                  {/* Mobile Actions */}
                  <div className="flex flex-col space-y-4 pt-6 border-t w-full">
                    <Link href="/signin">
                      <Button variant="ghost" className="justify-start w-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/signup">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                        Sign Up
                      </Button>
                    </Link>
                    {/* <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                      Sign Up
                    </Button> */}
                    <div className="flex items-center justify-between p-2">
                      <span className="text-gray-700">English</span>
                      <ChevronDown className="w-4 h-4 text-gray-700" />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
