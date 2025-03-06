// import { useEffect } from "react";
import { mergeSort } from "../components/util/merge-sort.utils.ts";
import { LinkedList } from "../components/util/linked-list.util.ts";

const UNSORTED_ARRAY = [42, 87, 15, 63, 29, 94, 8, 76, 51, 33];

export const ScratchPad = () => {
  mergeSort(UNSORTED_ARRAY);

  // Usage Example
  const list = new LinkedList<number>();

  const testArray = [42, 87, 15, 63, 29, 94, 8, 76, 51, 33];

  testArray.map((item) => {
    list.append(item);
  });

  const res = testArray.reduce((acc, item, index) => {
    return String(item) + String(index) + acc;
  }, "");

  console.log("Result:", res);

  return (
    <main className="text-2xl flex flex-col justify-center items-center w-screen h-screen p-8 text-center">
      Hi, Svetlana! You're a good looking lass! Let's get some dinner one of
      these nights? (they were pretty careful when exporting me, thanks for
      asking)
      <iframe
        src="https://giphy.com/embed/jYmGmDK3rKdkk"
        width="480"
        height="442"
        frameBorder="0"
        className="giphy-embed mt-6"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/throws-boxes-airport-jYmGmDK3rKdkk">
          via GIPHY
        </a>
      </p>
    </main>
  );
};
