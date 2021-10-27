# Michelin-Dashboard

**Proposal**

We have decided to pursue a “Michelin Map” that will consist of one, two, and three Michelin Star restaurants worldwide. Using this interactive map, we want our users to have access to destination estimates. For example, a Two-Star Michelin restaurant is “worth the detour”, therefore, we would give an estimated time of arrival. As for a Three-Star restaurant which is “worth the journey” we can locate a nearby airport within a given radius of the restaurant. 

Our original [dataset](https://www.kaggle.com/jackywang529/michelin-restaurants) includes basic information on each michelin star restaurant in CSVs. Initially we will clean our data using pandas in a jupyter notebook. We will then create a SQL database to house all of that information, which will feed into our Python Flask API. We will deploy our dashboard through this Flask App, utilizing leaflet layers to add interactive and user-friendly elements to the Michelin Map. Our interactive map will essentially be the one-stop shop for a travel guide to michelin star restaurants. We will webscrape data for each restaurant such that when our app is deployed, you will be able to click each restaurant and know relevant details (price, cuisine type etc) and travel information. This webscrape will be coming directly from the Michelin guide website- where we will store in a MongoDB. This dictionary format will be convenient for the MongoDB storage and JavaScript implementation. The interactive map will include a drop down with multiple views, including a layer for each star level, in case users want to only look at one star level at a time. 

We will also include, for visualization, a chart off to the side based on country location. Using leaflet, we can create interaction by country (or any border) to detail Michelin facts for a given area. For example, the USA has 1032 1-Star restaurants, 302 2-Star, and 34 3-Star. This can be done using a simple barchart style format with custom features such as each unit being represented by the Michelin star logos. Other visualizations can offer more insight into what style of cuisine (seafood, french, contemporary, etc) is popular overall, and in certain nations.  

As for new tools to be utilized during the project, we will consider using HighCharts which provides a globe. We think this will provide a unique way to display our international data! Plugins that we will consider from Leaflet will be a BorderPan (which allows us to interact with map borders) and a Route360 which could provide us with mapping directions to get from Point A to Point B. 




See below for similar examples on how the Michelin Map may look:

*Restaurant Map*

![Restaurant Map](https://github.com/Bgood524/Michelin-Dashboard/blob/main/Proposal_Data/Images/Example_1.png)


*Restaurant Info to Scrape*

![Restaurant Info to Scrape](https://github.com/Bgood524/Michelin-Dashboard/blob/main/Proposal_Data/Images/Example_2.png)

*Additional Visualization Example*

![Visualization](https://github.com/Bgood524/Michelin-Dashboard/blob/main/Proposal_Data/Images/michelin_bubble.png)

*Airport Directions Example*

![Directions](https://github.com/Bgood524/Michelin-Dashboard/blob/main/Proposal_Data/Images/google-api-3.jpg)
