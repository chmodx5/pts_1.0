import { Fragment, useState, useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SelectedProjectDetails = () => {
  let navigate = useNavigate();
  const people = [
    { id: 1, name: "Wade Cooper" },
    { id: 2, name: "Arlene Mccoy" },
    { id: 3, name: "Devon Webb" },
    { id: 4, name: "Tom Cook" },
    { id: 5, name: "Tanya Fox" },
    { id: 6, name: "Hellen Schmidt" },
  ];
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [selectedProject, setSelectedProject] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/projects/${selectedProjectId}`)
      .then((res) => {
        console.log(res.data);
        setSelectedProject(res.data);
      })
      .catch((err) => console.log(err));
  }, [selectedProjectId]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        console.log(res.data);
        setProjects(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredProjects =
    query === ""
      ? projects
      : projects.filter((project) =>
          project.Name.toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <>
      {projects ? (
        <>
          <div className="flex items-center gap-4">
            <div>
              <span>Select project</span>
            </div>
            <div className="flex-1">
              <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                      displayValue={(project) => project.Name}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                  >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredProjects.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredProjects.map((project) => (
                          <Combobox.Option
                            key={project.ProjectId}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-teal-600 text-white"
                                  : "text-gray-900"
                              }`
                            }
                            //onclick navigate to project {id}
                            onClick={() => {
                              setSelectedProjectId(project.ProjectId);
                              navigate(`/projects/${project.ProjectId}`);
                            }}
                            value={project}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {project.Name}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-white" : "text-teal-600"
                                    }`}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </div>
          </div>
          <div className="my-7">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <span className=" font-semibold">Project name : </span>
                <br />
                <span>{selectedProject.Name}</span>
              </li>
              <li>
                <span className=" font-semibold">Expected start date : </span>
                <br />
                <span>juzi</span>
              </li>
              <li>
                <span className=" font-semibold">Expected end date : </span>
                <br />
                <span>jana</span>
              </li>
              <li>
                <span className=" font-semibold">Customer : </span>
                <br />
                <span>customer one</span>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>loading ...</>
      )}
    </>
  );
};

export default SelectedProjectDetails;
