# Project Wine

## Participants
- Khantapob
- Onyi
- Marie
- Dana

## Project Summary

We will analyze the different types and regions of wine to determine (1) if the score identified in the dataset is correlated to the price per bottle, (2) the best value wine, as in which is the most inexpensive wine with the highest score of each different type, and (3) if we are able to hypothesize the overall weather of the region based on the price evolution of the same type and region of wine. 


## Questions
- Can we predict the weather based on scoring?
- Is price affected by score? 
- What is the cheapest wine with the best score?

## Datasets
- 130k wine reviews with variety, location, winery, price, and description: https://www.kaggle.com/zynicide/wine-reviews
- vintage scores per region/country: https://www.platsnetvins.com/guide-des-millesimes-des-vins.php?pays=France&idpays=1

## Plan

### Data Cleaning/ Process

- Extract year from name of wine in the dataset 
- Create plots
- Sentiment analysis on description of wine
- Explanation of data
- Display all plots and findings in a web page

### Plots
- Correlation between score and price (Khantapob)
- Correlation between score and rating (Khantapob)
- Correlation between score and region
- Correlation between score and country
- Sentiment analysis of description as correlated with score
- Evolution of each price per region




### Introduction
- Map of the wine production in 2016 (Dana)
(- Generic facts about wine / production over the years, evolution of average price...°

### Our datasets
- MAIN: 130k critics of wine/ nb of rows, nb of countries, region, nb of different taster (nb of wine tested per tester), average rating, price...
- VINTAGE: vintage score: nb of region/ countries / years

### Cleaning and Sampling the datasets
- MAIN: Extract the years from the wine description (Onyi)
- MAIN: Pull out several random samples and compare p-values (Marie)
- VINTAGE: Translate the region to match main data-set values and merge the different countries (Marie)

###
- Merge the 2 dataset and compare by region/ years: the score given by the vintage dataset and the ratings (and average price) for the same year region in the main dataset
