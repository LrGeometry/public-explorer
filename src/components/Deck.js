import React, { useState, useEffect } from "react";
import { useSprings } from "react-spring/hooks";
import { useGesture } from "react-with-gesture";
import firebase from "../firebase.js";
import Spinner from "react-spinner-material";

import Card from "./Card";
import data from "../data";

import "../styles/Deck.css";

const to = i => ({
  x: 0,
  y: i * -10,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100
});
const from = i => ({ rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r /
    10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set());
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState([]);

  useEffect(() => {
    var paramFromURL = "364";
    const rootRef = firebase.database().ref();
    rootRef
      .child("assets")
      .once("value")
      .then(snapshot => {
        setLoading(false);

        let storedValue = [];
        snapshot.forEach(asset => {
          const assset = asset.toJSON();
          // console.log("skfkdkf", assset);
          storedValue.push(assset);
          // console.log("assets here", asset);
          if (asset.toJSON().hercId === paramFromURL) {
            // check if asset has any transaction history
            if (asset.toJSON().transactions) {
              // return an iterable list of transactions
            } else {
              // return " no transaction history"
            }
            // return asset
          } else {
            // return "no asset matched given hercId"
          }
        });
        setValue(storedValue);
      });
  });

  let [props, set] = useSprings(data.length, i => ({
    ...to(i),
    from: from(i)
  }));

  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity
    }) => {
      const trigger = velocity > 0.2;

      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) gone.add(index);

      set(i => {
        if (index !== i) return;
        const isGone = gone.has(index);

        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;

        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);

        const scale = down ? 1.1 : 1;

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
        };
      });

      if (!down && gone.size === data.length)
        setTimeout(() => gone.clear() || set(i => to(i)), 600);
    }
  );
  // console.log("yap", value);

  if (loading) {
    return (
      <div>
        <Spinner
          size={120}
          spinnerColor={"#333"}
          spinnerWidth={2}
          visible={true}
        />
      </div>
    );
  }

  // return value.splice(60).map((c, i) => (
  //   <Card
  //     i={i}
  //     x={props.map(({ x, y, rot, scale }, ii) => {
  //       return x[ii];
  //     })}
  //     y={props.map(({ x, y, rot, scale }, ii) => {
  //       return y[ii];
  //     })}
  //     // rot={rot}
  //     // scale={scale}
  //     trans={trans}
  //     data={data}
  //     bind={bind}
  //   />
  // ));

  return props.map(({ x, y, rot, scale }, i) => {
    console.log("value of i", i);
    console.log("value of x", x);
    console.log("value of y", y);
    return (
      <Card
        i={i}
        x={x}
        y={y}
        // rot={rot}
        // scale={scale}
        trans={trans}
        data={data}
        bind={bind}
      />
      // )
    );
  });
}

export default Deck;
