import Nav from "../components/nav";
import Editor from "@monaco-editor/react";
import Link from "next/link";

export default function Create() {
  const handleEditorChange = (value, event) => {
    console.log("value is ", value);
  };

  return (
    <div className="flex flex-col p-5">
      <Nav />
      <div className="flex justify-center mt-12 md:mt-0">
        <div className="flex flex-col space-y-6 w-full max-w-[500px] md:max-w-[700px]">
          <p className="text-opink font-bold text-3xl md:hidden ">
            Create Snippet
          </p>
          <div className="hidden md:flex justify-center w-full mb-10">
            <div className="hidden md:flex rounded-3xl items-center font-bold w-full max-w-[800px] p-1 bg-owhite justify-between text-xl">
              <Link href="/mysnippets">
                <div className="rounded-3xl p-3 cursor-pointer">
                  <p>My Snippets</p>
                </div>
              </Link>

              <Link href="/browse">
                <div className="rounded-3xl p-3 cursor-pointer">
                  <p>Browse</p>
                </div>
              </Link>

              <div className="rounded-3xl p-3 bg-dark text-owhite cursor-pointer ">
                <p>Create</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block mt-6">
            <p className="text-opink font-bold text-3xl">Create Snippet</p>
          </div>

          <div className="flex justify-center mt-12 md:mt-0 ">
            <div className="flex flex-col space-y-6 w-full max-w-[500px] md:max-w-[700px]">
              <div className="bg-owhite w-full rounded-xl flex flex-col  space-y-2 md:space-y-3 items-start p-4">
                <div className="flex flex-col space-y-2 w-full">
                  <p className="text-xl font-bold md:text-2xl">Title</p>
                  <input
                    className="p-2 bg-dark w-full rounded-lg text-owhite md:text-lg"
                    placeholder="Input snippet title"
                  />
                </div>

                <div className="flex flex-col space-y-2 w-full md:w-1/2">
                  <p className="text-xl text-xl font-bold md:text-2xl">
                    Language
                  </p>
                  <select className="p-2 bg-dark w-full rounded-lg text-owhite md:text-lg">
                    <option>HTML</option>
                    <option>CSS</option>
                    <option>Javascript</option>
                    <option>React</option>
                  </select>
                </div>

                <div className="w-full flex flex-col space-y-2">
                  <p className="text-xl text-xl font-bold md:text-2xl">
                    Snippet
                  </p>
                  <div className="rounded-lg md:text-lg">
                    <Editor
                      className=""
                      height="300px"
                      defaultLanguage="javascript"
                      defaultValue=""
                      onChange={handleEditorChange}
                      theme="vs-dark"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col space-y-2">
                  <p className="text-xl text-xl font-bold md:text-2xl">Tags</p>
                  <input
                    className="p-2 bg-dark w-full rounded-lg text-owhite md:text-lg"
                    placeholder="Input snippet title"
                  />
                  <div className="flex space-x-2 ">
                    <div className="rounded-md bg-dark text-owhite p-1 md:p-2">
                      <p>HTML</p>
                    </div>
                    <div className="rounded-md bg-dark text-owhite p-1 md:p-2">
                      <p>CSS</p>
                    </div>
                    <div className="rounded-md bg-dark text-owhite p-1 md:p-2">
                      <p>Javascript</p>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-end">
                  <div className="rounded-md bg-dark text-owhite p-2 w-fit ">
                    <p className="text-xl md:text-2xl cursor-pointer">Save</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
