import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import data from "../storage/insights.json";

const InsightsPage = () => {
  const [posts, setPosts] = useState([]);
  const { insights, topics } = data;

  const handleClick = (value) => {
    if (value === "all") return setPosts(insights);

    const filteredPosts = insights.filter((post) =>
      post.tags.map((tag) => tag.toLowerCase()).includes(value.toLowerCase())
    );

    setPosts(filteredPosts);
  };

  useEffect(() => {
    setPosts(insights);
  }, [insights]);

  return (
    <Layout>
      <section className="section__header insights__ideas">
        <div className="container">
          <div className="insights__header">
            <h1 className="title__1">Insights & Ideas</h1>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  className="btn btn__sm rounded-full"
                  onClick={() => handleClick(topic)}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-16 insights__wrapper">
            {posts.length ? (
              posts.map((insight) => (
                <div
                  key={insight.id}
                  className="col-span-12 md:col-span-6 lg:col-span-4 insights__item"
                >
                  <div className="insight__item__head">
                    <img
                      src={insight.img}
                      alt={insight.title}
                      width="378"
                      height="240"
                    />
                    <div className="insight__button__group">
                      {insight.tags.map((tag) => (
                        <Link
                          key={tag}
                          to="#"
                          role="button"
                          className="btn btn__sm btn__white rounded-full"
                          onClick={() => handleClick(tag)}
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="insights__body">
                    <h3 className="insights__title">
                      <Link to={insight.title}>{insight.title}</Link>
                    </h3>
                    <div className="insights__meta">
                      <span className="meta__data">{insight.author}</span>
                    </div>
                    <span className="insights__date">{insight.date}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-12">No Insights Found!</div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InsightsPage;

export const Head = () => <title>Insights</title>;
