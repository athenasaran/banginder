import React, { useState, useEffect } from "react";
import SwipeButtons from "../../components/SwipeButtons/SwipeButtons";
import Header from "../../components/Header/Header";
import TinderCard from "react-tinder-card";
import firebase from "firebase/app";
import "./TinderCard.css";

function TinderCards() {
  const [people, setPeople] = useState([
  ]);
  const userUid = localStorage.getItem("user_id");
  
  const handleCardLeft = (direction) => {
    const enemyUid = people[0].uid;
    if (direction == "left") {
      console.log(people[0].name);
      firebase
        .firestore()
        .collection("Hate")
        .doc(userUid)
        .collection("HateList")
        .doc(enemyUid)
        .set({
          message: [
            {
              text: "",
              date: "",
            },
          ],
        });
    }
    setPeople((people) => [...people.slice(1)]);
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const firestore = firebase.firestore();
    setLoading(true);
    firestore
      .collection("registerInfo")
      .get()
      .then((snap) => {
        const hateList = snap.docs
          .map((e) => e.id)
          .filter((id) => id !== userUid);
        firestore
          .collection("Hate")
          .doc(userUid)
          .collection("HateList")
          .get()
          .then((snap) => {
            const ids = snap.docs.map((e) => e.id);
            hateList
              .filter((s) => !ids.includes(s))
              .forEach((uid) =>
                firestore
                  .collection("registerInfo")
                  .doc(uid)
                  .get()
                  .then((snap) => {
                    const data = snap.data();
                    setPeople((people) => [
                      {
                        uid: data.uid,
                        url: data.url,
                        bio: data.bio,
                        dislikes: data.dislikes,
                        likes: data.likes,
                        name: data.name + " " + data.surname,
                      },
                      ...people,
                    ]);
                  })
              )
              setLoading(false);
          });
      })
      .catch(() => setLoading(false));
      return () => {
        setPeople([])
      }
  }, []);
  //setPeople([...people, 'athena', 'josy', 'vito'])
  if (loading) {
    return <div>Carregando...</div>;
  } else
    return (
      <React.Fragment>
        <Header />
        <div>
          <div className="tinderContainer">
            {people
              .slice(0)
              .reverse()
              .map((person) => (
                <TinderCard
                  onCardLeftScreen={handleCardLeft}
                  className="swipe"
                  key={person.uid}
                  preventSwipe={["up", "down"]}
                >
                  <div
                    className="card"
                    style={{ backgroundImage: `url(${person.url})` }}
                  >
                    <h3>{person.name}</h3>
                  </div>
                </TinderCard>
              ))}
          </div>
        </div>
        <SwipeButtons />
      </React.Fragment>
    );
}

export default TinderCards;
