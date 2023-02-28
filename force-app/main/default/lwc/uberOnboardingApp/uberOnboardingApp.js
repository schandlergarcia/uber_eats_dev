import { LightningElement, wire, api } from "lwc";
import { gql, graphql } from "lightning/uiGraphQLApi";
import { ContactFragment } from 'c/UberContactDetails';
import { TaskFragment } from "../uberOnboardingTask/uberOnboardingTask";
import { MenuFragment } from "../uberMenu/uberMenu";

export default class UberOnboardingApp extends LightningElement {

    @api recordId;

    @wire(graphql, {
        query: gql`
        query getOnboardingData {
          uiapi {
            query {
              Account(where: { Id: { eq: $recordId } }){
                edges {
                  node {
                    Id
                    Name {
                      value
                    }
                    BillingStreet{
                      value
                    }
                    BillingCity{
                      value
                    }
                    BillingState{
                      value
                    }
                    BillingPostalCode{
                      value
                    }
                    BillingCountry{
                      value
                    }
                    Website{
                      value
                    }
                    MainContact__r {
                        ...ContactFragment
                    }
                    OnboardingTasks__r {
                        ...TaskFragment
                    }
                    MenuItems__r {
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
                  }
                  }
                }
              }
            }
          }
        }
        ${ContactFragment}
        ${TaskFragment}
        ${MenuFragment}
        `,
        variables: '$variables'
      })
      graphqlQueryResult({ data, errors }) {
        if (data) {
          this.results = data.uiapi.query.Account.edges.map((edge) => edge.node);
          this.errors = undefined;
        } else if (errors) {
          this.errors = errors;
        }
      }
    
      get variables() {
        return {
          recordId: this.recordId
        };
      }
}
