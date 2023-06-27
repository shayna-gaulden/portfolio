import React from "react";
import Nav from "../../components/nav";
import Title from "../../components/title";
import Footer from "../../components/footer";
import Report from "../../assets/images/emo-dist/GAULDEN_SHAYNA_CS274_Report.pdf";

const EmoDist = () => {
  return (
    <div>
      <Nav />
      <div className="space" />
      <Title
        title={
          "Classifying Emotions on Twitter using Emotion Distribution Vectors"
        }
        subtitle={
          "Shayna Gaulden | May 2023 | Python Natural Language Processing and Classification"
        }
      />
      <div className="column">
        {/* <a
          href="https://github.com/shayna-gaulden/pawsitive"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          Project Code on Github.
        </a> */}

        <a
          href={Report}
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          Download Full PDF Report.
        </a>
      </div>

      <div className="proj-detail-box">
        <header className="mid-title">Abstract</header>
        This project is an empirical study of emotion classification using
        Bidirectional Encoder Representations from Transformers (BERT). There
        are two main focuses of this study. The first is exploring existing
        preprocessing solutions to determine their impact on classification
        performance. Choices made during preprocessing have a direct and large
        impact on the downstream classification task. The second focus is to
        consider how the class memberships to each instance in a data set are
        represented. This project will take a data set with single-label emotion
        classes and transform the single-label binary membership vectors into
        continuous valued emotion distribution vectors. The findings of this
        study will show that when using a transformer model the data should not
        be over-processed with steps such as stop word removal. The conversion
        from single-label to a distribution vector does not improve overall
        classification quality, although it has special interpretations
        regarding a richer representation of the data, and can be used to
        increase the classification accuracy for specific emotion classes.
      </div>

      <Footer />
    </div>
  );
};

export default EmoDist;
