"use client"
import React, { useState } from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const code1 = 
` #include<stdc++.h/bits>
  using namespace std;
  int main(){
    string str = "Hello World!";
    cout<<str<<endl;
    return 0;
  }`;

  const code2 = `
  # Writing to a file
with open("exmp.txt", "w") as file:
    file.write("Hello, File!")

# Reading from a file
with open("exmp.txt", "r") as file:
    content = file.read()
    print(content)
`;

  const [random, setRandom] = useState(">..");

  return (
    <div>
      <div className="w-full flex flex-col mb-10 lg:justify-between items-start  lg:flex-row">
        <div className="w-full lg:w-3/4 border rounded bg-inherit py-1 px-2">
          <TypeAnimation
            sequence={[
              "How to print Hello World! in C++", 
              () => {
                setRandom("cpp");
              },
              6000,
              "File handling in Python",
              () => {
                setRandom("javascript");
              },
              6000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1.1em", display: "inline-block" }}
          />
        </div>
        <Link
          className="mt-2 lg:mt-0 lg:ml-6 py-1 lg:py-2 px-2 rounded-md bg-btn-background md:hover:bg-btn-background-hover"
          href="/codes"
        >
          Start searching
        </Link>
      </div>
      <div className="min-h-[200px] bg-slate-900 animate-in max-w-96">
        <p className="py-1 px-2 bg-zinc-900">{random}</p>
        {random == "javascript" && (
          <TypeAnimation
            className="px-2 py-1 whitespace-pre block font-mono text-[0.8em] md:text-[1em]"
            speed={99}
            sequence={[`${code2}`, 6000]}
            cursor={false}
          />
        )}
        {random == "cpp" && (
          <TypeAnimation
            className="px-2 py-1 whitespace-pre block font-mono text-[0.8em] md:text-[1em]"
            speed={99}
            sequence={[`${code1}`, 6000]}
            cursor={false}
          />
        )}
      </div>
    </div>
  );
}
