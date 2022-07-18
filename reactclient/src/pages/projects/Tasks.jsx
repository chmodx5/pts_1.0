import { useState } from "react";
import Button from "../../components/styled/Button";
import Card from "../../components/styled/Card";
import TextInput from "../../components/styled/TextInput";
import SelectInput from "../../components/styled/SelectInput";
import InputLabel from "../../components/styled/InputLabel";

const Tasks = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [task, SetTask] = useState({
    name: "",
    expectedStart: "",
    expectedEnd: "",
    customer: "",
  });

  const addNewTask = () => {
    console.log("add new task");
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">New Task</h1>
          <Card className=" divide-gray-200">
            <div className="px-5 py-7">
              {/* dropdown */}
              <InputLabel>Select Project{selectedProject}</InputLabel>
              <SelectInput
                type="select"
                onChange={(e) => {
                  setSelectedProject(e.target.value);
                }}
              >
                <option value="">select project</option>
                <option value="1">Huan</option>
                <option value="2">Pablo</option>
              </SelectInput>
            </div>
          </Card>
          <br />

          <Card className=" divide-gray-200">
            {task.expectedStart} ooioioioo
            <form onSubmit={addNewTask}>
              <div className="px-5 py-7">
                <InputLabel>Name</InputLabel>
                <TextInput
                  onChange={(e) => {
                    SetTask({ ...task, name: e.target.value });
                  }}
                  type="text"
                />
                <InputLabel>Expected Start</InputLabel>
                <TextInput
                  onChange={(e) => {
                    SetTask({ ...task, expectedStart: e.target.value });
                  }}
                  type="date"
                />
                <InputLabel>Expected End</InputLabel>
                <TextInput
                  onChange={(e) => {
                    SetTask({ ...task, expectedEnd: e.target.value });
                  }}
                  type="date"
                />

                {/* dropdown */}
                <InputLabel>Customer</InputLabel>
                <SelectInput type="select">
                  <option value="1">Huan</option>
                  <option value="1">Pablo</option>
                </SelectInput>

                <Button type="submit">
                  <span className="inline-block mr-2">Create</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
