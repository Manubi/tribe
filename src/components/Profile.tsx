import { EnvelopeIcon } from "@heroicons/react/24/outline";

export function Profile() {
  return (
    <div className="flex-1 min-w-0 px-6 py-6 mx-3 bg-white border border-gray-200 rounded-md">
      <div className="flex items-center">
        <img
          className="hidden w-16 h-16 rounded-full sm:block"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
          alt=""
        />
        <div>
          <div className="flex items-center">
            <img
              className="w-16 h-16 rounded-full sm:hidden"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
              alt=""
            />
            <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
              Good morning, Jennifer Stone
            </h1>
          </div>
          <dl className="flex flex-col mt-6 sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
            <dt className="sr-only">University</dt>
            <dd className="flex items-center text-sm font-medium text-gray-500 capitalize sm:mr-6">
              <EnvelopeIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              2 new messages
            </dd>
            {/* <dt className="sr-only">Account status</dt>
            <dd className="flex items-center mt-3 text-sm font-medium text-gray-500 capitalize sm:mr-6 sm:mt-0">
              <AiFillEuroCircle
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                aria-hidden="true"
              />
              <span>12.452,00 €</span>
            </dd> */}
          </dl>
        </div>
      </div>
    </div>
  );
}
