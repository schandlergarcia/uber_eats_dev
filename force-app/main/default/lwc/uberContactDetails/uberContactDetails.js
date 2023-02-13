import { LightningElement, api } from 'lwc';
import { gql } from 'lightning/uiGraphQLApi';

export const ContactFragment = gql `fragment ContactFragment on Contact {
    Name {
        value
    }
    Email {
        value
    }
    Mobile {
        value
    }
}`

export default class UberAccountDetails extends LightningElement {

    @api contact;

}