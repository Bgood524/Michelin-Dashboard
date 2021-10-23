# Michelin-Dashboard

**Proposal**

We have decided to pursue a “Michelin Map” that will consist of one, two, and three Michelin Star restaurants worldwide. Using this interactive map, we want our users to have access to destination estimates. For example, a Two-Star Michelin restaurant is “worth the detour”, therefore, we would give an estimated time of arrival. As for a Three-Star restaurant which is “worth the journey” we can locate a nearby airport within a given radius of the restaurant. 

Our original [dataset](https://www.kaggle.com/jackywang529/michelin-restaurants) includes basic information on each michelin star restaurant in CSVs. Initially we will clean our data using pandas in a jupyter notebook. We will then create a SQL database to house all of that information, which will feed into our Python Flask API. We will deploy our dashboard through this Flask App, utilizing leaflet layers to add interactive and user-friendly elements to the Michelin Map. Our interactive map will essentially be the one-stop shop for a travel guide to michelin star restaurants. We will webscrape data for each restaurant such that when our app is deployed, you will be able to click each restaurant and know relevant details (price, cuisine type etc) and travel information. See below for similar examples on how the Michelin Map may look:

*Restaurant Map*

![Restaurant Map](https://github.com/Bgood524/Michelin-Dashboard/blob/main/Proposal_Data/Images/Example_1.png)


*Restaurant Info to Scrape*

![Restaurant Info to Scrape](https://github.com/Bgood524/Michelin-Dashboard/blob/main/Proposal_Data/Images/Example_2.png)

