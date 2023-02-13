import { LightningElement, api } from 'lwc';
import { gql } from 'lightning/uiGraphQLApi';

export const MenuFragment = gql `fragment MenuFragment on MenuItems__r {
    Name {
        value
    }
    Category__c{
        value
    }
    Description__c {
        value
    }
    Price__c {
        value
    }
}`

export default class UberMenu extends LightningElement {

    @api menuItems;

}