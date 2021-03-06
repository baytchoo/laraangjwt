<?php

Route::group([

    'middleware' => 'api'

], function () {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendpasswordresetlink', 'ResetPasswordController@sendEmail');
    Route::post('resetpassword', 'ChangePasswordController@process');

});
// Route::post('test', 'AuthController@test');