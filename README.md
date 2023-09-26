# Merz_CodingTest_Nafiya

# Shipment Status Lightning Web Component

## Description
The Shipment Status Lightning Web Component (LWC) is designed to display the latest status of a shipment based on the tracking number of a Shipment record in Salesforce. It makes use of the `HttpProxyService` Apex class to fetch data from an external mock endpoint.

## Features
- Fetches shipment tracking information based on the record's tracking number.
- Displays the tracking number and shipment status in a Lightning card.
- Handles cases where the tracking number is null and provides appropriate feedback.

## Usage
1. Add the `ShipmentStatus_Merz` component to a Lightning Record Page as it is exposed to Lightning Record Pages.

2. When a Shipment record is viewed, the component will automatically retrieve the tracking number and display the shipment status.


### Installation
To install the component in your Salesforce org, follow these steps:
1. Deploy the component's metadata to your Salesforce org.
2. Add the component to the desired record page 

## Dependencies
- Lightning Web Component (`ShipmentStatus_Merz`)
- `HttpProxyService` Apex class

### Components
- `ShipmentStatus_Merz`:
  - `ShipmentStatusLWC.html`: Contains the HTML markup for displaying the shipment status.
  - `ShipmentStatusLWC.js`: Contains the JavaScript logic for fetching data and handling errors.

### Installation

## Apex Class: `HttpProxyService`

### Description
The `HttpProxyService` Apex class acts as an intermediary for making HTTP callouts to retrieve shipment status information. It handles the construction of the callout URL based on the provided tracking number.

### Methods
- `getHttpResponse(String trackingNumber)`: Accepts a tracking number as input and returns the HTTP response from the mock shipment status service.

## Author
- Nafiya Shaik


![image](https://github.com/nafiyashaik33/Merz_CodingTest_Nafiya/assets/146040260/da4cac29-fc45-40d8-9bbb-ed11e33d69be)
