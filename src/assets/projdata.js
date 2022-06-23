import proj1 from './images/evo-bio-net/project-1-thumbnail.png'
import proj2 from './images/wine-quality/katie-azi-Qjf--1VqPSY-unsplash.jpeg'
import proj3 from './images/playstore/Play_Store_Logo.png'

export const ProjectData = [
    {
        img: proj3,
        title:'Google Play Store App Analysis',
        subtitle:'Data Visualization in Matlab | May 2022',
        link:'/app-analysis'
    },
    {
        img: proj2,
        title:'Wine Quality Prediction',
        subtitle:'Regression Modeling in R | Dec 2021',
        link:'/wine-quality'
    },
    {
        img: proj1,
        title:'Evolution of Biological Networks',
        subtitle:'Python Reseach Project | May 2021',
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

export const Project2Data1 = [
    {
        title: "Contributors",
        body: "Shayna Gaulden and Tien Nguyen"
    },
    {
        title: "Introduction",
        body: "This project seeks to create a regression model to predict the wine quality of red variants of the Portuguese ”Vinho Verde” wine from a data set including 11 variables that can be used as regressors and 1 variable that rates the quality of the wine to be used as the predictor variable. The quality of wine is rated on a scale that goes from 3-7. The regressor variables that are available include all of the following: fixed acidity, volatile acidity, citric acid, residual sugar, chlorides, free sulfur dioxide, total sulfur dioxide, density, pH, sulphates, and alcohol."
    },
    {
        title: "Preparing the Data",
        body: "The data has 1599 data points for each variable which seemed to be a sufficient enough amount to safely split the data into a training set and a testing set. All the model fitting was done exclusively on the data split into the training set while at the end two final models were chosen to be tested with the testing set of data. The data was split using a 20% testing and 80% training rule so in the end 1279 data points from each variable were used for training and the rest reserved for testing."
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