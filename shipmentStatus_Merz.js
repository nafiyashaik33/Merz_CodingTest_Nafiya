import { LightningElement, wire, api } from 'lwc';
import getHttpResponse from '@salesforce/apex/HttpProxyService.getHttpResponse';
import { getRecord} from 'lightning/uiRecordApi';

export default class ShipmentStatusLWC extends LightningElement {
   @api recordId;
   externalData='';
   trackingNumber;

   @wire(getRecord, { recordId: '$recordId', fields: ['Shipment.TrackingNumber'] })
   wiredRecord({ error, data }) {
       if (data) {
           this.trackingNumber = data.fields.TrackingNumber.value;
           console.log('tracking Number'+ this.trackingNumber);
       } else if (error) {
           console.error(error);
       }
   }

   @wire(getHttpResponse, { trackingNumber: '$trackingNumber' })
   wiredData({ error, data }) {
       if (data) {
           this.externalData = data;
           console.log('External data' + data);
       } else if (error) {
           console.error(error);
           
           console.log('error'+ error);
       }
   }

}