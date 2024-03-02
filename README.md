![Hackathon Logo](docs/images/hackathon.png?raw=true "Hackathon Logo")

# Sitecore Hackathon 2024

-   MUST READ: **[Submission requirements](SUBMISSION_REQUIREMENTS.md)**
-   [Entry form template](ENTRYFORM.md)

### ⟹ [Insert your documentation here](ENTRYFORM.md) <<

# Sitecoreon Sentiment Checker

Sentiment Checker is a module for sitecore that creates a shortcut on the review tab of the content editor and let you select a text content field to check on Sentiment intent of a text.

## Screenshots

![App Screenshot](https://cmscritic.com/ms-content/uploads/2021/03/sitecore-featured-image-1.jpg?format=auto&width=2048)

## Documentation

This readme file details how to install and use the Sentiment Checker Powershell Extension Module.

## Summary

Category: Best Module for XM/XP or XM Cloud

The intention of this module is tho help Content editor to check on text Sentiment intention.

## Pre-requisites

The module requires Sitecore Powershell Extensions It is only tested with version 6.4

## Installation

1. Use the Sitecore Installation wizard to install the package
2. Once the package has been installed all integration points in SPE needs to be rebuilt
   ![App Screenshot](https://github.com/Sitecore-Hackathon/2024-Sitecoreon/blob/main/assets/sitecore06.png)
3. Rebuild integration points
4. The module is good to go!

## Configuration

For the module to work it need a valid API key from [https://nlpcloud.com/](https://nlpcloud.com/).
One you get your API Key go to settings and fill your API key and API Url fields on the settings section.

![App Screenshot](https://github.com/Sitecore-Hackathon/2024-Sitecoreon/blob/main/assets/sitecore05.png)

## Limitations

We use a free tier of the nlpcloud.com that have some limitations:

1. It have a limited ammount of request per hour
2. It have a max char limit of 400 chars, more than that would cause a 404 response

## Getting nlpcloud API keys

Just loging on [https://nlpcloud.com/](https://nlpcloud.com/) and your API keys should be generated

## Usage

The Module shorcut is placed under the review tab of content Editor and it is called Sentiment

![App Screenshot](https://github.com/Sitecore-Hackathon/2024-Sitecoreon/blob/main/assets/sitecore02.png)

Steps to use it:

1. Select the content that you need a text field to be checked on.
2. Hit the Sentiment Button
3. A popup is going to appear letting you to select the fields you want to check on.
   ![App Screenshot](https://github.com/Sitecore-Hackathon/2024-Sitecoreon/blob/main/assets/sitecore03.png)
4. Click Ok
5. Thats it , you get in percentage the context analysis of the Sentiment of that text field
   ![App Screenshot](https://github.com/Sitecore-Hackathon/2024-Sitecoreon/blob/main/assets/sitecore04.png)

Video
Video Demostration

## API Reference

#### Get all items

```http
  GET https://api.nlpcloud.io/v1/<model_name>/sentiment
```

| Parameter    | Type     | Description                |
| :----------- | :------- | :------------------------- |
| `apiKey`     | `string` | **Required**. Your API key |
| `model_name` | `string` | **Required**. Your API key |

[https://docs.nlpcloud.com/?shell#sentiment-analysis](https://docs.nlpcloud.com/?shell#sentiment-analysis)

## Tech Stack

**Client:** Sitecore, Jquery, CSS

## Authors

-   [Mariela Pancho](https://www.github.com/octokatherine)
-   [Andres Miño](https://www.github.com/octokatherine)
-   [Francisco Cornejo](https://www.github.com/octokatherine)
