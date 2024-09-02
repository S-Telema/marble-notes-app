import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";

const font = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-0">
      <Image
        src="/logo.svg"
        alt="Logo"
        height="25"
        width="25"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        alt="Logo"
        height="25"
        width="25"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font)} style={{ color: '#FF8C00', fontWeight: 'bold', fontSize: '20px' }}>
  marble
</p>



    </div>
  );
};
