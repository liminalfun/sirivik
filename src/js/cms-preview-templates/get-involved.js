/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from "react";
import Image from "./components/Image";
import ImageHero from "./components/ImageHero";

export default class GetInvolvedPreview extends React.Component {

  render() {
    const {entry, widgetsFor, widgetFor} = this.props;

    return <div>
      <div className="hero bg-blue">
        <ImageHero image={entry.getIn(["data", "hero", "img", "image" ])} alt={entry.getIn(["data", "hero", "img", "alt" ])} credit={entry.getIn(["data", "hero", "img", "credit" ])}/>
        <div className="hero-text">
          <h1 id="our-story">{entry.getIn(["data", "hero", "title"])}</h1>
          <p>{entry.getIn(["data", "hero", "subtitle"])}</p>
          <a href="/contact" className="btn bg-rose">{entry.getIn(["data", "hero", "button"])}</a>
        </div>
      </div>

      <div className="get-involved">
        <div className="card-grid border">
          {(entry.getIn(["data", "getInvolvedList"]) || []).map((card, index) => <div className="card" key={index}>
            <img src={card.getIn(["img", "image"])}/>
            <div className="card-text">
              <h4>{card.get("title")}</h4>
              <p>{card.get("description")}</p>
              <a className="arrow-link" href="/contact">{card.get("button")}</a>
            </div>
          </div>)}
        </div>
      </div>

      <div className="bg-purple opportunities">
        <div className="section-header">
          <h2>{entry.getIn(["data", "opportunities", "title"])}</h2>
          <p>{entry.getIn(["data", "opportunities", "subtitle"])}</p>
          <section className="accordion-wrapper">
            <button className="accordion">
              <h5 className="center">This is an example. You can update Job opportunities in the "Job Opportunities" collection.</h5>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="rgba(255,255,255,1)"/></svg>
            </button>
            <div className="panel active">
              <div>Example description</div>
              <a href="" title="Example link" target="_blank" rel="noopener">Example Link</a>
            </div>
          </section>
        </div>
      </div>

      <div className="img-grid involved">
        <Image image={entry.getIn(["data", "images", "img_1", "image" ])} alt={entry.getIn(["data", "images", "img_1", "alt" ])} credit={entry.getIn(["data", "images", "img_1", "credit" ])} />
        <Image image={entry.getIn(["data", "images", "img_2", "image" ])} alt={entry.getIn(["data", "images", "img_2", "alt" ])} credit={entry.getIn(["data", "images", "img_2", "credit" ])} />
        <Image image={entry.getIn(["data", "images", "img_3", "image" ])} alt={entry.getIn(["data", "images", "img_3", "alt" ])} credit={entry.getIn(["data", "images", "img_3", "credit" ])} />
        <Image image={entry.getIn(["data", "images", "img_4", "image" ])} alt={entry.getIn(["data", "images", "img_4", "alt" ])} credit={entry.getIn(["data", "images", "img_4", "credit" ])} />
        <Image image={entry.getIn(["data", "images", "img_5", "image" ])} alt={entry.getIn(["data", "images", "img_5", "alt" ])} credit={entry.getIn(["data", "images", "img_5", "credit" ])} />
      </div>

    </div>;
  }
}
