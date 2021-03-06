import React, { useState, useEffect } from "react";
import SwipeButtons from "../../components/SwipeButtons/SwipeButtons";
import Header from "../../components/Header/Header";
import TinderCard from "react-tinder-card";
import firebase from "firebase/app";
import "./TinderCard.css";
import { CircularProgress } from "@material-ui/core";

function TinderCards() {
  const [people, setPeople] = useState([]);
  const userUid = localStorage.getItem("user_id");

  function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const handleCardLeft = (direction) => {
    const enemyUid = people[0].uid;
    if (direction === "left") {
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
                    console.log(data);
                    setPeople((people) => [
                      {
                        ...data,
                      },
                      ...people,
                    ]);
                  })
              );
            setLoading(false);
          });
      })
      .catch(() => setLoading(false));
    return () => {
      setPeople([]);
    };
  }, []);
  //setPeople([...people, 'athena', 'josy', 'vito'])
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "90vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={80} />
      </div>
    );
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
                  <div className="card">
                    <div
                      className={"card-image"}
                      style={
                        person.gender === "Homem"
                          ? {
                              backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0), rgb(74 65 121 / 52%)),url(${person.url})`,
                            }
                          : {
                              backgroundImage: `linear-gradient(rgb(0 0 0 / 0%), rgb(102 65 121 / 52%)),url(${person.url})`,
                            }
                      }
                    >
                      <h3>{person.name}</h3>
                    </div>
                    <div className={"infos"}>
                      <h3>Bio:</h3> <p>{person.bio}</p>
                    </div>

                    <div className={"gostos"}>
                      <h3>Gostos:</h3>
                      <div className={"gostos-container"}>
                        {person.dislikes &&
                          person.dislikes.map((x) => {
                            return <p>{x}</p>;
                          })}
                      </div>
                    </div>

                    <div className={"odios"}>
                      <h3>Odios:</h3>
                      <div className={"odios-container"}>
                        {person.likes &&
                          person.likes.map((x) => {
                            return <p>{x}</p>;
                          })}
                      </div>
                    </div>
                  </div>
                </TinderCard>
              ))}
          </div>
        </div>
      </React.Fragment>
    );
}

export default TinderCards;
