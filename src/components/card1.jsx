import { Card } from "flowbite-react";

export default function Ncard()
{

    return(

        <>
        
        <div className="max-w-sm">
  <Card>
    <div className="flex justify-end px-4 pt-4">
      <Dropdown
        inline={true}
        label=""
      >
        <Dropdown.Item>
          <h5
            href="#"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Edit
          </h5>
        </Dropdown.Item>
        <Dropdown.Item>
          <h5
            href="#"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Export Data
          </h5>
        </Dropdown.Item>
        <Dropdown.Item>
          <h5
            href="#"
            className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Delete
          </h5>
        </Dropdown.Item>
      </Dropdown>
    </div>
    <div className="flex flex-col items-center pb-10">
      <img
        className="mb-3 h-24 w-24 rounded-full shadow-lg"
        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
        alt="Bonnie image"
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Bonnie Green
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Visual Designer
      </span>
      <div className="mt-4 flex space-x-3 lg:mt-6">
        <h5
          href="#"
          className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add friend
        </h5>
        <h5
          href="#"
          className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Message
        </h5>
      </div>
    </div>
  </Card>
</div></>
    )
}