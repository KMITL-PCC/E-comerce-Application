import Link from "next/link";
import Logo from "./logo";

const links = [
  {
    group: "Company",
    items: [
      {
        title: "About",
        href: "#",
      },
      {
        title: "Features",
        href: "#",
      },
      {
        title: "Works",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
    ],
  },
  {
    group: "Help",
    items: [
      {
        title: "Customer Support",
        href: "#",
      },
      {
        title: "Delivery Details",
        href: "#",
      },
      {
        title: "Terms & Conditions",
        href: "#",
      },
      {
        title: "Privacy Policy",
        href: "#",
      },
    ],
  },
  {
    group: "FAQ",
    items: [
      {
        title: "Account",
        href: "#",
      },
      {
        title: "Manage Delivery",
        href: "#",
      },
      {
        title: "Orders",
        href: "#",
      },
      {
        title: "Payments",
        href: "#",
      },
    ],
  },
  {
    group: "Resources",
    items: [
      {
        title: "Free eBooks",
        href: "#",
      },
      {
        title: "Development Tutorials",
        href: "#",
      },
      {
        title: "How to - Blog",
        href: "#",
      },
      {
        title: "Youtube Playlist",
        href: "#",
      },
    ],
  },
];

const Footer = async () => {
  "use cache";

  return (
    <footer className="border-b bg-gray-50 p-8 pb-4">
      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-8">
        <div className="grid gap-8 text-sm md:grid-cols-5 lg:text-base">
          <div className="flex flex-col gap-8 md:col-span-2">
            <Link href="/" aria-label="go home" className="block size-fit">
              <Logo />
            </Link>

            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>

            <div className="flex flex-wrap justify-start gap-4 text-sm">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X/Twitter"
                className="text-muted-foreground hover:text-primary block rounded-full border bg-white p-1.5"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                  ></path>
                </svg>
              </Link>

              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary block rounded-full border bg-white p-1.5"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                  ></path>
                </svg>
              </Link>

              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary block rounded-full border bg-white p-1.5"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  ></path>
                </svg>
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-muted-foreground hover:text-primary block rounded-full border bg-white p-1.5"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:col-span-3">
            {links.map((link, index) => (
              <div key={index} className="space-y-4">
                <span className="block font-medium">{link.group}</span>
                {link.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary block duration-150"
                  >
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col flex-wrap items-center justify-between gap-4 border-t pt-8 lg:flex-row">
          <span className="text-muted-foreground block text-center text-sm">
            © {new Date().getFullYear()} Brand&apos;s Name, All rights reserved
          </span>
          <div className="item-center flex gap-4">
            <div className="rounded-md border bg-white p-1.5"> ???</div>
            <div className="rounded-md border bg-white p-1.5"> ???</div>
            <div className="rounded-md border bg-white p-1.5"> ???</div>
            <div className="rounded-md border bg-white p-1.5"> ???</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
