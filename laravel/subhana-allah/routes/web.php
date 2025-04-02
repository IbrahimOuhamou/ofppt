<?php
// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });
Route::view('/', 'welcome');

Route::get('/subhana-allah', function () {
    return 'subhana Allah';
});

// only cares about order
Route::get('/subhana-allah/{id}/{category?}', function($id, $cat=null) {
    return view('subhana-allah-get', [
        'subhana_allah_id' => $id,
        'category' => $cat,
    ]);
    // return 'subhana Allah: id = ' . $id . '. category = ' . ($cat ?? '(none)');
});

