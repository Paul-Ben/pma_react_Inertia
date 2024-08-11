import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, projects }) {
  return (
    <Authenticated
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Projects" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              {/* <pre>{JSON.stringify(projects, undefined, 2)}</pre> */}

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Due Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-nowrap">
                        Created By
                      </th>
                      <th scope="col" className="px-6 py-3 text-nowrap">
                        Updated By
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.data.map((project) => (
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  text-wrap"
                        >
                          {project.name}
                        </th>
                        <td className="px-6 py-4">
                          <img src="{project.image_path}" alt="project image" />
                        </td>
                        <td className="px-6 py-4">{project.status}</td>
                        <td className="px-6 py-4 text-nowrap">{project.due_date}</td>
                        <td className="px-6 py-4">{project.created_by}</td>
                        <td className="px-6 py-4">{project.updated_by}</td>
                        <td className="px-6 py-4 text-right text-nowrap">
                          <Link
                            href="{route('project.edit', project.id)}"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit{" "} 
                          </Link>
                          <Link
                            href="{route('project.delete', project.id)}"
                            className="font-medium text-red-600 dark:text-red-500 hover:underline"
                          >
                            | Delete
                          </Link>
                         
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination links={projects.meta.links} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
