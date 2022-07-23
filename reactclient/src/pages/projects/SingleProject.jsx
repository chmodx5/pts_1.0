import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/styled/Card";
import axios from "axios";
import TasksList from "../../components/tasks/TasksList";
import AddTask from "../../components/tasks/AddTask";
import SelectedProjectDetails from "../../components/tasks/SelectedProjectDetails";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SingleProject() {
  let [categories] = useState({
    "Create Tasks": [

    
    ],
    Tasks: [

    ],
  });
  const [project, setProject] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/projects/${id}`)
      .then((res) => {
        console.log(res.data);
        setProject(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-full">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-xl">
        <h1 className="font-bold text-center text-2xl mb-5 capitalize">
          {project.Name}
        </h1>
        <Card className=" divide-gray-200 ">
          <div className="px-5 py-7">
            {/* <h1>{project.Name} - Tasks</h1> */}
            <SelectedProjectDetails project={project} />
          </div>
          <div className="px-6 py-4 ">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl  p-1">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-bold leading-5",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2",
                        selected
                          ? "bg-primary  text-white shadow"
                          : " hover:bg-white/[0.12] hover:text-primary"
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <AddTask />
                </Tab.Panel>

                <Tab.Panel
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <TasksList />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </Card>
      </div>
    </div>
  );
}
