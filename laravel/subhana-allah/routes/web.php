<?php
// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });
Route::view('/', 'welcome');

// Route::get('/subhana-allah', function () {
//     return 'subhana Allah';
// });

// only cares about order
Route::get('/subhana-allah/{id}/{category?}', function($id, $cat=null) {
    return view('subhana-allah-get', [
        'subhana_allah_id' => $id,
        'category' => $cat,
    ]);
    // return 'subhana Allah: id = ' . $id . '. category = ' . ($cat ?? '(none)');
});

Route::view('/about', 'about');
Route::view('/contact', 'contact');

Route::post('/contact', function(Request $request) {
    return view('contact-post', $request->all());
});

