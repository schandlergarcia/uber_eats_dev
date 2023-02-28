import { LightningElement, api } from 'lwc';
import { gql } from 'lightning/uiGraphQLApi';

export const MenuFragment = gql `fragment MenuFragment on MenuItems__r {
    Name {
        value
    }
    Category__c{
        value
    }
    Price {
        value
    }
    Description{
        Value
    }
}`

export default class UberMenu extends LightningElement {

    @api menuItems;

}