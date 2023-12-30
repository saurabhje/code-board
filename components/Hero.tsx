"use client"
import React, { useState } from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const code1 = `#include<stdc++.h/bits>
  using namespace std;
  int main(){
      string str = "Hello World!";
      cout<<str<<endl;
      return 0;
  }`;

  const code2 = `function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
  return fibonacci(n - 1) + fibonacci(n - 2);
  }

  const result = fibonacci(10);
  console.log("Fibonacci(10):", result);
  
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
              "Fibonacci number using in JavaScript",
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
      <div className="min-h-[220px] bg-slate-900 animate-in">
        <p className="py-1 px-2 bg-zinc-900">{random}</p>
        {random == "javascript" && (
          <TypeAnimation
            className="min-h-[120px] px-2 py-1 whitespace-pre block font-mono"
            speed={99}
            sequence={[`${code2}`, 6000]}
            cursor={false}
          />
        )}
        {random == "cpp" && (
          <TypeAnimation
            className="px-2 py-1 whitespace-pre block font-mono"
            speed={99}
            sequence={[`${code1}`, 6000]}
            cursor={false}
          />
        )}
      </div>
    </div>
  );
}