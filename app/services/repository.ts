/// <reference path="../../app/_boot/ref.d.ts" />
module App.Web {

    export interface IDto {
        url:string;
        data?:any;
        httpConfig?:any;
    }

    export interface IRepositoryService {
        bearerToken:string;
        getAction<T>(url:string, queryString?:string):angular.IPromise<T>;
        getData<T>(url:string):angular.IPromise<T>;
        getDataById<T>(url:string, id:string):angular.IPromise<T>;
        deleteDataById<T>(url:string, id:string):angular.IPromise<T>;
        deleteDataByQueryString<T>(url:string, queryString:string):angular.IPromise<T>;
        postAction<T>(entity:IDto):angular.IPromise<T>;
        postAction<T>(entity:IDto):angular.IPromise<T>;
        addOrUpdateData<T>(url:string, object:T):angular.IPromise<T>;
    }
    export class RepositoryService implements IRepositoryService {

        bearerToken:string;

        static $inject = [NGGlobal.$HTTP, NGGlobal.$Q];

        constructor(private $http:angular.IHttpService, private qService:ng.IQService) {
        }

        httpAction<T>(fn:()=>angular.IPromise<T>):angular.IPromise<T> {
            var deferred = this.qService.defer<T>();
            if (this.bearerToken) {
                this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + this.bearerToken;
            }
            try {
                return fn();
            }
            catch (ex) {
                console.log(ex.status);
                if (ex.status == 401) {
                    // unauthorized, go to login
                }
                deferred.reject(ex);
            }
            return deferred.promise;
        }

        getData<T>(url:string):angular.IPromise<T> {
            return this.httpAction(()=> {
                return this.$http.get(url).then((result):angular.IHttpPromiseCallbackArg<T>=> {
                    return result.data;
                })
            });
        }

        getDataById<T>(url:string, id:string):angular.IPromise<T> {
            return this.$http.get(url + '/' + id).then((result):angular.IHttpPromiseCallbackArg<T>=> {
                return result.data;
            });
        }

        deleteDataById<T>(url:string, id:string):angular.IPromise<T> {
            return this.$http.delete(url + '/' + id).then((result):angular.IHttpPromiseCallbackArg<T>=> {
                return result.data; // return the deleted object
            });
        }

        deleteDataByQueryString<T>(url:string, queryString:string):angular.IPromise<T> {
            return this.$http.delete(url + '?' + queryString).then((result):angular.IHttpPromiseCallbackArg<T>=> {
                return result.data;
            });
        }

        addOrUpdateData<T>(url:string, object:T):angular.IPromise<T> {
            return this.$http.post(url, object).then((result):angular.IHttpPromiseCallbackArg<T>=> {
                return result.data;
            });
        }

        getAction<T>(url:string, queryString?:string):angular.IPromise<T> {
            if (!queryString) {
                queryString = '';
            }
            return this.$http.get(url + '/' + queryString).then((result):angular.IHttpPromiseCallbackArg<T>=> {
                return result.data;
            });
        }

        postAction<T>(entity:IDto):angular.IPromise<T> {
            return this.$http.post(entity.url, entity.data, entity.httpConfig).then((result):angular.IHttpPromiseCallbackArg<T>=> {
                return result.data;
            });
        }
    }

    angular.module(Constants.MAIN_MODULE).service(Constants.SERVICE_REPOSITORY, RepositoryService);
}