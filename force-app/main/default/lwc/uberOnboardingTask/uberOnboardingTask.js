import { LightningElement, api } from 'lwc';
import { gql } from 'lightning/uiGraphQLApi';

export const TaskFragment = gql `fragment TaskFragment on Tasks {
    Name {
        value
    }
    Description__c {
        value
    }
    Status__c {
        value
    }
    CurrentStage__c{
        value
    }
}`
export default class UberOnboardingTask extends LightningElement {

    @api tasks;

}