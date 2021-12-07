import { ApiResponse } from '../../infra/rest/api-response';
import HttpRequest from '../../infra/rest/network-request';
import { Restaurant } from "./API-Response/get-restaurants-response";
import jsonConfig from '../../../config.json';
import { bindAll, findIndex, update } from 'lodash';
import { AddressInfo, SocketAddress } from 'net';
import { visitFunctionBody } from 'typescript';
import { RestaurantPage } from '../pages/restaurant-page';

const baseUrl = jsonConfig.baseUrl + '/';

const getRestaurants = async (): Promise<ApiResponse<Restaurant[]>> => {
    return HttpRequest.networkRequest({ url: baseUrl + 'restaurants', method: HttpRequest.HttpMethod.GET, });

}

const resetServer = async (): Promise<ApiResponse<null>> => {
    return HttpRequest.networkRequest({ url: baseUrl + 'reset', method: HttpRequest.HttpMethod.POST, });

}

const createRestaurant = async (body: Restaurant): Promise<ApiResponse<null>> => {
    return HttpRequest.networkRequest({ url: baseUrl + 'restaurant', method: HttpRequest.HttpMethod.POST, body: body })
}

const getRestaurantById = async (id: number): Promise<ApiResponse<Restaurant[]>> => {
    return HttpRequest.networkRequest({ url: baseUrl + 'restaurant', method: HttpRequest.HttpMethod.GET, queryParams: { id: id } });
}

const deleteRestByID = async (id: number): Promise<ApiResponse<Restaurant[]>> => {
    return HttpRequest.networkRequest({ url: baseUrl + 'restaurant/' + id, method: HttpRequest.HttpMethod.DELETE, queryParams: { id: id } });
}

const resetAll = async (): Promise<ApiResponse<Restaurant[]>> => {
    return HttpRequest.networkRequest({
        url: baseUrl + 'restaurant',
        method: HttpRequest.HttpMethod.POST
    })
}



///restaurant/777
export default { getRestaurants, resetServer, createRestaurant, getRestaurantById, deleteRestByID, resetAll }