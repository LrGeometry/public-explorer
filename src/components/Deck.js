import React, { useState } from "react";
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
  const [info, setInfo] = useState({});
  React.useEffect(() => {
    var paramFromURL = 364;
    const rootRef = firebase.database().ref();
    rootRef
      .child("assets")
      .once("value")
      .then(snapshot => {
        setLoading(false);
        let storedValue = [];
        snapshot.forEach(asset => {
          const assset = asset.toJSON();

          storedValue.push(asset.toJSON());

          if (asset.toJSON().hercId === paramFromURL) {
            setInfo(asset.toJSON());
            // check if asset has any transaction history
            if (asset.toJSON().transactions) {
              // return an iterable list of transactions
            } else {
              // return ” no transaction history”
            }
            // return asset
          } else {
            // return “no asset matched given hercId”
          }
        });

        setValue(storedValue);
      });
  }, []);

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
  } else {
    const bb = value.splice(10);
    const transact = [];
    if (bb && bb[6] && bb[6].transactions !== undefined) {
      let v = Object.keys(bb && bb[6] && bb[6].transactions).forEach(key => {
        let value = bb && bb[6] && bb[6].transactions[key];
        value.timestamp = key;
        transact.push(value);
        return value;
      });
    }

    return props.map(({ x, y, rot, scale }, i) => (
      <Card
        i={i}
        x={x}
        y={y}
        rot={rot}
        scale={scale}
        trans={trans}
        transactions={transact}
        data={data}
        bind={bind}
        Name={info && info.Name}
        chainId={info && info.hashes && info.hashes.chainId}
        ipfsHash={info && info.hashes && info.hashes.ipfsHash}
        newData={bb}
      />
    ));
  }
}

export default Deck;
