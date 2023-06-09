import { AccountCard } from "@/components/AccountCard";
import { Profile } from "@/components/Profile";
import Tabbar from "@/components/Tabbar";
import { CreditCardIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import MyAccount from "../components/MyAccount";

const inter = Inter({ subsets: ["latin"] });

const card_WG = {
  name: "Living Community",
  href: "/wallet",
  icon: CreditCardIcon,
  amount: "€ 2.400,50",
  description: "Bennogasse 19/19",
};

const card_Family = {
  name: "Family",
  href: "/wallet",
  icon: CreditCardIcon,
  amount: "€ 1.600,50",
  description: "Schwarzenegger Family",
};

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Loyalty Mockup</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-8">
        <Profile />
        <MyAccount />
        <div className="flex content-center justify-between mx-6 mt-12 mb-2">
          <h2 className="text-lg font-medium text-gray-900">
            Shared group accounts
          </h2>
          <div
            className="flex justify-end"
            onClick={() => router.push("/create")}
          >
            <PlusCircleIcon className="w-8 h-8 -mt-2 text-gray-500" />
          </div>
        </div>
        <div className="mb-24 space-y-6">
          <AccountCard card={card_WG} />
          <AccountCard card={card_Family} />
        </div>
        <Tabbar />
      </div>
    </>
  );
}
