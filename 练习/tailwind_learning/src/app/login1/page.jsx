import React from "react";

const page = () => {
  const [className, setClassName] = useState({ name: "wei" });
  const handleName = () => {
    setClassName({ name: "gao" });
  };

  return (
    <div className="m-0 pd-0 bg-red-950">
      <aside className="justify-around  text-center font-stretch-100%">
        <h1 className="bg-fuchsia-700 hover:bg-fuchsia-900 ">管理系统</h1>
        <span>{className}</span>
      </aside>
    </div>
  );
};

export default page;
