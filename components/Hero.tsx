"use client";
import Link from "next/link";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  let code1 = `#include<stdc++.h/bits>
  using namespace std;
  int main(){
      string str = "Hello World!";
      cout<<str<<endl;
      return 0;
  }`;
  let code2 = `
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(\`HTTP error! Status: \${response.status}\`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
`;


  const [code, setCode] = useState(code1);
  const [random, setRandom] = useState('initial')


  return (
    <div>
      <div className="w-full flex flex-col mb-10 lg:justify-between items-start  lg:flex-row">
        <div className="w-full lg:w-3/4 border rounded bg-inherit py-1 px-2">
          <TypeAnimation
            sequence={[
              "How to print Hello World! in C++",
              () => {
                setRandom('after first');
              },
              6000,
              "How to fetch data in javascript",
              6000,
              () => {
                setRandom('After Second');
              },
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
        {random}
      <div className="h-fit bg-zinc-700 animate-in">
        <p className="py-1 px-2 bg-zinc-900">cpp</p>
        <TypeAnimation 
        className="min-h-[120px] px-2 py-1 whitespace-pre block"
        sequence={[`${code}`,5000]}
        />
      </div>
    </div>
  );
}
