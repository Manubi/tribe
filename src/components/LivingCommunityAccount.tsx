/* eslint-disable @next/next/no-img-element */
import Tabbar from "@/components/Tabbar";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BanknotesIcon,
  CheckIcon,
  ChevronRightIcon,
  ClockIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";

const transactions = [
  {
    id: 1,
    name: "Rent Bennogasse 04/2023",
    href: "#",
    amount: "€ -2.000,00",
    currency: "EUR",
    status: "success",
    date: "April 01, 2023",
    datetime: "2023-07-11",
  },
  {
    id: 2,
    name: "Billa Groceries by John Doe",
    href: "#",
    amount: "€ -54,23",
    currency: "USD",
    status: "success",
    date: "March 30, 2023",
    datetime: "2023-07-11",
  },
  {
    id: 3,
    name: "Electricity & gas",
    href: "#",
    amount: "€ -40,99",
    currency: "EUR",
    status: "success",
    date: "March 29, 2023",
    datetime: "2023-07-11",
  },
  {
    id: 4,
    name: "Deposit by Tim Mayer",
    href: "#",
    amount: "€ +200,00",
    currency: "EUR",
    status: "success",
    date: "March 29, 2023",
    datetime: "2023-07-11",
  },
];

export default function LivingCommunityAccount() {
  return (
    <>
      <Head>
        <title>Living Community Account</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-4 my-8">
        <div className="flex flex-col justify-center">
          <h2 className="mt-8 text-2xl font-medium leading-6 text-center text-gray-900">
            Living Community
          </h2>
          <p className="mt-4 text-sm text-center text-gray-400">
            Bennogasse 19/19
          </p>
          <h2 className="mt-12 text-2xl font-semibold leading-6 text-center text-gray-900">
            € 1.400,50
          </h2>
        </div>
        <div className="flex justify-between m-10 align-middle">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Deposit{" "}
            <ArrowDownIcon className="flex-shrink-0 w-5 h-5 ml-5 text-gray-400 " />
          </button>
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-cyan-600 hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          >
            Withdraw{" "}
            <ArrowUpIcon className="flex-shrink-0 w-5 h-5 ml-5 text-white-400 " />
          </button>
        </div>

        {/* <div className="flex items-center px-3 py-2 m-20 mt-2 text-sm text-center bg-blue-600 rounded shadow-sm ring-1 ring-inset ring-blue-700 hover:bg-blue-700">
          Claim new offers
          <ShoppingBagIcon className="flex-shrink-0 w-5 h-5 ml-5 text-gray-400 " />
        </div> */}

        <h2 className="max-w-6xl px-4 mx-auto mt-8 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
          Members
        </h2>

        <div className="m-2">
          <div className="flex items-center justify-between mt-2 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <div className="flex items-center justify-center align-middle">
              <img
                className="w-12 h-12 m-3 rounded-full sm:hidden"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <h1 className="text-base leading-7 text-gray-900 sm:truncate sm:leading-9">
                John Doe
              </h1>
            </div>
            <div className="flex items-center justify-between pl-2 pr-3 mr-3 text-xs leading-5 text-gray-900 bg-yellow-300 sm:truncate sm:leading-9 rounded-xl">
              <ClockIcon className="flex-shrink-0 w-3 h-3.5 mr-3.5 text-gray-900 ml-15 " />{" "}
              Invited{" "}
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <div className="flex items-center justify-center align-middle">
              <img
                className="w-12 h-12 m-3 rounded-full sm:hidden"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
              <h1 className="leading-7 text-gray-900 text-small sm:truncate sm:leading-9">
                Tim Mayer
              </h1>
            </div>
            <div className="flex items-center justify-between pl-2 pr-3 mr-3 text-xs leading-5 text-gray-900 bg-green-200 sm:truncate sm:leading-9 rounded-xl">
              <CheckIcon className="flex-shrink-0 w-3.5 h-3.5 mr-3 text-gray-900 ml-15 " />{" "}
              Virtual card{" "}
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <div className="flex items-center justify-center align-middle">
              <img
                className="w-12 h-12 m-3 rounded-full sm:hidden"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                alt=""
              />
              <h1 className="leading-7 text-gray-900 text-small sm:truncate sm:leading-9">
                Me
              </h1>
            </div>
            <div>
              <div className="flex items-center justify-between pl-2 pr-3 mr-3 text-xs leading-5 text-gray-900 bg-green-200 sm:truncate sm:leading-9 rounded-xl">
                <CheckIcon className="flex-shrink-0 w-3.5 h-3.5 mr-3 text-gray-900 ml-15 " />{" "}
                Virtual card{" "}
              </div>
              <div className="flex items-center justify-between pl-2 pr-3 mr-3 mt-1.5 text-xs leading-5 text-gray-900 bg-gray-200 sm:truncate sm:leading-9 rounded-xl">
                <CheckIcon className="flex-shrink-0 w-3.5 h-3.5 mr-3 text-gray-900 ml-15 " />{" "}
                Account owner{" "}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <h1 className="m-auto leading-7 text-gray-900 ">
              <div className="flex content-center justify-center h-12 align-middle">
                <p className="my-auto font-medium"> Add member </p>
              </div>
            </h1>
          </div>
        </div>

        <h2 className="max-w-6xl px-4 mx-auto mt-8 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
          Recent activity
        </h2>

        {/* Activity list (smallest breakpoint only) */}
        <div className="mt-2 shadow sm:hidden">
          <ul
            role="list"
            className="overflow-hidden divide-y divide-gray-200 shadow sm:hidden"
          >
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                <a
                  href={transaction.href}
                  className="block px-4 py-4 bg-white hover:bg-gray-50"
                >
                  <span className="flex items-center space-x-4">
                    <span className="flex flex-1 space-x-2 truncate">
                      <BanknotesIcon
                        className="flex-shrink-0 w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="flex flex-col text-sm text-gray-500 truncate">
                        <span className="truncate">{transaction.name}</span>
                        <span>
                          <span className="font-medium text-gray-900">
                            {transaction.amount}
                          </span>{" "}
                          {transaction.currency}
                        </span>
                        <time dateTime={transaction.datetime}>
                          {transaction.date}
                        </time>
                      </span>
                    </span>
                    <ChevronRightIcon
                      className="flex-shrink-0 w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </a>
                {transaction.id === 2 ? (
                  <div className="block px-4 py-4 hover:bg-gray-50 bg-gradient-to-r from-yellow-400 to-yellow-500">
                    <div>
                      <span className="flex items-center space-x-4">
                        <span className="flex flex-1 space-x-2 truncate">
                          <span className="font-medium text-gray-900">
                            {/* <Image
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Billa-Logo.svg/1200px-Billa-Logo.svg.png"
                              alt="billa-logo"
                              width="100"
                              height="50"
                            /> */}
                            <Image
                              src="https://assets-eu-01.kc-usercontent.com/cc0b17b0-a734-010a-8710-f644b7ee1f24/0d0819af-418f-4c12-b885-b8158ec49e2f/Web_Warengruppen_BP_600x300px_KW12.png?w=600&fm=webp&lossless=0&q=90&dpr=2"
                              alt="billa-logo"
                              width="150"
                              height="75"
                            />
                          </span>
                        </span>
                        {/* <ChevronRightIcon
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        /> */}
                        <button
                          type="button"
                          className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold text-white rounded bg-white-500 ring-1 ring-white"
                        >
                          Claim
                          <ShoppingBagIcon className="flex-shrink-0 w-5 h-5 ml-5 text-white-400 " />
                        </button>
                      </span>
                      {/* <button
                      type="button"
                      className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold text-white bg-green-500 rounded-md shadow-sm ring-1 ring-inset ring-green-500 hover:bg-green-600"
                    >
                      Claim your award{" "}
                      <ShoppingBagIcon className="flex-shrink-0 w-5 h-5 ml-5 text-white-400 " />
                    </button> */}
                    </div>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-20" />
      </div>
      <Tabbar />
    </>
  );
}
