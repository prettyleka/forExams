import { ApiResponse } from '../infra/rest/api-response';
import { Restaurant } from '../logic/REST/API-Response/get-restaurants-response';
import { expect } from 'chai';


import restaurantsAPI from '../logic/REST/restaurantsAPI';
import { time } from 'console';
import { exit, exitCode } from 'process';
import { add, update } from 'lodash';
import { RestaurantPage } from '../logic/pages/restaurant-page';

describe('Restaurants tests', () => {

    before('Reset restaurant server', async () => {
        //Arrange
        await restaurantsAPI.resetServer();
    })
    /*
        it('Validate the amount of restaurants', async () => {
            //Act
            const restaurants: ApiResponse<Restaurant[]> = await restaurantsAPI.getRestaurants();
    
            //Assert
            expect(restaurants.success).to.be.true;
            const actualAmount = restaurants.data?.length;
            expect(actualAmount).to.equal(3, 'Restaurants amount is not as expected');
        })
    
        it('Get restaurant by id', async () => {
            //Arrange
            const myNewRest = { address: "My Addess 1", id: 233, name: "My Restaurant", score: 2.3 };
            const createResponse = await restaurantsAPI.createRestaurant(myNewRest);
    
            //Act
            const getByIdResponse = await restaurantsAPI.getRestaurantById(233);
    
            //Assert
            expect(getByIdResponse.status).to.equal(200);
            expect(getByIdResponse.success).to.be.true;
            expect(getByIdResponse.data).to.deep.equal(myNewRest);
        })
    
        it('Get non exsisting restaurant', async () => {
            //Act
            const getByIdResponse = await restaurantsAPI.getRestaurantById(233);
    
            //Assert
            expect(getByIdResponse.error).to.equal("restaurant with given id not found");
            expect(getByIdResponse.success).to.be.false;
            expect(getByIdResponse.status).to.equal(404);
        })
*/
    it('Add restaurant', async () => {
        //Act Add
        const myNewRest2 = { address: "Ramat Gan", id: 777, name: "9Ducks", score: 10.0 };
        const addNewRestaurant = await restaurantsAPI.createRestaurant(myNewRest2);
        const restaurantsAfterAddingNew: ApiResponse<Restaurant[]> = await restaurantsAPI.getRestaurants();
        const amountWithNew = restaurantsAfterAddingNew.data?.length;
        //Assert Add
        expect(addNewRestaurant.success).to.true;
        expect(addNewRestaurant.status).to.equal(200 | 201);
        //   expect(amountWithNew).to.equal(4, 'Restaurants amount is as expected');
    })


    it('reset restaurant', async () => {
        //Act Update
        const resetToDefault = await restaurantsAPI.resetAll();
        //Assert 
        expect(resetToDefault.success).to.true
        expect(resetToDefault.status).to.equal(200 | 201);

    })

    it('Delete restaurant', async () => {
        //Act Delete
        const myRest = { address: "Ramat Gan", id: 777, name: "9Ducks", score: 10.0 }
        const deleteRest = await restaurantsAPI.deleteRestByID(777);
        // const restaurantsAfterDelete: ApiResponse<Restaurant[]> = await restaurantsAPI.getRestaurants();
        //const amountAfterDel = restaurantsAfterDelete.data?.length;
        const getByIdResponse = await restaurantsAPI.getRestaurantById(myRest.id)
        //Assert Delete
        expect(deleteRest.success).to.true;
        expect(deleteRest.status).to.equal(200);
        //   expect(amountAfterDel).to.equal(3, 'Restaurants amount is as expected');
        expect(getByIdResponse.error).to.equal("restaurant with given id not found");
    })




})