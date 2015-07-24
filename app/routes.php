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


Route::get('main', 'HomeController@showEnterate');
Route::get('/', 'HomeController@showEnterate');
Route::get('/hospedaje', function()
{
    return View::make("hospedaje");
});
Route::get('/actividades', function()
{
    return View::make("actividades");
});



