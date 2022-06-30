import proj1 from './images/evo-bio-net/project-1-thumbnail.png'
import proj2 from './images/wine-quality/katie-azi-Qjf--1VqPSY-unsplash.jpeg'
import proj3 from './images/playstore/Play_Store_Logo.png'
// APP ANALYSIS PROJECT distribution and log and table images
import SizeDist from "./images/playstore/size dist.png"
import SizeDistlog from "./images/playstore/size dist log.png"
import SizeTable from "./images/playstore/size table.png"
import InstallDist from "./images/playstore/install dist.png"
import InstallDistLog from "./images/playstore/install dist log.png"
import InstallTable from "./images/playstore/install table.png"
import ReviewDist from "./images/playstore/review dist.png"
import ReviewDistLog from "./images/playstore/review dist log.png"
import ReviewTable from "./images/playstore/review table.png"
import RatingDist from "./images/playstore/rating dist.png"
import RatingDistLog from "./images/playstore/rating dist log.png"
import RatingTable from "./images/playstore/rating table.png"
import PriceDistLog from "./images/playstore/price dist log.png"
import PriceDist from "./images/playstore/price dist.png"
import PriceTable from "./images/playstore/price table.png"
import PriceBoxplot from "./images/playstore/price boxplot.png"
import InstallBoxplot from "./images/playstore/install boxplot.png"
import ReviewBoxplot from "./images/playstore/review boxplot.png"
import SizeBoxplot from "./images/playstore/size boxplot.png"
import RatingBoxplot from "./images/playstore/rating boxplot.png"
import NNCcontentrating from "./images/playstore/all numeric by content rating.png";
import NNCtype from "./images/playstore/all numeric by type.png";
import NNCcategory from "./images/playstore/all nunmeric by category.png";

export const ProjectData = [
    {
        img: proj3,
        title:'Google Play Store App Analysis',
        subtitle:'May 2022 | Data visualization project done in in Matlab on data webscraped form the Google Play Store.',
        link:'/app-analysis'
    },
    {
        img: proj2,
        title:'Wine Quality Prediction',
        subtitle:'Dec 2021 | Regression modeling in R to predict the wine quality of red wines.',
        link:'/wine-quality'
    },
    {
        img: proj1,
        title:'Evolution of Biological Networks',
        subtitle:'May 2021 | Python research project done in an effort to explore how populations graphs could be created from natural biological processes and how to model those processes.',
        link:'/evolution-biologicial-networks'
    }
]

export const Project1Data1 = [
    {
        title: "My Contributions",
        body: "In this project I wrote all the Python code to create the graphs. The idea was to have a birth and death process that would add and remove vertices to the graph. Once these process were created they would be iterated through up to 100 thousand times to see what type of graphs would arise from these simulated processes. I decided how the birth and death functions would work and made graphics and material to present our project."
    },
    {
        title: "Project Background",
        body: "Graphs — with vertices representing individuals and edges the relations between them — have become prominent in mathematical biology. They’re seen in epidemiology, evolution of social behaviors, enzyme interactions and much more. Typical social networks in biology are considered unrealistic because they are chosen for mathematical convenience and not from biological processes. Our goal was to create a graph that arises as a result of biological processes."
    }
]

export const Project1Data2 = [
    {
        title: "The Model",
        body: "Imagine a field of dandelions. They are connected through a system of roots and share or compete for the resources with the organisms closest to each other. Over time the dandelions seeds spread at the same time some are dying off. This field is what was in mind while choosing the following processes to create realistic graphs."
    },
    {
        title: "Initial Setup",
        body: "A chosen number of N points are uniformly randomly dispersed within a fixed x and y range. Each point has a fixed position on a cartesian plane. All points on the graph within a fixed distance are connected. This means the program goes through each point one at a time and calculates the distance between that point and all other points on the graph to see if the distance is at or below the chosen fixed distance to connect points. This chosen fixed distance is referred to as the connection radius."
    },
    {
        title: "Dispersal Process",
        body: "One point from the graph was chosen using a random weighted process to be the source node from which child nodes would be dispersed. The weights assigned to each node were referred to as it's fecundity. To assign fecundity the assumption was made that a higher degree node has a less likely chance at dispersal since it is in a high density area. So each node was assigned a fecundity weight with the fecundity formula below where F is the fecundity of the node and D is the degree. Once the source node is selected a uniform random number between 1 and 10 child nodes will be dispersed uniformly random within a fixed radial distance. This fixed radial distance is referred to as the dispersal radius."
    }
]

