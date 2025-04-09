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

$resources = [
    [
        'id' => 1,
        'name' => 'Ahmed',
        'age' => 19,
    ],
];

Route::get('/resource', function() {
    global $resources;
    dd($resources);
    return view('resource', ['resources' => $resources]);
});

Route::post('/resource', function(Request $request) {
    global $resources;

    $resource = $request->all();

    $resources = array_push($resources, $resource);

    return redirect('/resource');
});

Route::put('/resource/{id}', function(Request $request, $id) {
    global $resources;

    $resource = $request->all();

    $resource_index = array_find_key($resources, function($res) {
        global $resource;
        return $res['id'] === $resource['id'];
    });

    $resources[$resource_index] = $resource;

    return redirect('/resource');
});

