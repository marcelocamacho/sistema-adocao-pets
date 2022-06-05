<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/contato', function(){
    echo 'Estou na página de contato';
});

Route::get('/produtos', function(){
    echo 'Estou na página de produtos';
});
Route::get('/sobre', function(){
    echo 'Estou na página sobre';
});