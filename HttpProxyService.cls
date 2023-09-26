public with sharing class HttpProxyService {
    @AuraEnabled(cacheable=true)
    public static String getHttpResponse(String trackingNumber) {
        String url='';
        if(trackingNumber == null){
            url = 'https://merzcommunities--mel.sandbox.my.salesforce-sites.com/services/apexrest/mockShipmentStatus?';
 			System.debug('null value');
        }
        else{
        url = 'https://merzcommunities--mel.sandbox.my.salesforce-sites.com/services/apexrest/mockShipmentStatus?trackingNumber=' + trackingNumber;
        }
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(url);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        return response.getBody();
    }
}