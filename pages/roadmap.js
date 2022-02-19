import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import Header from "../components/roadmap/Header";
import Card from "../components/roadmap/Card";
import CardRem from "../components/roadmap/CardRem";
import { Margin } from "../styles/widgets";
import * as R from "../styles/RoadmapStyles";
import { toast } from "react-toastify";
import { parseCookies } from "../helpers";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TabNav from "../components/roadmap/TabNav";

export default function Roadmap({ fdbks, token }) {
  const [feedbacks, setFeedbacks] = useState(fdbks);
  const [winReady, setwinReady] = useState(false);
  const [tab, setTab] = useState("Planned");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setwinReady(true);
  }, []);

  const updateStatus = async (feedback, newStatus) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const data = {
      status: newStatus,
    };

    await axios
      .put(
        `http://localhost:1337/api/feedbacks/${feedback.id}`,
        { data },
        config
      )
      .then((res) => {})
      .catch((err) => {});
  };

  const onDragEnd = (result) => {
    const fds = feedbacks;
    if (!user) {
      toast.error("You have to be logged in");
      return;
    }
    if (!result.destination) {
    } else if (result.destination.index > feedbacks.length) {
      let feedback = fds[result.source.index];
      updateStatus(feedback, result.destination.droppableId);
      feedback.attributes.status = result.destination.droppableId;
      const filtered = fds.filter((val) => val.id !== feedback.id);
      setFeedbacks([...filtered, feedback]);
    } else {
      let feedback = fds[result.source.index];
      updateStatus(feedback, result.destination.droppableId);
      feedback.attributes.status = result.destination.droppableId;
      const filtered = fds.filter((val) => val.id !== feedback.id);
      filtered.splice(result.destination.index, 0, feedback);
      setFeedbacks(filtered);
    }
  };

  return (
    <Layout title="Roadmap">
      <Header />
      <TabNav tab={tab} setTab={setTab} />
      {winReady && (
        <R.MainLayout>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="Planned">
              {(provided) => (
                <R.Section show={tab === "Planned"}>
                  <R.Text1>
                    Planned (
                    {
                      feedbacks.filter(
                        (val) => val.attributes.status === "Planned"
                      ).length
                    }
                    )
                  </R.Text1>
                  <R.Text2>Ideas prioritized for research</R.Text2>
                  <Margin m={30} />
                  <R.CardsCover
                    className="cards"
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                    {feedbacks
                      .filter((val) => val.attributes.status === "Planned")
                      .map((feedback) => (
                        <Card
                          key={feedback.id}
                          feedback={feedback}
                          token={token}
                          index={feedbacks.findIndex(
                            (val) => val.id === feedback.id
                          )}
                        />
                      ))}

                    <CardRem min={500} max={700} />
                    {provided.placeholder}
                  </R.CardsCover>
                </R.Section>
              )}
            </Droppable>

            <Droppable droppableId="In Progress">
              {(provided) => (
                <R.Section show={tab === "In Progress"}>
                  <R.Text1>
                    In-Progress (
                    {
                      feedbacks.filter(
                        (val) => val.attributes.status === "In Progress"
                      ).length
                    }
                    )
                  </R.Text1>
                  <R.Text2>Currently being developed</R.Text2>
                  <Margin m={30} />
                  <R.CardsCover
                    className="cards"
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                    {feedbacks
                      .filter((val) => val.attributes.status === "In Progress")
                      .map((feedback) => (
                        <Card
                          key={feedback.id}
                          feedback={feedback}
                          token={token}
                          index={feedbacks.findIndex(
                            (val) => val.id === feedback.id
                          )}
                        />
                      ))}
                    <CardRem min={1000} max={2000} />
                    {provided.placeholder}
                  </R.CardsCover>
                </R.Section>
              )}
            </Droppable>

            <Droppable droppableId="Live">
              {(provided) => (
                <R.Section show={tab === "Live"}>
                  <R.Text1>
                    Live (
                    {
                      feedbacks.filter(
                        (val) => val.attributes.status === "Live"
                      ).length
                    }
                    )
                  </R.Text1>
                  <R.Text2>Released features</R.Text2>
                  <Margin m={30} />

                  <R.CardsCover
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                    {feedbacks
                      .filter((val) => val.attributes.status === "Live")
                      .map((feedback) => (
                        <Card
                          key={feedback.id}
                          feedback={feedback}
                          token={token}
                          index={feedbacks.findIndex(
                            (val) => val.id === feedback.id
                          )}
                        />
                      ))}

                    <CardRem min={3000} max={8000} />
                    {provided.placeholder}
                  </R.CardsCover>
                </R.Section>
              )}
            </Droppable>
          </DragDropContext>
        </R.MainLayout>
      )}
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const res = await axios.get(
    "http://localhost:1337/api/feedbacks/?populate=*&filters[roadmap][$eq]=true"
  );

  const { token } = parseCookies(req);

  return {
    props: {
      fdbks: res.data.data,
      token: token ? token : null,
    },
  };
}