export const Project3Data1 = [
    {
        title: "Introduction",
        body: "The Google Play Store is one of the most popular Android app stores. The data set used in this report consists of some of the apps that are found in this store. The data set is officially called Google Play Store Apps and can be found on Kaggle. It was originally webscraped by a user Lavanya Gupta; a Computer Science graduate at Carnegie Mellon University. It was posted for the use of exploratory data analysis or any other desired tasks. The file which was used in this report is a csv file where each row is an app in the app store and each column is an attribute of the application. All code to create graphs was written in Matlab and can be found with the Github link above."
    },
    {
        title: "Data Summary",
        body: "13 vairables, 10841 rows (applications)"
    },
    {
        title: "Cleaning the Data",
        body: "STEP 1: Remove missing data. 1,474 applications missing ratings and 1 missing a content rating."
    },
]

export const DistData = [
    {
        title: "Price",
        dist: PriceDist,
        log: PriceDistLog,
        table: PriceTable,
        text: "All apps that are free have a price of 0, since 0 is outside the domain of a logarithmic function the $1 was added to each price before taking a log transformation. Even with a log transformation the price data is still very skewed. The price data is so skewed that the median and mode of the data is 0.",
    },
    {
        title: "Reviews",
        dist: ReviewDist,
        log: ReviewDistLog,
        table: ReviewTable,
        text: "Another variable with very skewed data, the maximum is over 44 million but the mode is only 2 and the median is just over 2 thousand. A log transformation seems to smooth out this variable very well."
    },
    {
        title: "Rating",
        dist: RatingDist,
        log: RatingDistLog,
        table: RatingTable,
        text: "Once again we have data that is heavily skewed, most apps have a high rating as the mean, median and mode are all between 4.1-4.4. The log transformation here does not seem to help."
    },
    {
        title: "Size",
        dist: SizeDist,
        log: SizeDistlog,
        table: SizeTable,
        text: "Size data is heavily skewed and a log transformation seems to help."
    },
    {
        title: "Installations",
        dist: InstallDist,
        log: InstallDistLog,
        table: InstallTable,
        text: "The Installation variable is very skewed with a maximum number of installations at 1 billion median of 100 thousand and mode of 1 million. The log tranformation seems to smooth out the data but it makes the binning of the data more noticable. Earlier, I had mentioned that the number of installations if very large was rounded down essentialling binning the data, we see that here because there appear to be gaps in the graph."
    }
]

export const BoxplotData = [
    {
        title: "Price",
        plot: PriceBoxplot,
        text: "Apps in the 'Medical' category have a higher price compared to other categories."
    },
    {
        title: "Installations",
        plot: InstallBoxplot,
        text: "'Game' and 'Medical' categories have the highest and lowest number of installations respectively. Free applications have much more installations compared to apps that cost money."
    },
    {
        title: "Rating",
        plot: RatingBoxplot,
        text: "The rating box plot shows all categories have very similar ratings, except the 'Tools' category whcih seems to have slightly lower ratings. I did not check for if this difference was significant but made a note of the visual difference."
    },
    {
        title: "Reviews",
        plot: ReviewBoxplot,
        text: "'Game' and 'Medical' categories have the highest and lowest number of reviews respectively. Free applications have much more reviews compared to apps that cost money. This seems to correlate with the number of installations."
    },
    {
        title: "Size",
        plot: SizeBoxplot,
        text: "Apps in the game category are much larger than apps in other categories while apps in the tool category are much smaller."
    }
]

export const NNCData = [
    {
        title: "Category",
        plot: NNCcategory,
        text: "There is a lot of overlap between the categories it is hard to see any difference at least in a 2 dimensional graph."
    },
    {
        title: "Content Rating",
        plot: NNCcontentrating,
        text: "There is a lot of overlap between the content ratings it is hard to see any difference at least in a 2 dimensional graph."
    },
    {
        title: "Type",
        plot: NNCtype,
        text: "Although the two groups overlap in all of the plots we can notice where we see more free apps due to the free apps having a higher number of reviews, a higher number of installations, and lower ratings than the paid apps. We also see that because free apps have a price of 0 the plots comparing the price have all free apps along either the x = 0 or y = 0 axis."
    }
]