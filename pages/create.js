import Nav from "../components/nav";
import Editor from "@monaco-editor/react";
import Link from "next/link";
import { useState } from "react";
import cancel from "../images/cancel.svg";
import Image from "next/image";

export default function Create() {
  const [tags, setTags] = useState([]);
  const [value, setValue] = useState("");

  const handleEditorChange = (value, event) => {
    console.log("value is ", value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTags((prev) => [...prev, value]);
      setValue("");
    }
  };

  const removeTag = (value) => {
    const newTag = tags.filter((target) => target !== value);
    setTags(newTag);
  };

  return (
    <div className="flex flex-col p-5">
      <Nav />
      <div className="flex justify-center mt-12 md:mt-0">
        <div className="flex flex-col space-y-6 w-full max-w-[500px] md:max-w-[700px]">
          <p className="text-opink font-bold text-3xl md:hidden ">
            Create Snippet
          </p>
          <div className="w-full flex flex-col items-center md:space-y-6">
            <div className="hidden md:flex rounded-xl items-center font-bold w-full max-w-[800px] py-4 px-6 bg-owhite justify-between text-xl ">
              <Link href="/mysnippets">
                <div className="rounded-lg p-3 cursor-pointer hover:bg-dark duration-300 ease-in-out hover:text-owhite">
                  <p>My Snippets</p>
                </div>
              </Link>

              <Link href="/browse">
              <div className="rounded-lg p-3 cursor-pointer hover:bg-dark duration-300 ease-in-out hover:text-owhite ">
                <p>Browse</p>
              </div>
              </Link>
                <div className="rounded-lg p-3 bg-dark text-owhite cursor-pointer">
                  <p>Create</p>
                </div>
            </div>
            <div className="w-full max-w-[500px] flex justify-center">
              <input
                className="p-3 rounded-lg w-full px-4"
                placeholder="Search snippets..."
              />
            </div>
            <div className="hidden md:block w-full">
              <p className="self-left text-opink font-bold text-3xl ">
                Browse Snippets
              </p>
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
                  <p className="text-xl font-bold md:text-2xl">
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
                  <p className="text-xl font-bold md:text-2xl">
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
                  <p className="text-xl font-bold md:text-2xl">Tags</p>
                  {tags.length < 3 && (
                    <input
                      className="p-2 bg-dark w-full rounded-lg text-owhite md:text-lg"
                      placeholder="Input snippet title"
                      onKeyDown={handleKeyDown}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  )}

                  <div className="flex space-x-2 ">
                    {tags.map((value) => (
                      <div className="relative rounded-md bg-dark text-owhite p-1 md:p-2">
                        <div
                          className="absolute -top-3 -right-1 w-3"
                          onClick={(e) => removeTag(value)}
                        >
                          <Image src={cancel} />
                        </div>

                        <p>{value}</p>
                      </div>
                    ))}
                  </div>
                </div>


                <div className="w-full flex justify-end mb-10">

                  <div className="rounded-md bg-dark text-owhite p-2 w-fit cursor-pointer">

                    <p className="text-xl md:text-2xl">Save</p>
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
