<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
  return View::make('index');
});

Route::group(array('prefix' => 'api/v1'), function() {
  Route::resource('users', 'UserController',
    array('only' => array('index', 'show', 'store', 'destroy'))
  );
  Route::resource('users-employee', 'UserEmployeeController',
    array('only' => array('index', 'show', 'store', 'destroy'))
  );
  Route::resource('users-sp', 'UserServiceProviderController',
    array('only' => array('index', 'show', 'store', 'destroy'))
  );
  Route::resource('users-customer', 'UserCustomerController',
    array('only' => array('index', 'show', 'store', 'destroy'))
  );
  Route::resource('privileges', 'PrivilegeController',
    array('only' => array('index', 'store', 'destroy'))
  );
  Route::resource('modules', 'ModuleController',
    array('only' => array('index', 'store', 'destroy'))
  );
  Route::resource('users.privileges', 'UserPrivilegesController',
    array('only' => array('index', 'show'))
  );
  Route::resource('modules.privilegetypes', 'ModulePrivilegeTypeController',
    array('only' => array('index', 'show'))
  );
  Route::resource('users.modules.privileges', 'UserModulePrivilegeController',
    array('only' => array('index', 'show', 'store', 'destroy', 'update'))
  );
  Route::resource('markets', 'MarketController',
    array('only' => array('index', 'show', 'store', 'destroy'))
  );
  Route::resource('service-categories', 'ServiceCategoryController',
    array('only' => array('index', 'show', 'store', 'destroy'))
  );
  Route::resource('packages', 'PackageController',
    array('only' => array('index', 'show', 'store', 'destroy'))
  );
  Route::resource('images', 'ImageController',
    array('only' => array('index', 'show', 'store', 'destroy'))
  );
  Route::resource('trims', 'TrimController',
    array('only' => array('index', 'show', 'store', 'destroy'))
  );
  Route::resource('image-upload', 'ImageUploadController',
    array('only' => array('store'))
  );
  Route::resource('companies', 'CompanyController',
    array('only' => array('index', 'show', 'store', 'destroy'))
  );
  Route::post('login/auth','AuthController@login');
  Route::get('login/destroy','AuthController@logout');
  Route::get('oauth/token','OauthServiceController@getAccessToken');
});

App::missing(function($exception) {
  return View::make('index');
});
