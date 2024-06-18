import Image from "next/image";
import Link from "next/link";
import NavLogo from '@/public/heroimg.png'

export default function Navbar() {
    return (
        <div className="w-full bg-black text-white absolute top-0">
            <div className="w-11/12 mx-auto flex justify-between items-center py-3">
                <Link href={'/'} className="">
                    <Image src={NavLogo} className="" width={100} height={100} alt="" />
                </Link>
                <div className="hidden w-6/12 md:flex justify-between">
                    <div className="flex gap-20">
                        <Link href={'/contestants'} className="">Contestants</Link>
                        <Link href={'/gallery'} className="">Gallery</Link>
                    </div>
                    <div>
                        <Link href={'/signup'} className="border border-[#52CF50] text-white py-2 px-6">Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}