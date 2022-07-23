import { useState, useEffect } from "react";
import axios from "axios";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks")
      .then((res) => {
        setTasks(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left  ">
          <thead className="text-xs  uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Task
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Percent Completed
              </th>
              <th scope="col" className="py-3 px-6">
                Project
              </th>
              <th scope="col" className="py-3 px-6">
                Team
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks ? (
              tasks.map((task) => (
                <tr className="bg-white border-b " key={task.TaskId}>
                  <th
                    scope="row"
                    className="py-4 px-6 font-semibold capitalize whitespace-nowrap"
                  >
                    {task.Name}
                  </th>

                  <td className="py-4 px-6"> {task.status.Name}</td>
                  <td className="py-4 px-6">
                    {task.PercentCompleted ? (
                      <span>{task.PercentCompleted}%</span>
                    ) : (
                      <span>N/A</span>
                    )}
                  </td>
                  <td className="py-4 px-6">{task.project.Name}</td>
                  <td className="py-4 px-6">{task.team.Name}</td>
                </tr>
              ))
            ) : (
              <div className="flex justify-center">
                <h3 className="font-bold text-lg">No Tasks</h3>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TasksList;
