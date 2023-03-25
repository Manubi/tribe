import InviteMembers from "@/components/Combobox";
import Tabbar from "@/components/Tabbar";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Create() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Wallet</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-12">
        <div className="mx-8 space-y-12">
          <div className="pb-12 ">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Create a shared group account
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Create a shared account, add a deposit limit and invite group
              members.
            </p>

            <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Account name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-700 sm:max-w-md">
                    <span className="flex items-center pl-3 text-gray-500 select-none sm:text-sm"></span>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Our shared account"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Money members need to add
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-700 sm:max-w-md">
                    <span className="flex items-center pl-3 text-gray-500 select-none sm:text-sm"></span>
                    <input
                      type="number"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="200,- EUR"
                    />
                  </div>
                </div>
              </div>
              <InviteMembers />
              <button
                type="button"
                onClick={() => router.push("/wallet")}
                className="px-3 py-2 text-sm font-semibold text-center text-white rounded-md shadow-sm px-auto bg-cyan-600 hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                Create shared account
              </button>
            </div>
          </div>
        </div>
        <Tabbar />
      </div>
    </>
  );
}
