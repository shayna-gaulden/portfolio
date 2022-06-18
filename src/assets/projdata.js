import proj1 from './images/project-1-thumbnail.png'

export const ProjectData = [
    {
        img: proj1,
        title:'Evolution of Biological Networks',
        subtitle:'Python Reseach Project',
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